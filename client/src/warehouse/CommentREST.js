import axios from 'axios';

const state = {
    comment: {},
    comments: {},
    status: '',
    error: null
};

const getters = {
    comment: state => state.comment,
    comments: state => state.comments,
    commentStatus: state => state.status,
    commentError: state => state.error
};

const actions = {
    // action for getting all comments that belong to certain post
    async getComment({ commit }, id) {
        try {
            commit('getCommentRequest');
            let res = await axios.get('http://localhost:5000/comment/id/' + id);
            const comments = res.data.comments;
            commit('getCommentInfo', comments);
            return res;
        } catch(err) {
            commit('getCommentError', err);
        }
    },

    async deleteComment({ commit }, id) {
        try {
            commit('deleteCommentRequest');
            let res = await axios.delete("http://localhost:5000/comment/id/" + id);
            const comments = res.data.comments;
            commit('deleteCommentInfo', comments);
            return res;
        } catch(err) {
            commit("deleteCommentError", err)
        }
    },

    // action for creating comment
    async postComment({ commit }, comment) {
        commit('createCommentRequest');
        try {
            let res = await axios.post('http://localhost:5000/comment', comment);
            if(res.data.success !== undefined) {
                const comment = res.data.comment;
                commit('createCommentSuccess', comment);
            }
            return res;
        } catch(err) {
            commit('createCommentError', err);
        }
    },

    async patchComment({ commit }, [commentToPatch, commentId]) {
        try {
            commit("patchCommentRequest");
            let res = await axios.patch("http://localhost:5000/comment/id/" + commentId, commentToPatch);
            const comment = res.data.comment;
            commit("patchCommentSuccess", comment);
            return res;
        } catch(err) {
            commit("patchCommentError", err)
        }
    },


};

// mutations
const mutations = {
    getCommentRequest(state) {
        state.status = 'Loading'
    },
    getCommentInfo(state, comments) {
        state.comments = comments
    },
    getCommentError(state, error) {
        state.error = error.response.data.msg
    },

    // delete comment
    deleteCommentRequest(state) {
        state.error = null
        state.status = 'Loading'
    },

    deleteCommentInfo(state, comments) {
        state.comments = comments
    },

    deleteCommentError(state, error) {
        state.error = error.response.data.msg
    },

    // create comment
    createCommentRequest(state) {
        state.error = null
        state.status = 'Loading'
    },
    createCommentSuccess(state) {
        state.error = null
        state.status = 'Comment successfully added'
    },
    createCommentError(state, error) {
        state.error = error.response.data.msg
    },

    patchCommentRequest(state) {
        state.error = null
        state.status = 'Loading'
    },

    patchCommentSuccess(state) {
        state.error = null
        state.status = 'Comment successfully patched'
    },

    patchCommentError(state, error) {
        state.error = error.response.data.msg
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};