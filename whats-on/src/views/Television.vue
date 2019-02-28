<template>
<div class="television">
    <h3> TV Shows</h3>
    <div>
        {{message}}
        <ol>
            <li v-for="tvshow in tvList" v-bind:key="tvshow.id">
                <img v-bind:src="'http://image.tmdb.org/t/p/w92/'+tvshow.poster_path" alt='movie poster'/><br/>
                <router-link :to="{ name: 'TelevisionItem',   params: { showid: tvshow.id }}">{{tvshow.name }}<br/></router-link>
                    Rating: {{tvshow.vote_average }}<br/>
                    Release Date: {{tvshow.release_date}}<br/>
                    
                    {{tvshow.overview}}<br/>
                    <br/>
            </li>
        </ol>
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
            message: "Our message",
            loaded: false
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
        async fetchData() {
            try {
                let response = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=ff219f24cf866a850c34d6a49bdaf425&language=en-US&page=1')
                this.tvList = response.data.results
                return this.tvList
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
