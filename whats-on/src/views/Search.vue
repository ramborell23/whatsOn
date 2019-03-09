<template>
<div class="search">
    <h1>This is an search page</h1>
    <br/>
    <br/>
    <br/>
    <div class="searchbar-and-buttons">

    <div class="group-buttons">
    <b-button :pressed.sync="myMovieToggle" v-on:click="setQueryToMovies" style="width:5em;" variant="primary">Movies</b-button>
    <b-button :pressed.sync="myTvToggle" v-on:click="setQueryToTv" style="width:5em;" variant="primary">TV</b-button>
    <b-button :pressed.sync="myPeopleToggle" v-on:click="setQueryToPeople" style="width:5em;" variant="primary">People</b-button>
    </div>
  
    <input class="searchbar" v-model="searchTerm" placeholder="edit me">
    <b-button v-on:click="fetchSearchInfo" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
    </div>
    <p>Message is: {{ searchTerm }}</p>
    <br/>
    <br/>
    <div v-if="this.queryType === 'person'">
        <div>
            <template v-for="(actor, index) in moviesList">
                <b-card v-bind:key="index">

                    <!-- <b-card> -->
                    <b-media v-bind:key="index">
                        <img v-bind:src="'http://image.tmdb.org/t/p/w92/'+actor.profile_path || 'http://sercons.ch/wp-content/uploads/2016/01/no-person.jpg'" slot="aside" blank blank-color="#ccc" width="84" alt="placeholder" />

                        <h3 class="mt-0">{{actor.name}}</h3>                       
                        <b-media>
                            <h5 class="mt-0">Known For</h5>
                            <b-card class="known-for-section" v-for="(movie, index) in actor.known_for" v-bind:key="index">
                                <b-media>
                        <img v-bind:src="'http://image.tmdb.org/t/p/w92/'+movie.poster_path " slot="aside" blank blank-color="#ccc" width="84" alt="placeholder" />
                                </b-media>
                        <h5>{{movie.title  || movie.name  }}</h5><br/>
                        Rating: {{movie.vote_average }}<br/>
                            Release Date: {{movie.release_date}}<br/>
        Overview: {{movie.overview}}<br/>
                            </b-card>
                    </b-media>

                    </b-media>
                </b-card>
            </template>
            <!-- </b-card> -->
        </div>

        <!-- <b-media v-bind:key="index">
                <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" />

                <h5 class="mt-0"> </h5>

            </b-media> -->

    </div>
    <div v-else>
        <template v-for="(movie, index) in moviesList">
            <b-card v-bind:img-src="'http://image.tmdb.org/t/p/w185/'+movie.poster_path" img-alt="Movie Poster" img-right v-bind:key="index" class=coming-soon-movie>
                <b-card-text>
                    <router-link :to="{ name: 'MoviesItems',   params: { movieid: movie.id }}">{{movie.title || movie.name }}<br/></router-link>
                        <!-- Title: {{movie.title  }}<br/> -->
                        Rating: {{movie.vote_average ||"" }}<br/>
                            Release Date: {{movie.release_date}}<br/>
        Overview: {{movie.overview}}<br/>
      </b-card-text>
            </b-card>
        </template>
    </div>

    <router-view></router-view>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Search',
    data() {
        return {
            searchTerm: "",
            queryType: "movie",
            moviesList: {},
            actorList: {},
            myMovieToggle: false,
            myPeopleToggle: false,
            myTvToggle: false,
        }
        console.log(searchTerm)
    },
    created() {
        // this.fetchData(),
        this.setQueryToMovies(),
            this.setQueryToTv(),
            this.setQueryToPeople()
    },
    watch: {
        '$route': 'fetchSearchInfo',
        '$route': 'setQueryToTv',
        '$route': 'setQueryToTv',
        '$route': 'setQueryToPeople'
    },
    methods: {
        fetchData() {
            axios
                .get('https://api.themoviedb.org/3/movie/now_playing?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en-US&page=1&region=US')
                .then((resp) => {
                    this.moviesList = resp.data.results
                    this.moviesTopList = this.moviesList.slice(0, 5)
                    console.log("resp22==>", this.moviesList)
                    console.log("top movies==>", this.moviesTopList[1])
                })
                .catch((err) => {
                    //   console.log(err)
                })
        },
        async fetchSearchInfo() {
            try {
                let movieResponse = await axios.get(`https://api.themoviedb.org/3/search/${this.queryType}?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en-US&query=${this.searchTerm}&page=1&include_adult=false&region=US`)
                this.moviesList = movieResponse.data.results
                console.log("moviesList", this.moviesList)
                return this.moviesList
            } catch (error) {
                console.error(error)
            } finally {
                this.loaded = true
            }
        },
        setQueryToMovies() {
            this.queryType = "movie"
            console.log(this.queryType)
            this.myMovieToggle = true
            this.myPeopleToggle = false
            this.myTvToggle = false

        },
        setQueryToTv() {
            this.queryType = "tv"
            console.log(this.queryType)
            this.myMovieToggle = false
            this.myPeopleToggle = false
            this.myTvToggle = true

        },
        setQueryToPeople() {
            this.queryType = "person"
            console.log(this.queryType)
            this.myMovieToggle = false
            this.myPeopleToggle = true
            this.myTvToggle = false

        },
    }
}
</script>

<style>
.group-buttons{
    text-align: center;
    /* border: 3px solid green; */
}

.searchbar-and-buttons{
     margin: auto;
  width: 50%;
  /* border: 3px solid green; */
  padding: 10px;
  text-align:center;
}
.known-for-section{
    /* max-height: 13em; */
}
.search{
    height: 100%;
    width: 100%;
    color: black;
}

.search h5{
    /* height: 100%;
    width: 100%; */
    color: black;
}
.searchbar{
    /* text-align: center;
    border: 3px solid green; */
    width: 11em;
}


</style>
