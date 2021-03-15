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

    // get a single comment by its id
    async getComment({commit}, id) {
        try {
            // http://localhost:5000/comment/comment-id/
            commit("getCommentRequest");
            let res = await axios.get('/comment/comment-id/' + id);
            const comment = res.data.comment;
            commit("getCommentInfo", comment);
            return res;
        } catch (err) {
            commit("getCommentError", err)
        }
    },
    // action for getting all comments that belong to certain post
    async getPostComments({commit}, id) {
        try {
            // `http://localhost:5000/comment/post-id/${id}`
            commit("getPostCommentsRequest");
            let res = await axios.get('/comment/post-id/' + id);
            const comments = res.data.comments;
            commit("getPostCommentsInfo", comments);
            return res;
        } catch (err) {
            commit("getPostCommentsError", err);
        }
    },

    async deleteComment({commit}, id) {
        try {
            // `http://localhost:5000/comment/comment-id/${id}`
            commit('deleteCommentRequest');
            let res = await axios.delete(`/comment/comment-id/${id}`);
            const comments = res.data.comments;
            commit('deleteCommentInfo', comments);
            return res;
        } catch (err) {
            commit("deleteCommentError", err)
        }
    },
    // action for creating comment
    async postComment({commit}, [comment, postId]) {
        commit('createCommentRequest');
        try {
            let res = await axios.post(`/comment/post-id/${postId}`, comment);
            // push the users that have already rated so they can be limited 1 rating at a time
            if (res.data.success !== undefined) {
                const comment = res.data.comment;
                commit('createCommentSuccess', comment);
            }
            return res;
        } catch (err) {
            commit('createCommentError', err);
        }
    },

    async patchComment({commit}, [commentToPatch, commentId]) {
        try {
            commit("patchCommentRequest");
            let res = await axios.patch("/comment/comment-id/" + commentId, commentToPatch);
            const comment = res.data.comment;
            commit("patchCommentSuccess", comment);
            return res;
        } catch (err) {
            commit("patchCommentError", err)
        }
    },


};

// mutations
const mutations = {
    getPostCommentsRequest(state) {
        state.status = 'Loading'
    },
    getPostCommentsInfo(state, comments) {
        state.comments = comments
    },
    getPostCommentsError(state, error) {
        state.error = error.response.data.msg
    },

    // by id
    getCommentRequest(state) {
        state.status = 'Loading'
    },
    getCommentInfo(state, comment) {
        state.comment = comment
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
