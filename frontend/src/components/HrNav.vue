<template>
    <nav class="hrBar">
        <div class="navElements">
            <router-link to="/">Home</router-link>
        </div>
    </nav>
</template>

<script>
import router from '@/router';

export default {
    name: 'HrNav'
}

</script>
<style>
    .hrBar{
        width: 1000px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-self: center;
        border-radius: 5px; 
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 210px;
        z-index: 1;
    }
</style>