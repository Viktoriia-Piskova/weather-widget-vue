<template>
  <nav>
    <router-link to="/">Main</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

input {
  height: 40px;
  width: 50%;
  border: 1px solid grey;
  padding: 10px;
}

input:focus {
  border: 3px solid #2c3e50;
  background-color: white;
}

button {
  height: 40px;
  width: 50%;
  background-color: #42b983;
  color: white;
  font-size: 20px;
  border: none;
}
</style>
