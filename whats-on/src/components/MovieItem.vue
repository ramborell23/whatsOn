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
    <img v-bind:src="'http://image.tmdb.org/t/p/w92/'+movie.poster_path" alt='movie poster'/>
    <!-- {{console.log("movie_image")}} -->
    <br/>
    <br/>
    
    <iframe id="existing-iframe-example"
        width="540" height="260"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
        frameborder="0"
        style="border: solid 4px #37474F"
></iframe>
    <br/>
    <br/>
    <router-link :to="{ name: 'home' }">Back</router-link>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MoviesItems',
    data() {
        return {
            movie: {},
            movie_video:{}
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
            //   console.log(this.$route.params.id)
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
                    this.movie_video = resp.data
                    console.log("movie_video==>", this.movie_video)
                    // console.log("MOie==>", this.$route.params.movieid)
                })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>
