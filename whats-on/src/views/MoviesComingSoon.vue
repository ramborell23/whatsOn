<template>
<!-- <div> -->

<div class="discover">
    <h3> Coming Soon </h3>
    <div class="img-carousel">
        <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#ababab" :interval="4000" img-width="1024" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

            <!-- <img v-bind:src="'http://image.tmdb.org/t/p/w154/'+moviesTopList[0].poster_path" alt='movie poster'/> -->
            <b-carousel-slide>
                <img
          slot="img"
          class="d-block img-item w-100"

          v-bind:src="'http://image.tmdb.org/t/p/w780/' + moviesTopList[0].poster_path"
          alt="image slot"
        />
      </b-carousel-slide>
                <b-carousel-slide>
                    <img
          slot="img"
          class="img-item w-100"
          width="324"
          height="280"

          v-bind:src="'http://image.tmdb.org/t/p/w780/' + moviesTopList[1].poster_path"
          alt="image slot"
        />
      </b-carousel-slide>
                    <b-carousel-slide>
                        <img
          slot="img"
          class="d-block img-item w-100"
          width="840"
          height="230"
          v-bind:src="'http://image.tmdb.org/t/p/w780/' + moviesTopList[2].poster_path"
          alt="image slot"
        />
      </b-carousel-slide>
                        <b-carousel-slide>
                            <img
          slot="img"
          class="d-block img-item w-100"
          width="840"
          height="230"
          v-bind:src="'http://image.tmdb.org/t/p/w780/' + moviesTopList[3].poster_path"
          alt="image slot"
        />
      </b-carousel-slide>
                            <b-carousel-slide>
                                <img
          slot="img"
          class="d-block img-item w-100"
          width="840"
          height="230"
          v-bind:src="'http://image.tmdb.org/t/p/w780/' + moviesTopList[4].poster_path"
          alt="image slot"
        />
      </b-carousel-slide>
                                <!-- <b-carousel-slide caption="First slide" img-src="'http://image.tmdb.org/t/p/w92/'+ moviesTopList[0].poster_path" />
    <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12" />
    <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22" /> -->

        </b-carousel>
    </div>
    {{message}}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <ul>
        <div >
            <template v-for="(movie, index) in moviesList">
                <b-card v-bind:img-src="'http://image.tmdb.org/t/p/w185/'+movie.poster_path" img-alt="Movie Poster" img-right v-bind:key="index" class=coming-soon-movie>
                    <b-card-text>
                        <router-link :to="{ name: 'MoviesItems',   params: { movieid: movie.id }}">{{movie.title }}<br/></router-link>
                            Rating: {{movie.vote_average }}<br/>
                            <!-- {{console.log(this.$route.params)}} -->
                            Release Date: {{movie.release_date}}<br/>
        Overview: {{movie.overview}}<br/>
      </b-card-text>
                </b-card>
            </template>
        </div>

    </ul>

    <!-- </div> -->
</div>
<!-- </div> -->
</template>

<script>
import axios from 'axios'
// import bootstrap from 'bootstrap'
import BootstrapVue from 'bootstrap-vue'

import Flickity from 'vue-flickity';

// var player;

// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//         height: '390',
//         width: '640',
//         videoId: 'M7lc1UVf-VE',
//         events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//         }
//     });
// }

let count = 0

export default {

    name: 'Movies',
    components: {
        Flickity
        // TrendingMovies,
        // TrendingTV
    },
    data() {
        return {
            moviesList: {},
            moviesTopList: {},
            message: "Our message",
            flickityOptions: {
                initialIndex: 3,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: true
                // any options from Flickity can be used
            },
            slide: 0,
            sliding: null
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
                .get('https://api.themoviedb.org/3/discover/movie?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en-US&region=US&sort_by=popularity.desc&certification_country=US&include_adult=true&include_video=true&page=1&primary_release_date.gte=2019-03-04')
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
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    }

}
</script>

<style>
.discover h3 {
    position: sticky;
    top: 0;
    background-color: orange;
    height: 1.5em;
    margin: 0;
}

.discover {
    /* width: 40%; */
    /* border: 1em blue solid; */
    overflow: scroll;
    background-color: rgb(73, 67, 67)
        /* max-height: 500px;
    max-width: 30%; */
}

* {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
}

.img-item {
    height: 25rem;
    max-width: 100%;
}

.img-carousel {
    /* width: 28%; */
    /* height: 200px; */
    border: rgb(40, 41, 44) inset 8px;
    margin: auto;
    /* width: 50%; */
    /* border: 3px solid green; */
    /* padding: 10px; */
    max-width: 25em;
}

.carousel1 {
    background: #EEE;
}

.carousel-cell {
    width: 66%;
    height: 200px;
    margin-right: 10px;
    background: #8C8;
    border-radius: 5px;
    counter-increment: carousel-cell;
}

/* cell number */
.carousel-cell:before {
    display: block;
    text-align: center;
    content: content(carousel-cell);
    line-height: 200px;
    font-size: 80px;
    color: white;
}

.coming-soon-movie{
    max-width: 80%;
    margin: auto;
}
.coming-soon-movie:nth-child(even){
    flex-direction: row !important;
}

</style>
