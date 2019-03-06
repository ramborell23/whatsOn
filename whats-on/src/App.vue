<template>
<div id="app">
    <div id="">

        <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link to="/popular">Popular</router-link> | -->
        <!-- <router-link to="/tv">TV</router-link> |
      <router-link to="/movies">Movies</router-link> |
      <router-link to="/discover">Discover</router-link> |
      <router-link to="/about">About</router-link> | -->
        <!-- <router-link to="/h2">About</router-link> -->
        <b-navbar type="dark" variant="dark" v-bind:sticky=true>
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <!-- <b-nav-item to="/trending">Trending</b-nav-item> -->
                <!-- <b-nav-item to="/movies">Movies</b-nav-item> -->
                <b-nav-item-dropdown to="/" text="TV" left>
                    <b-dropdown-item to="/tv">On Tonight</b-dropdown-item>
                    <b-dropdown-item href="#">Netflix</b-dropdown-item>
                    <b-dropdown-item to="/trending/tv">Trending TV</b-dropdown-item>
                    <!-- <b-dropdown-item to="/movies/comingsoon">Coming Soon</b-dropdown-item> -->
                    <!-- <b-dropdown-item href="#">Netflix</b-dropdown-item> -->
                    <!-- <b-dropdown-item href="#">RU</b-dropdown-item> -->
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Movies" right>
                    <b-dropdown-item to="/movies/theaters">In Theaters</b-dropdown-item>
                    <b-dropdown-item to="/movies/comingsoon">Coming Soon</b-dropdown-item>
                    <b-dropdown-item to="/trending/movies">Trending Movies</b-dropdown-item>
                    <!-- <b-dropdown-item href="#">RU</b-dropdown-item> -->
                </b-nav-item-dropdown>
                <!-- <b-nav-item to="/discover">Discover</b-nav-item> -->
                <b-nav-item to="/search">Search</b-nav-item>
                <b-nav-item to="/news">News</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>

                <!-- <b-nav-form right>
                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form> -->

            </b-navbar-nav>
        </b-navbar>
    </div>
    <router-view />
</div>
</template>

<style>
#app {
    /* /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  background-color: rgb(24, 24, 24); 
}
</style>
