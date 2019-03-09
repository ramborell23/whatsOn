<template>
<div id="app">
    <div id="">
        <b-navbar type="dark" variant="dark" v-bind:sticky=true style="margin-bottom=:3em;">
          <b-navbar-brand class="home-logo" href="#"> Whats On</b-navbar-brand>
            <b-navbar-nav class="page-links" style="float: right;">
                <b-nav-item to="/">Home</b-nav-item>
                <!-- <b-nav-item to="/trending">Trending</b-nav-item> -->
                <!-- <b-nav-item to="/movies">Movies</b-nav-item> -->
                <b-nav-item-dropdown to="/" text="TV" left>
                    <b-dropdown-item to="/tv">On Tonight</b-dropdown-item>
                    <b-dropdown-item href="#">Netflix</b-dropdown-item>
                    <b-dropdown-item to="/trending/tv">Trending TV</b-dropdown-item>
                 
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Movies" right>
                    <b-dropdown-item to="/movies/theaters">In Theaters</b-dropdown-item>
                    <b-dropdown-item to="/movies/comingsoon">Coming Soon</b-dropdown-item>
                    <b-dropdown-item to="/trending/movies">Trending Movies</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item to="/search">Search</b-nav-item>
                <b-nav-item to="/news">News</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>

                
            </b-navbar-nav>
        </b-navbar>
    </div>
    <router-view />
</div>
</template>


<style>
@import url('https://fonts.googleapis.com/css?family=Shrikhand');
html{
  height: 100%;
  background-color: rgb(24, 24, 24); 
}

body{
  counter-reset: section;

}
#app {
    /* /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  background-color: rgb(24, 24, 24); 
  height: 100%;
}

.home{
  margin-top: 3em;
}

.home-logo{
  font-family: 'Shrikhand', cursive;
  font-size: 2em
}

.page-links{
  float: right;
}

</style>
