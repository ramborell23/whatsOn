<template>
<!-- <div> -->
    <div class="trending_movies">
        <h3>Trending Movies</h3>

        <div>
            <ul>
                 <template v-for="movie in moviesList">
                <b-card v-bind:key="movie.id" style="color:black;" right-align >
                    <b-media no-body right-align  >
                        <b-media vertical-align="center" right-align >
                         <img v-bind:src="'http://image.tmdb.org/t/p/w185/'+movie.poster_path" slot="aside" blank blank-color="#ccc"  alt="placeholder" width="128" height="256" right/>
                            <!-- <b-img v-bind:src="'http://image.tmdb.org/t/p/w92/'+tvshow.poster_path" alt='movie poster' blank blank-color="#ccc" width="128" height="256" /> -->
                        </b-media>

                        <b-media-body class="ml-3">
                            <h5 class="mt-0">{{movie.title }}</h5>
                            <p>
                                 {{movie.overview}}<br/>.
                            </p>

                        </b-media-body>
                    </b-media>
                </b-card>
            </template>
                
                <!-- <li v-for="movie in moviesList" v-bind:key="movie.id" >
                    {{movie.title }}<br/>
                Rating: {{movie.vote_average }}<br/>
                Release Date: {{movie.release_date}}<br/>
                    <img v-bind:src="'http://image.tmdb.org/t/p/w92/'+movie.poster_path" alt='movie poster'/>
                    <br/>
            </li> -->
            </ul>
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
                .get('https://api.themoviedb.org/3/trending/movie/week?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019/')
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
    top: 0;
    color: white;
    /* background-color: white; */
    height: 1.5em;
    margin: 0;
    font-family: 'Shrikhand', cursive;
    text-align: center;
    margin-bottom: 1em;
}

.trending_movies {
    /* width: 40%;
    border: 1em black solid;
    overflow: scroll;
    max-height: 500px;
    max-width: 30%; */
    color:white;
    margin-top: 3em;
}
</style>
