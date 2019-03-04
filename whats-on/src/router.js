import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Discover from './views/Discover.vue'
import Movies from './views/Movies.vue'
import MoviesComingSoon from './views/MoviesComingSoon.vue'
import MoviesInTheaters from './views/MoviesInTheaters.vue'
import Television from './views/Television.vue'
import Trending from './views/Trending.vue'

import MovieItem from './components/MovieItem.vue'
import TelevisionItem from './components/TelevisionItem.vue'
import TrendingMovies from './components/TrendingMovies.vue'
import TrendingTV from './components/TrendingTV.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/trending/movies',
      name: 'TrendingMovies',
      component: TrendingMovies,
    },
    {
      path: '/trending/tv',
      name: 'TrendingTV',
      component: TrendingTV,
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies,
    },
    {
      path: '/movies/comingsoon',
      name: 'MoviesComingSoon',
      component: MoviesComingSoon,
    },
    {
      path: '/movies/theaters',
      name: 'MoviesInTheaters',
      component: MoviesInTheaters,
    },
    {
      path: '/movies/:movieid',
      name: 'MoviesItems',
      component: MovieItem,
    },
    {
      path: '/tv',
      name: 'Television',
      component: Television,
    },
    {
      path: '/tv/:showid',
      name: 'TelevisionItem',
      component: TelevisionItem,
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
