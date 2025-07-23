<template>
    <header class="greeting">
        <h1 class="greet-head">ModernTech Solutions</h1>
        <br>
        <h1 class="greet-welcome">Welcome user</h1>
        <router-link to="/login">
            <button class="gstart">Get Started</button>
        </router-link>
    </header>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style>
.greeting{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeIn ease 2.5s;
}

.greet-head {
    color: #2d4257;
    font-size: 80px;
    text-align: center;
    text-shadow: 2px 2px 8px
}


.gstart {
    font-weight: 400;
    font-size: 20px;
    color: rgb(224, 222, 222);
    background-color: #2d4257;
    border: none;
    border-radius: 15px;
    padding: 4px 10px;
}

.gstart:hover {
        border-radius: 15px;    
        background-color: white;
        color: #2d4257;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 20px 0 rgba(0, 0, 0, 0.08);
        transform: translateY(-1px);
        transition: transform ease-in .5s;
    }

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 600px) {
    .greet-head {
        font-size: 70px;
    }
    .greet-welcome {
        font-size: 50px;
    }
}

@media (max-width: 400px) {
    .greet-head {
        font-size: 55px;
    }
    .greet-welcome {
        font-size: 35px;
    }
}
</style>
