<template>
<div class=trending_tv>
    <h3>Trending TV Shows</h3>
    <div>
        <ol>
             <template v-for="movie in moviesList" >
                <b-card v-bind:key="movie.id" style="color:black;">
                    <b-media no-body>
                        <b-media-aside vertical-align="center">
                         <img v-bind:src="'http://image.tmdb.org/t/p/w185/'+movie.poster_path" slot="aside" blank blank-color="#ccc"  alt="placeholder" width="128" height="256"/>
                            <!-- <b-img v-bind:src="'http://image.tmdb.org/t/p/w92/'+tvshow.poster_path" alt='movie poster' blank blank-color="#ccc" width="128" height="256" /> -->
                        </b-media-aside>

                        <b-media-body class="ml-3">
                            <h5 class="mt-0">{{movie.name}}</h5>
                            <p>
                                Rating: {{movie.vote_average }}<br/>
                                 {{movie.overview}}<br/>.
                            </p>

                        </b-media-body>
                    </b-media>
                </b-card>
            </template>
            <!-- <li >
                {{movie.name }}<br/>
                
                Release Date: {{movie.first_air_date}}<br/>
                <img v-bind:src="'http://image.tmdb.org/t/p/w92/'+movie.poster_path" alt='movie poster'/>
                <br/>
            </li> -->
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
                    console.log("resp==>", this.moviesList)
                })
                .catch((err) => {
                    //   console.log(err)
                })

        }
    }

}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Shrikhand');

.trending_tv h3 {
    /* position: sticky; */
    top: 0;
    color:white;
    /* background-color: white; */
    height: 1.5em;
    margin: 0;
    font-family: 'Shrikhand', cursive;
    text-align: center;
    margin-bottom: 1em;

}

.trending_tv {
    /* width: 40%;
    border: 1em black solid;
    overflow: scroll;
    max-height: 500px;
    max-width: 30%; */
    margin-top: 3em;
}
</style>
