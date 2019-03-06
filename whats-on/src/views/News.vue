<template>
<div class="television">
    <h3>News</h3>
    <div>
        <ul id="example-1" class="list-of-articles">
            <template v-for="(article, index) in tvNewsStories" class="home-card-item" style="max-width:50em">
                <b-card v-bind:key="index" v-bind:title="article.title" v-bind:img-src="article.urlToImage" img-alt="Image" img-top tag="article" class="home-article" bg-variant="secondary">
                    <b-card-text class="home-card-main-text">
                        <!-- <h3>{{}}</h3> -->
                        <!-- Author: {{ article.author }}<br/> -->
                        <!-- Some quick example text to build on the card title and make up the bulk of the card's content. -->
                        {{article.description}}
                    </b-card-text>

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
        {{message}}
        <!-- <ol>
            <li v-for="tvshow in tvList" v-bind:key="tvshow.id">
                <img v-bind:src="'http://image.tmdb.org/t/p/w92/'+tvshow.poster_path" alt='movie poster'/><br/>
                <router-link :to="{ name: 'TelevisionItem',   params: { showid: tvshow.id }}">{{tvshow.name }}<br/></router-link>
                    Rating: {{tvshow.vote_average }}<br/>
                    Release Date: {{tvshow.release_date}}<br/>

                    {{tvshow.overview}}<br/>
                    <br/>
            </li>
        </ol> -->

    </div>

</div>
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
            tvList: {},
            tvNewsStories: {},
            message: "Our message",
            loaded: false
        }
        console.log(this.$route.params)
    },
    created() {
        this.fetchTvNews(),
            this.fetchTvShows()

    },
    watch: {
        '$route': 'fetchTvShows',
        '$route': 'fetchTvNews'
    },
    methods: {
        async fetchTvShows() {
            try {
                let movieResponse = await axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en&page=1')
                this.tvList = movieResponse.data.results
                return this.tvList
            } catch (error) {
                console.error(error)
            } finally {
                this.loaded = true
            }
        },
        async fetchTvNews() {
            try {
                let newsResponse = await axios.get('https://newsapi.org/v2/everything?sources=entertainment-weekly&sizeBy=100&apiKey=d8f43c15633f47498f56dbe32ca3f7e6')
                this.tvNewsStories = newsResponse.data.articles
                console.log("GOT BOTH,this.tvNewsStories")
                console.log(this.tvNewsStories)
                return this.tvNewsStories
            } catch (error) {
                console.error(error)
            } finally {
                this.loaded = true
            }
        }
    }

}
</script>

<style>

</style>
