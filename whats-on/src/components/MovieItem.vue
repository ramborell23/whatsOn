<template>
<div>
    <!-- <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>
    <br/> -->
    <br/>

    {{movie.title }}<br/>
                Rating: {{movie.vote_average }}<br/>
                Release Date: {{movie.release_date}}<br/>
                Budget: {{movie.budget}}<br/>
                Overview: {{movie.overview}}<br/>
    <img v-bind:src="'http://image.tmdb.org/t/p/w92/'+movie.poster_path" alt='movie poster'/>
    <!-- {{console.log("movie_image")}} -->
    <br/>
    <br/>
    
    <div class="embeded-video">
    <b-embed  type="iframe" aspect="16by9" v-bind:src="'https://www.youtube.com/embed/'+movie_video[0].key" allowfullscreen />
    </div>
    <br/>
    <br/>

    <ul id="example-1" class="list-of-articles">
        <template v-for="(article, index) in movie_news" class="movie-card-item">
            <b-card v-bind:key="index" v-bind:title="article.title" v-bind:img-src="article.urlToImage" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="article-title">
                <b-card-text class="card-main-text">
                    <!-- <h3>{{}}</h3> -->
                    <!-- Author: {{ article.author }}<br/> -->
                    <!-- Some quick example text to build on the card title and make up the bulk of the card's content. -->
                    {{article.description}}
                </b-card-text>

                <div>

                </div>

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

    <br/>
    <br/>
    <router-link :to="{ name: 'home' }">Back</router-link>
</div>
</template>

<script>
import axios from 'axios'
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d8f43c15633f47498f56dbe32ca3f7e6');
let poppers = {}
newsapi.v2.topHeadlines({
    //   sources: 'bbc-news,the-verge',
    q: 'trump',
    //   category: 'business',
    //   language: 'en',
    //   country: 'us'
}).then(response => {
    //   console.log(response);
    poppers = response
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
});
export default {
    name: 'MoviesItems',
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
            console.log(this.movie_news)
            let movieItemId = this.$route.params.movieid
            axios
                .get(`https://api.themoviedb.org/3/movie/${movieItemId}?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en-US`)
                .then((resp) => {
                    this.movie = resp.data
                    console.log("MOie==>", this.movie)
                    // console.log("MOie==>", this.$route.params.movieid)
                    axios
                        .get(`https://api.themoviedb.org/3/movie/${movieItemId}/videos?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en-US`)
                        .then((resp) => {
                            this.movie_video = resp.data.results
                            console.log("movie_video==>", this.movie_video)
                            console.log("this.movie.title ==>", this.movie.title)
                            // console.log("MOie==>", this.$route.params.movieid)
                            axios
                                .get(`https://newsapi.org/v2/everything?q=hulu&apiKey=d8f43c15633f47498f56dbe32ca3f7e6`)
                                .then((resp) => {
                                    this.movie_news = resp.data.articles
                                    console.log("movie_news==>", this.movie_news)
                                    // console.log("MOie==>", this.$route.params.movieid)
                                })
                        })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>

<style>
ul {
    /* background-color: orange */
}

.list-of-articles {
    /* display: flex; */
    overflow: scroll;
    /* max-height: 20em; */
    /* background-color:red; */
}

.embeded-video {
    max-width: 50%;
    max-height: 50%;
    margin: auto;
    /* width: 50%; */
}

/* 
.list-of-articles li{
 margin: 5px;
    margin-bottom: 59px;
} */

.card {
    margin-bottom: 2em;
}

/* .card:nth-child(even){
    color:red;
    position: relative;
    left: 25em;
    bottom: 5em;
}
.card:nth-child(odd){
    color:black;
    /* position: relative; */
/* bottom: 5em; */
/* left: 25em;
    bottom: 28em; */
/* } */
.card:first-child {
    /* color: red; */
    /* position: relative; */
    left: 0em !important;
    bottom: 0em !important;
}

.card-title {
    margin-bottom: 2em;
    font-size: .8em;
}

.movie-card-item {
    max-height: 40%;
    width: 50%;
    /* padding-left: 59px; */
    /* box-shadow: 5px 5px #888888; */
    /* background-color: white */
}

.movie-card-item p {}

.article-title {
    font-size: 15px;
}

.card-main-text {
    font-size: .8em;
}

.subtext {
    font-size: .4em;
}
</style>
