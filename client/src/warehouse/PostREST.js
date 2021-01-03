import axios from 'axios';

const state = {
    post: {},
    status: '',
    error: null
};

const getters = {
    post: state => state.post,
    postStatus: state => state.status,
    postError: state => state.error
};

const actions = {
    // action for creating post
    async post({ commit }, post) {
        commit('post_request');
        try {
            let res = await axios.post('http://localhost:5000/api/PostCreation/Post', post);
            if(res.data.success !== undefined) {
                const post = res.data.post;
                commit('post_success', post);
            }
            return res;
        } catch(err) {
            commit('post_error', err);
        }
    },

    // action for getting post
    async getProfile({ commit }) {
        try {
            commit('get_post_request');
            let res = await axios.get('http://localhost:5000/api/PostCreation/Post');
            commit('get_post_info', res.data.user);
            return res;
        } catch(err) {
            commit('get_post_error', err);
        }
    },
};

const mutations = {
    // post mutations
    post_request(state) {
        state.error = null
        state.status = 'Loading'
    },
    post_success(state) {
        state.error = null
        state.status = 'Post successfully added'
    },
    post_error(state, err) {
        state.error = err.response.data.msg
    },

    // get post mutations
    get_post_request(state) {
        state.status = 'Loading'
    },
    get_post_info(state, post) {
        state.post = post
    },
    get_post_error(state, err) {
        state.error = err.response.data.msg
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};