<template>

  <router-view/>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: rgba(230, 229, 229, 0.363);
}
#app {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 80;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1b7ad8;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #2c3e50;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

nav a {
  font-weight: bold;
  color: #d3d7db;
  text-decoration: none;
  align-self: center;
  align-items: center;
  padding: 10px;
  
}
nav a:hover{
  text-transform: uppercase;
}
h3{
  margin: 0;
  color: #d3d7db;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
