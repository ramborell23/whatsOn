<template>
<div>
    <!-- <h1 class='home-logo'>
       
    </h1> -->
    <div class="home">

        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <!-- <TrendingMovies message="Got this page working" />
        <TrendingTV message="Got this page working" /> -->
        <!-- <br/>
        <br/> -->
        <!-- <router-view></router-view> -->
        <ul id="example-1" class="list-of-articles">
            <template v-for="(article, index) in movie_news" class="homepage-card-item" style="max-width:50em">
                <b-card v-bind:key="index" v-bind:title="article.title" v-bind:img-src="article.urlToImage" img-alt="Image" img-top tag="article" class="homepage-article" bg-variant="secondary">
                    <b-card-text class="homepage-card-main-text">
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
            </template>
        </ul>
        <div>
            <b-button block variant="primary" to="/">More Stories</b-button>
            <br/>
            <br/>
        </div>
        <!-- <router-link > </router-link> -->

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
    topHeadlines: topHeadlines,
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
                .get(`https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&pageSize=10&apiKey=d8f43c15633f47498f56dbe32ca3f7e6`)
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
@import url('https://fonts.googleapis.com/css?family=Shrikhand');

.home-logo{
    color:white;
    font-family: 'Shrikhand', cursive;
    
}

.homepage-article {
    color: white;
    /* position: relative;
    left: 0em !important; */
    /* bottom: 0em !important; */
    max-width: 20em !important;
    /* max-width: 15em !important; */
    margin-bottom: 2em;
    /* margin-left: 2em; */
}

.home-article:nth-child(5) {
    /* color:white;
    position: relative;
    left: 0em !important;
    bottom: 0em !important;
    max-width: 40% !important;
    margin-bottom: 2em;
    margin-left: 40em; */
}

.homepage-article:nth-child(2) {
    color: white;
    /* margin: auto; */
    /* position: relative;
    left: 0em !important;
    bottom: 0em !important;*/
    /* max-width: 40% !important; */
    /* min-width: 30% !important; 
    margin-bottom: 2em;
    margin-left: 3em;  */
}

.card-body {
    /* min-width: 40% !important; */

}

.homepage-article:nth-child(3) {
    color: white;
    /* position: relative; */
    /* left: 0em !important;
    margin: auto; */
    /* bottom: 0em !important; */
    /* max-width: 40% !important; */
    /* min-width: 40% !important; */
    /* max-height: 40% !important; */
    /* margin-bottom: 2em;
    margin-left: 27em;
    bottom: 28.5em; */
}

.homepage-article:nth-child(4) {
    color: white;
    /* position: relative; */
    /* left: 0em !important; */
    /* margin: auto; */
    /* bottom: 0em !important; */
    /* max-width: 40% !important; */
    /* max-height: 40% !important; */
    /* margin-bottom: 2em;
    margin-left: 27em;
    bottom: 28.5em; */
}

.homepage-article:first-child {
    color: white;
    /* max-height: 40% !important;
    position: relative;  */
    /* left: 0em !important; */
    /* bottom: 0em !important;*/
    max-width: 91.3% !important;
    margin-bottom: 1em;
}

.list-of-articles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* margin: auto; */
    justify-content: space-evenly;
}
</style>
