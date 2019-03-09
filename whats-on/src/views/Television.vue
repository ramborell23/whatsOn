<template>
<div class="television">
    <h3>On Tonight</h3>
    <div>
        <ul>
            <template v-for="tvshow in tvList">
                <b-card v-bind:key="tvshow.id" style="color:black;">
                    <b-media no-body>
                        <b-media-aside vertical-align="center">
                         <img v-bind:src="'http://image.tmdb.org/t/p/w185/'+tvshow.poster_path" slot="aside" blank blank-color="#ccc"  alt="placeholder" width="128" height="256"/>
                        </b-media-aside>

                        <b-media-body class="ml-3">
                            <h5 class="mt-0">{{tvshow.name || "" }}</h5>
                            <p>
                                 {{tvshow.overview}}<br/>.
                            </p>

                        </b-media-body>
                    </b-media>
                </b-card>
            </template>
        </ul>

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
        // '$route': 'fetchTvNews'
    },
    methods: {
        async fetchTvShows() {
            try {
                let movieResponse = await axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en&page=1')
                this.tvList = movieResponse.data.results
                console.log(this.tvList)
                return this.tvList
            } catch (error) {
                console.error(error)
            } finally {
                this.loaded = true
            }
        },
        async fetchTvNews() {
            try {
                let newsResponse = await axios.get('https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey=d8f43c15633f47498f56dbe32ca3f7e6')
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
@import url('https://fonts.googleapis.com/css?family=Shrikhand');

.television h3 {
    /* position: sticky; */
    top: 0;
    /* background-color: orange; */
    height: 1.5em;
    margin: 0;
    font-family: 'Shrikhand', cursive;
    text-align: center;
    margin-bottom:1em;
}

.television {
    /* width: 40%; */
    /* border: 1em blue solid; */
    color: white;
    overflow: scroll;
    /* max-height: 500px;
    max-width: 30%; */
    margin-top:3em;
}
.b-card{
    color:black;
}
</style>
