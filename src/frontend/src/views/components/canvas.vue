<template>
    <div class="canvas-container" ref="canvasContainer" @scroll="onScroll">
      <canvas ref="canvas" class="canvas"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const canvas = this.$refs.canvas;
      const canvasContainer = this.$refs.canvasContainer;
      const ctx = canvas.getContext('2d');
  
      // 设置画布大小和初始位置
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      canvas.style.left = "0px";
      canvas.style.top = "0px";
  
      // 绘制图形
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(10, 10, 50, 50);
  
      // 监听鼠标事件
      let isDragging = false;
      let lastX, lastY;
  
      canvas.addEventListener('mousedown', function(e) {
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
      });
  
      canvas.addEventListener('mousemove', function(e) {
        if (isDragging) {
          let deltaX = e.clientX - lastX;
          let deltaY = e.clientY - lastY;
          canvas.style.left = parseInt(canvas.style.left) + deltaX + "px";
          canvas.style.top = parseInt(canvas.style.top) + deltaY + "px";
          lastX = e.clientX;
          lastY = e.clientY;
        }
      });
  
      canvas.addEventListener('mouseup', function(e) {
        isDragging = false;
      });
    },
    methods: {
      onScroll(e) {
        const canvas = this.$refs.canvas;
        const canvasContainer = this.$refs.canvasContainer;
        const ctx = canvas.getContext('2d');
  
        // 获取当前画布和容器的尺寸和位置
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const containerWidth = canvasContainer.clientWidth;
        const containerHeight = canvasContainer.clientHeight;
        const containerScrollLeft = canvasContainer.scrollLeft;
        const containerScrollTop = canvasContainer.scrollTop;
  
        // 绘制图形
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = "#FF0000";
        for (let x = containerScrollLeft % 50; x < containerWidth; x += 50) {
          for (let y = containerScrollTop % 50; y < containerHeight; y += 50) {
            ctx.fillRect(x, y, 50, 50);
          }
        }
      }
    }
  }
  </script>
  
  <style>
  .canvas-container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
  }
  
  .canvas {
    position: absolute;
  }
  </style>
  