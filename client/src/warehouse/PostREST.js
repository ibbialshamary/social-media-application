import axios from 'axios';

const state = {
    post: {},
    posts: {},
    userPosts: {},
    status: '',
    error: null
};

const getters = {
    post: state => state.post,
    posts: state => state.posts,
    userPosts: state => state.userPosts,
    postStatus: state => state.status,
    postError: state => state.error
};

const actions = {
    // action for creating post
    async post({ commit }, [post, id]) {
        commit('createPostRequest');
        try {
            let res = await axios.post(`http://localhost:5000/post/user-id/${id}`, post);
            if(res.data.success !== undefined) {
                const post = res.data.post;
                commit('createPostSuccess', post);
            }
            return res;
        } catch(err) {
            commit('createPostError', err);
        }
    },

    // action for getting all posts
    async getAllPosts({ commit }) {
        try {
            commit('getPostsRequest');
            let res = await axios.get('http://localhost:5000/post');
            const posts = res.data.posts;
            commit('getPostsInfo', posts);
            return res;
        } catch(err) {
            commit('getPostsError', err);
        }
    },

    // action for a user's posts
    async getUserPosts({ commit }, userId) {
        try {
            commit('getUserPostsRequest');
            let res = await axios.get(`http://localhost:5000/post/user-id/${userId}`);
            const posts = res.data.posts;
            commit('getUserPostsInfo', posts);
            return res;
        } catch(err) {
            commit('getUserPostsError', err);
        }
    },

    async deletePost({commit}, id) {
        try {
            commit('deletePostRequest');
            let res = await axios.delete("http://localhost:5000/post/post-id/" + id);
            const posts = res.data.posts;
            commit('deletePostInfo', posts);
            return res;
        } catch (err) {
            commit("deletePostError", err)
        }
    },

    async patchPost({ commit }, [postId, postBody]) {
        commit('patchPostRequest');
        try {
            let res = await axios.patch(`http://localhost:5000/post/post-id/${postId}`, postBody);
            if(res.data.success !== undefined) {
                const post = res.data.post;
                commit('patchPostSuccess', post);
            }
            return res;
        } catch(err) {
            commit('patchPostError', err);
        }
    },
};

// mutations
const mutations = {
    // get all posts
    getPostsRequest(state) {
        state.status = 'Loading'
    },
    getPostsInfo(state, posts) {
        state.posts = posts
    },
    getPostsError(state, error) {
        state.error = error.response.data.msg
    },

    // get a user's posts
    getUserPostsRequest(state) {
        state.status = 'Loading'
    },

    getUserPostsInfo(state, userPosts) {
        state.userPosts = userPosts
    },

    getUserPostsError(state, error) {
        state.error = error.response.data.msg
    },

    // create post
    createPostRequest(state) {
        state.error = null
        state.status = 'Loading'
    },
    createPostSuccess(state) {
        state.error = null
        state.status = 'Post successfully added'
    },
    createPostError(state, error) {
        state.error = error.response.data.msg
    },

    // delete post
    deletePostRequest(state) {
        state.error = null
        state.status = 'Loading'
    },

    deletePostInfo(state, posts) {
        state.posts = posts
    },

    deletePostError(state, error) {
        state.error = error.response.data.msg
    },

    // patch post
    patchPostRequest(state) {
        state.error = null
        state.status = 'Loading'
    },

    patchPostSuccess(state, posts) {
        state.posts = posts
    },

    patchPostError(state, error) {
        state.error = error.response.data.msg
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};