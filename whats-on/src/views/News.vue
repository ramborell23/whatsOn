<template>
<div class="television">
    <h3>News</h3>
    <div>
        <ul class="list-of-articles">
            <template v-for="(article, index) in finArrNews" class="home-card-item" style="max-width:50em">
                <b-card v-bind:key="index" v-bind:title="article.title" v-bind:img-src="article.urlToImage" img-alt="Image" img-top tag="article" width="64" class="newspage-article" bg-variant="secondary">
                    <b-card-text class="home-card-main-text">
                        <!-- <h3>{{}}</h3> -->
                        <!-- Author: {{ article.author }}<br/> -->
                        <!-- Some quick example text to build on the card title and make up the bulk of the card's content. -->
                        {{article.description}}<br/>
                        <!-- {{article.content}} -->
                    </b-card-text>

                    <b-button v-bind:href="article.url" target="_blank" variant="primary">Go somewhere</b-button>
                    <b-card-text class="subtext">
                        <!-- {{article.description}}  -->
                        Author: {{ article.author }}<br/>
                        Source: {{ article.source.name || ""  }}<br/>
                        Date: {{ result(article.publishedAt) }}<br/>
                </b-card-text>
                </b-card>
            </template>
        </ul>

    </div>

</div>
</template>

<script>
import axios from 'axios'
var _ = require('lodash');

import {
    format,
    formatDistance,
    formatRelative,
    subDays,
    distanceInWords
} from 'date-fns'
const todaysDate = new Date()

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
            tvNewsStoriesDos: {},
            finArrNews:{},
            message: "Our message",
            loaded: false,
            

        }
        // console.log(this.fetchEwNews())
        console.log(this.$route.params)
    },
    created() {
        this.fetchTvNews(),
        this.fetchTvShows()
        this.fetchEwNews()

    },
    watch: {
        '$route': 'fetchTvShows',
        '$route': 'fetchTvNews',
        '$route': 'fetchEwNews'
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
                let newsResponse = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=100&apiKey=d8f43c15633f47498f56dbe32ca3f7e6')
                this.tvNewsStories = newsResponse.data.articles
                return this.tvNewsStories
            } catch (error) {
                console.error(error)
            } finally {
                this.loaded = true
            }
        },
        async fetchEwNews() {
            try {
                let firstApiNewsCall = await this.fetchTvNews()
                let newsResponse = await axios.get('https://newsapi.org/v2/top-headlines?sources=entertainment-weekly,buzzfeed,mashable&apiKey=d8f43c15633f47498f56dbe32ca3f7e6')
                this.secondApiNewsCall = newsResponse.data.articles
                this.finArrNews = _.sortBy(_.concat(firstApiNewsCall ,this.secondApiNewsCall),[function(o) { return o.publishedAt; }])
                return this.finArrNews.reverse()
            } catch (error) {
                console.error(error)
            } finally {
                this.loaded = true
            }
        },
        result: function (publishedDate) {
            return distanceInWords(todaysDate, publishedDate)
        }
    }

}
</script>

<style>
.list-of-articles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* margin: auto; */
    justify-content: space-evenly;
}

.newspage-article:first-child {
    color: white;
    /* max-height: 40% !important;
    position: relative;  */
    /* left: 0em !important; */
    /* bottom: 0em !important;*/
    max-width: 91.3% !important;
    margin-bottom: 1em;
}

.newspage-article {
    color: white;
    /* position: relative;
    left: 0em !important; */
    /* bottom: 0em !important; */
    max-width: 20em !important;
    /* max-width: 15em !important; */
    margin-bottom: 2em;
    /* margin-left: 2em; */
}
</style>
