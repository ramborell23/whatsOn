<template>
<div>
    <h1>
        Whats On
    </h1>
    <div class="home">
        
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <!-- <TrendingMovies message="Got this page working" />
        <TrendingTV message="Got this page working" /> -->
        <!-- <br/>
        <br/> -->
        <!-- <router-view></router-view> -->
        <ul id="example-1" class="list-of-articles">
            <template v-for="(article, index) in movie_news" class="home-card-item" style="max-width:50em">
                <b-card v-bind:key="index" v-bind:title="article.title" v-bind:img-src="article.urlToImage" img-alt="Image" img-top tag="article"  class="home-article"  bg-variant="secondary">
                    <b-card-text class="home-card-main-text">
                        <!-- <h3>{{}}</h3> -->
                        <!-- Author: {{ article.author }}<br/> -->
                        <!-- Some quick example text to build on the card title and make up the bulk of the card's content. -->
                        {{article.description}}
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                    <b-card-text class="subtext">
                        <!-- {{article.description}}  -->
                        Author: {{ article.author }}<br/>
    </b-card-text>
                </b-card>
                <!-- Title: {{ article.title }}<br/> -->
                <!-- Author: {{ article.author }}<br/> -->
                <!-- <img v-bind:src="article.urlToImage" alt="movie poster"/> -->
            </template>
        </ul>

    </div>
</div>
</template>

<script>
// @ is an alias to /src
// import test from '@/components/Test.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
// import TrendingMovies from '@/components/TrendingMovies.vue'
// import TrendingTV from '@/components/TrendingTV.vue'
import axios from 'axios'
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d8f43c15633f47498f56dbe32ca3f7e6');
let topHeadlines = {}

newsapi.v2.everything({
    // sources: 'bbc-news,the-verge',
    q: 'movie theater OR netflix OR hulu OR Amazon Prime Video',
    sortBy: "relevancy",
    pageSize: 50,
    // language: 'en',
    // country: 'us'
}).then(response => {
    topHeadlines = response.articles
    // console.log(topHeadlines);
});

export default {
    name: 'home',
    components: {
        // TrendingMovies,
        // TrendingTV
    },
    topHeadlines:topHeadlines,
    data() {
        return {
            movie: {},
            movie_video: {},
            movie_news: {}
        }
    },
    created() {
        this.mounted()
    },

    watch: {
        '$route': 'mounted'
    },

    methods: {
        mounted() {
             axios
                .get(`https://newsapi.org/v2/everything?q=movie theater OR netflix OR hulu OR Amazon Prime Video&pageSize=50&apiKey=d8f43c15633f47498f56dbe32ca3f7e6`)
                .then((resp) => {
                    this.movie_news = resp.data.articles
                    console.log("MOie==>", this.movie_news)
                    // console.log("MOie==>", this.$route.params.movieid)
                })
                
        }
    }
}

</script>

<style>
.home {
    display: flex;
    justify-content: space-between;
}

.home-article{
    color:white;
    position: relative;
    left: 0em !important;
    bottom: 0em !important;
    max-width: 20em !important;
    margin-bottom: 2em;
} 


.home-article:nth-child(5){
    color:white;
    position: relative;
    left: 0em !important;
    bottom: 0em !important;
    max-width: 40% !important;
    margin-bottom: 2em;
    margin-left: 40em;
} 
.home-article:first-child{
    color:white;
    position: relative;
    left: 0em !important;
    bottom: 0em !important;
    max-width: 90%!important;
    margin: auto;
    margin-bottom: 2em;
} 
</style>
