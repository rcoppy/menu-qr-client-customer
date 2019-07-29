import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const localhost = 'http://localhost:3000/'
const remotehost = 'https://menu-qr-api.herokuapp.com/'

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    apiURL: localhost,
    restaurants: [],
    restaurant_loaded_status: ''
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
    update_restaurants(state, restaurants) {
      state.restaurant_loaded_status = 'success'
      state.restaurants = restaurants
      console.log(`${state.restaurants.length} restaurants updated`)
    },
    update_restaurants_error(state) {
      state.restaurant_loaded_status = 'error'
    },
    update_restaurants_request(state) {
      state.restaurant_loaded_status = 'loading'
    }
  },
  actions: {
    fetch_restaurants({ commit }) {
      return new Promise((resolve, reject) => {
        commit('update_restaurants_request')
        axios({ url: this.state.apiURL + 'api/v1/customer/restaurants', method: 'GET' })
          .then(resp => {
            const restaurants = resp.data
            console.log(`updating with ${restaurants}`)
            commit('update_restaurants', restaurants)
            resolve(resp)
          })
          .catch(err => {
            commit('update_restaurants_error')
            reject(err)
          })
      })
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: this.state.apiURL + 'users/sign_in', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.headers.authorization
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },

    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: this.state.apiURL + 'users', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },

    logout({ commit }) {
      return new Promise((resolve, _reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }

  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})