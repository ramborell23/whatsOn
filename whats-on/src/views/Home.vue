<template>
<div>
    <h1>
        Whats On
    </h1>
    <div class="home">

        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <TrendingMovies message="Got this page working" />
        <TrendingTV message="Got this page working" />
        <!-- <br/>
        <br/> -->
        <!-- <router-view></router-view> -->
    </div>
</div>
</template>

<script>
// @ is an alias to /src
// import test from '@/components/Test.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
import TrendingMovies from '@/components/TrendingMovies.vue'
import TrendingTV from '@/components/TrendingTV.vue'

export default {
    name: 'home',

    components: {
        TrendingMovies,
        TrendingTV
    },

}
</script>

<style>
.home {
  display: flex;
  justify-content: space-between;
}
</style>
