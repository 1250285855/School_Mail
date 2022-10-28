<script setup>
    import Register from './components/Register.vue';
    import Login from './components/Login.vue';
    import DeleteAccount from './components/DeleteAccount.vue';
</script>

<template>
    <div id="main">
        <div id="register">
            <Register></Register>
            <DeleteAccount></DeleteAccount>
            <Login></Login>
        </div>
    </div>
</template>

<style scoped>

</style>