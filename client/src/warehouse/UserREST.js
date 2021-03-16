import axios from 'axios';
import router from '../router';


const state = {
    // get token from local storage or set it to empty string
    token: localStorage.getItem('token') || '',
    user: {},
    users: {},
    explorableUsers: {},
    status: '',
    error: null,
};

const getters = {
    // using arrow functions
    isLoggedIn: state => !!state.token,
    user: state => state.user,
    users: state => state.users,
    explorableUsers: state => state.explorableUsers,
    userError: state => state.error
};

const actions = {
    async patchUser({ commit }, [userId, userBody]) {
        commit('patchUserRequest');
        try {
            let res = await axios.patch(`/user/user-id/${userId}`, userBody);
            if(res.data.success !== undefined) {
                const post = res.data.post;
                commit('patchUserSuccess', post);
            }
            return res;
        } catch(err) {
            commit('patchUserError', err);
        }
    },

    // action for following
    async followUser({ commit }, [body, userId]) {
        commit('followUserRequest');
        try {
            let res = await axios.patch(`/follow/user-id/${userId}`, body);
            if(res.data.success !== undefined) {
                const user = res.data.username;
                commit('followUserSuccess', user);
            }
            return res;
        } catch(err) {
            commit('followUserError', err);
        }
    },

    // action for unfollowing
    async unfollowUser({ commit }, [body, userId]) {
        commit('unfollowUserRequest');
        try {
            let res = await axios.patch(`/unfollow/user-id/${userId}`, body);
            if(res.data.success !== undefined) {
                const user = res.data.username;
                commit('unfollowUserSuccess', user);
            }
            return res;
        } catch(err) {
            commit('unfollowUserError', err);
        }
    },

    // action for getting all users
    async getAllUsers({ commit }) {
        try {
            commit('getUsersRequest');
            let res = await axios.get(`/user`);
            const users = res.data.users;
            commit('getUsersInfo', users);
            return res;
        } catch(err) {
            commit('getUsersError', err);
        }
    },

    // get all users that are not you (logged in user)
    async getExplorableUsers({ commit }, username) {
        try {
            commit('getExplorableUsersRequest');
            let res = await axios.get(`/explorable-users/username/${username}`);
            const users = res.data.users;
            commit('getExplorableUsersInfo', users);
            return res;
        } catch(err) {
            commit('getExplorableUsersError', err);
        }
    },

    // login action
    async login({ commit }, user) {
        commit('auth_request');
        try {
            let res = await axios.post(`/login`, user)
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
            let res = await axios.post(`/register`, user);
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
            let res = await axios.get(`/profile`);
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
    // patch user
    patchUserRequest(state) {
        state.error = null
        state.status = 'Loading'
    },

    patchUserSuccess(state, user) {
        state.user = user
    },

    patchUserError(state, error) {
        state.error = error.response.data.msg
    },

    // follow user mutations
    followUserRequest(state) {
        state.error = null
        state.status = 'loading'
    },
    followUserSuccess(state) {
        state.error = null
        state.status = 'success'
    },
    followUserError(state, err) {
        state.error = err.response.data.msg
    },

    // unfollow user mutations
    unfollowUserRequest(state) {
        state.error = null
        state.status = 'loading'
    },
    unfollowUserSuccess(state) {
        state.error = null
        state.status = 'success'
    },
    unfollowUserError(state, err) {
        state.error = err.response.data.msg
    },

    // get all users
    getUsersRequest(state) {
        state.status = 'Loading'
    },
    getUsersInfo(state, users) {
        state.users = users
    },
    getUsersError(state, error) {
        state.error = error.response.data.msg
    },

    // get explorable users
    getExplorableUsersRequest(state) {
        state.status = 'Loading'
    },
    getExplorableUsersInfo(state, users) {
        state.explorableUsers = users
    },
    getExplorableUsersError(state, error) {
        state.error = error.response.data.msg
    },

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
