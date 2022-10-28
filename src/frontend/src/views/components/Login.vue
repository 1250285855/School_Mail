<script setup>

import { ref } from 'vue'
import { account_list } from '@/api/api.js';

const list = ref([])

async function getAccountList () {
    
    list.value = await account_list()

    return list.value
}

</script>

<template>
    <input v-on:click="account_list" type="button" value="账户列表" />
    {{ list.value }}
</template>