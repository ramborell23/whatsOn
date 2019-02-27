<template>
<!-- <div> -->
<div class="television">
    <h3> TV Shows</h3>
    <div>
        {{message}}
        <ol>
            <li v-for="movie in moviesList" v-bind:key="movie.id">
                <img v-bind:src="'http://image.tmdb.org/t/p/w92/'+movie.poster_path" alt='movie poster'/>
                <router-link :to="{ name: 'MoviesItems',   params: { movieid: movie.id }}">{{movie.title }}<br/></router-link>
                Rating: {{movie.vote_average }}<br/>
                <!-- {{console.log(this.$route.params)}} -->
                Release Date: {{movie.release_date}}<br/>
                <br/>
                {{movie.overview}}<br/>
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
    name: 'Television',
    components: {
        // TrendingMovies,
        // TrendingTV
    },
    data() {
        return {
            moviesList: {},
            message: "Our message",
        }
        console.log(this.$route.params)
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
                .get('https://api.themoviedb.org/3/tv/popular?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en-US&page=1')
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

<style>
.television h3 {
    position: sticky;
    top: 0;
    background-color: orange;
    height: 1.5em;
    margin: 0;
}

.television {
    /* width: 40%; */
    border: 1em blue solid;
    overflow: scroll;
    /* max-height: 500px;
    max-width: 30%; */
}
</style>
