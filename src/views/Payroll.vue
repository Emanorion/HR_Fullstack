<template>
    <div class="payroll-layout">
        <PayrollComp/>
        <SideBar/>
    </div>
</template>

<script>

    import PayrollComp from '@/components/PayrollComp.vue';
    import SideBar from '@/components/SideBar.vue';

    export default {
        components: {
            PayrollComp,
            SideBar
        }
    }
</script>

<style scoped>
    
</style>