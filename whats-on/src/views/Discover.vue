<template>
<!-- <div> -->

<div class="_movies">
    <h3> Discover </h3>
    <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="124"
    img-height="280"
  >
  

<!-- <img v-bind:src="'http://image.tmdb.org/t/p/w185/'+moviesTopList[0].poster_path" alt='movie poster'/> -->
 <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="324"
          height="280"
          v-bind:src="'http://image.tmdb.org/t/p/w154/' + moviesTopList[0].poster_path"
          alt="image slot"
        />
      </b-carousel-slide>
 <b-carousel-slide>
        <img
          slot="img"
          class="img-fluid w-100"
          width="324"
          height="280"
          v-bind:src="'http://image.tmdb.org/t/p/w154/' + moviesTopList[1].poster_path"
          alt="image slot"
        />
      </b-carousel-slide>
 <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="84"
          height="230"
          v-bind:src="'http://image.tmdb.org/t/p/w154/' + moviesTopList[2].poster_path"
          alt="image slot"
        />
      </b-carousel-slide>
    <!-- <b-carousel-slide caption="First slide" img-src="'http://image.tmdb.org/t/p/w92/'+ moviesTopList[0].poster_path" />
    <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12" />
    <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22" /> -->

  </b-carousel>
</div>
    {{message}}
    <ol>
        <!-- <li v-for="movie in moviesList" v-bind:key="movie.id">
                <img v-bind:src="'http://image.tmdb.org/t/p/w92/'+movie.poster_path" alt='movie poster'/>
                <router-link :to="{ name: 'MoviesItems',   params: { movieid: movie.id }}">{{movie.title }}<br/></router-link>
                    Rating: {{movie.vote_average }}<br/> -->
        <!-- {{console.log(this.$route.params)}} -->
        <!-- Release Date: {{movie.release_date}}<br/> -->
        <br/>
        <!-- Overview: {{movie.overview}}<br/> -->
        <!-- {{console.log("movie_image")}} -->
        <!-- <br/>
            </li> -->
    </ol>

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
            moviesTopList:{},
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
                .get('https://api.themoviedb.org/3/movie/now_playing?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en-US&page=1&region=US')
                .then((resp) => {
                    this.moviesList = resp.data.results
                    this.moviesTopList = this.moviesList.slice(0,5)
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
    border: 1em blue solid;
    overflow: scroll;
    /* max-height: 500px;
    max-width: 30%; */
}

* {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
}

.carousel {
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
</style>
