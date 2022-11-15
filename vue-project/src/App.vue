<script>
// import HomePage from '@/view/HomePage.vue';
import HeaderPage from '@/components/HeaderPage.vue'
export default {   
    components: {
        HeaderPage,
    },
};
</script>
<template>
    <HeaderPage />
       <router-view/>
       
       
    
</template>
<style>
</style>