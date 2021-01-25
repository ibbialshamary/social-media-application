import axios from 'axios';

const state = {
    reply: {},
    replies: {},
    status: '',
    error: null
};

const getters = {
    reply: state => state.reply,
    replies: state => state.replies,
    replyStatus: state => state.status,
    replyError: state => state.error
};

const actions = {
    // action for getting all posts
    async getAllReplies({ commit }) {
        try {
            commit('getAllRepliesRequest');
            let res = await axios.get('http://localhost:5000/reply');
            const replies = res.data.replies;
            commit('getAllRepliesInfo', replies);
            return res;
        } catch(err) {
            commit('getAllRepliesError', err);
        }
    },

    // action for getting a comment's replies
    async getCommentReplies({ commit }, commentId) {
        try {
            commit('getCommentRepliesRequest');
            let res = await axios.get(`http://localhost:5000/reply/comment-id/${commentId}`);
            const replies = res.data.replies;
            commit('getCommentRepliesInfo', replies);
            return res;
        } catch(err) {
            commit('getCommentRepliesError', err);
        }
    },

    // action for creating reply
    async postReply({ commit }, [comment, commentId]) {
        commit('createReplyRequest');
        try {
            let res = await axios.post(`http://localhost:5000/reply/comment-id/${commentId}`, comment);
            if(res.data.success !== undefined) {
                const reply = res.data.reply;
                commit('createReplySuccess', reply);
            }
            return res;
        } catch(err) {
            commit('createReplyError', err);
        }
    },

    async patchReply({commit}, [replyToPatch, replyId]) {
        try {
            commit("patchReplyRequest");
            let res = await axios.patch("http://localhost:5000/reply/reply-id/" + replyId, replyToPatch);
            const comment = res.data.comment;
            commit("patchReplySuccess", comment);
            return res;
        } catch (err) {
            commit("patchReplyError", err)
        }
    },
};

// mutations
const mutations = {
    // get all replies that exist
    // get all posts
    getAllRepliesRequest(state) {
        state.status = 'Loading'
    },
    getAllRepliesInfo(state, replies) {
        state.replies = replies
    },
    getAllRepliesError(state, error) {
        state.error = error.response.data.msg
    },

    // get comment replies
    getCommentRepliesRequest(state) {
        state.status = 'Loading'
    },
    getCommentRepliesInfo(state, replies) {
        state.replies = replies
    },
    getCommentRepliesError(state, error) {
        state.error = error.response.data.msg
    },

    // create reply
    createReplyRequest(state) {
        state.error = null
        state.status = 'Loading'
    },
    createReplySuccess(state) {
        state.error = null
        state.status = 'Reply successfully added'
    },
    createReplyError(state, error) {
        state.error = error.response.data.msg
    },
    patchReplyRequest(state) {
        state.error = null
        state.status = 'Loading'
    },

    patchReplySuccess(state) {
        state.error = null
        state.status = 'Reply successfully patched'
    },

    patchReplyError(state, error) {
        state.error = error.response.data.msg
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};