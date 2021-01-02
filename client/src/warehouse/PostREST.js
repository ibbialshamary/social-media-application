import axios from 'axios';

const state = {
    status: '',
    error: null,
};

const getters = {
    postError: state => state.error
};

const actions = {
    // post action
    async post({ commit }, post) {
        commit('post_request');
        try {
            let res = await axios.post('http://localhost:5000/api/PostCreation/Post', post);
            if(res.data.success !== undefined) {
                commit('post_success');
            }
            return res;
        } catch(err) {
            commit('post_error', err);
        }
    },
};

const mutations = {
    // post mutations
    post_request(state) {
        state.error = null
        state.status = 'loading'
    },
    post_success(state) {
        state.error = null
        state.status = 'success'
    },
    post_error(state, err) {
        state.error = err.response.data.msg
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};