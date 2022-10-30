<script setup>

console.log("hello")

</script>

<template>
 <div id="main">

  <div id="logo">
    <img src="src/assets/imgs/IDEC_CE_Logo_With_Name.png" alt="logo" />
  </div>

 </div>
</template>

<style scoped>

#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  width: 100%;
  min-width: 1080px;
  background-color: #a7a7a7;
  align-items: center;
}

#logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo img {
  width: 160px;
  height: 80px;
}

</style>