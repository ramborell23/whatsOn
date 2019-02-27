<template>
<!-- <div> -->
    <div class="trending_movies">
        <h3>Trending Movies</h3>

        <div>
            {{message}}
            <ol>
                <li v-for="movie in moviesList" v-bind:key="movie.id" >
                    {{movie.title }}<br/>
                Rating: {{movie.vote_average }}<br/>
                Release Date: {{movie.release_date}}<br/>
                    <img v-bind:src="'http://image.tmdb.org/t/p/w92/'+movie.poster_path" alt='movie poster'/>
                    <!-- {{console.log("movie_image")}} -->
                    <br/>
            </li>
            </ol>
        </div>
    </div>
<!-- </div> -->
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
                .get('https://api.themoviedb.org/3/trending/all/week?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019/')
                .then((resp) => {
                    this.moviesList = resp.data.results
                    console.log("resp22==>", this.moviesList)
                })
                .catch((err) => {
                    //   console.log(err)
                })

        }
    }

}
</script>

<style >

.trending_movies h3 {
    position: sticky;
    top: 0;
    background-color: blue;
    height: 1.5em;
    margin: 0;
}

.trending_movies {
    width: 40%;
    border: 1em black solid;
    overflow: scroll;
    max-height: 500px;
    max-width: 30%;
}
</style>
