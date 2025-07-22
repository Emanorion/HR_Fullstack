<template>
    <nav>
        <h3 style="flex-grow: 0;padding-left: 10px;">ModernTech Solutions</h3>
        <div>
            <router-link to="/overview">Home</router-link>
            <router-link to="/" style="flex-grow: 2;">Logout</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}

</script> 