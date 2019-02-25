<template>
  <div id="app">
    <div id="">
      <router-link to="/">Home</router-link> |
      <router-link to="/popular">Popular</router-link> |
      <router-link to="/tv">TV</router-link> |
      <router-link to="/movies">Movies</router-link> |
      <router-link to="/discover">Discover</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/h2">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: black; */
}
</style>
