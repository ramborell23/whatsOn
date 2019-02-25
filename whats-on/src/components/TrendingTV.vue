<template>
<div class=trending_tv>
    <h3>Trending TV Shows</h3>
    wow
    <div>
        {{message}}
        <ol>
            <li v-for="movie in moviesList" v-bind:key="movie.id">
                {{movie.name }}<br/>
                Rating: {{movie.vote_average }}<br/>
                Release Date: {{movie.first_air_date}}<br/>
                <img v-bind:src="'http://image.tmdb.org/t/p/w185/'+movie.poster_path" alt='movie poster'/>
                <!-- {{console.log("movie_image")}} -->
                <br/>
            </li>
        </ol>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'TrendingMovies',
    data() {
        return {
            moviesList: {},
            message: "Our message",
        }
    },
    created() {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            axios
                .get('https://api.themoviedb.org/3/trending/tv/week?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019/')
                .then((resp) => {
                    this.moviesList = resp.data.results
                    console.log("resp==>",this.moviesList)
                })
                .catch((err) => {
                    //   console.log(err)
                })

        }
    }

}
</script>

<style>
.trending_tv{
    width: 40%;
    border: 1em black solid
}

</style>

