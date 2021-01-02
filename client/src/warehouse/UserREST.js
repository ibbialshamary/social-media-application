import axios from 'axios';
import router from '../router';


const state = {
    // get token from local storage or set it to empty string
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null,
};

const getters = {
    // using arrow functions
    isLoggedIn: state => !!state.token,
    user: state => state.user,
    userError: state => state.error
};

const actions = {
    // login action
    async login({ commit }, user) {
        commit('auth_request');
        try {
            let res = await axios.post('http://localhost:5000/api/UserCreation/Login', user)
            if(res.data.success){
                const token = res.data.token;
                const user = res.data.user;
                // store token into local storage
                localStorage.setItem('token', token);
                // set axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
        } catch(err) {
            commit('auth_error', err);
        }
    },

    // register action
    async register({ commit }, user) {
        commit('register_request');
        try {
            let res = await axios.post('http://localhost:5000/api/UserCreation/Register', user);
            if(res.data.success !== undefined) {
                commit('register_success');
            }
            return res;
        } catch(err) {
            commit('register_error', err);
        }
    },

    // getting profile action
    async getProfile({ commit }) {
        try {
            commit('profile_request');
            let res = await axios.get('http://localhost:5000/api/UserCreation/Profile');
            commit('user_profile', res.data.user);
            return res;
        } catch(err) {
            commit('auth_error', err);
        }
    },

    // logout action
    async logout({ commit }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        await router.push('/Login');
    }
};

const mutations = {
    auth_request(state) {
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.error = null
        state.token = token
        state.user = user
        state.status = 'success'
    },
    auth_error(state, err) {
        state.error = err.response.data.msg
    },

    // register mutations
    register_request(state) {
        state.error = null
        state.status = 'loading'
    },
    register_success(state) {
        state.error = null
        state.status = 'success'
    },
    register_error(state, err) {
        state.error = err.response.data.msg
    },

    // profile mutation
    // requests taken from profile action
    profile_request() {
        state.status = 'loading';
    },
    user_profile(state, user) {
        state.user = user
    },

    // logout mutation
    logout(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};