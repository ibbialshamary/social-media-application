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
    // // action for getting all comments that belong to certain post
    // async getReply({ commit }, id) {
    //     try {
    //         commit('getCommentRequest');
    //         let res = await axios.get('http://localhost:5000/comment/id/' + id);
    //         const comments = res.data.comments;
    //         commit('getCommentInfo', comments);
    //         return res;
    //     } catch(err) {
    //         commit('getCommentError', err);
    //     }
    // },
    //
    // async deleteComment({ commit }, id) {
    //     try {
    //         commit('deleteCommentRequest');
    //         let res = await axios.delete("http://localhost:5000/comment/id/" + id);
    //         const comments = res.data.comments;
    //         commit('deleteCommentInfo', comments);
    //         return res;
    //     } catch(err) {
    //         commit("deleteCommentError", err)
    //     }
    // },

    // action for creating reply
    async postReply({ commit }, [comment, commentId]) {
        commit('createReplyRequest');
        try {
            let res = await axios.post(`http://localhost:5000/reply/commentId/${commentId}`, comment);
            if(res.data.success !== undefined) {
                const reply = res.data.reply;
                commit('createReplySuccess', reply);
            }
            return res;
        } catch(err) {
            commit('createReplyError', err);
        }
    },


    // async patchComment({ commit }, [commentToPatch, commentId]) {
    //     try {
    //         commit("patchCommentRequest");
    //         let res = await axios.patch("http://localhost:5000/comment/id/" + commentId, commentToPatch);
    //         const comment = res.data.comment;
    //         commit("patchCommentSuccess", comment);
    //         return res;
    //     } catch(err) {
    //         commit("patchCommentError", err)
    //     }
    // },


};

// mutations
const mutations = {
    // getReplyRequest(state) {
    //     state.status = 'Loading'
    // },
    // getReplyInfo(state, replies) {
    //     state.replies = replies
    // },
    // getReplyError(state, error) {
    //     state.error = error.response.data.msg
    // },

    // // delete reply
    // deleteReplyRequest(state) {
    //     state.error = null
    //     state.status = 'Loading'
    // },
    //
    // deleteReplyInfo(state, replies) {
    //     state.comments = replies
    // },
    //
    // deleteReplyError(state, error) {
    //     state.error = error.response.data.msg
    // },

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

    // patchCommentRequest(state) {
    //     state.error = null
    //     state.status = 'Loading'
    // },
    //
    // patchCommentSuccess(state) {
    //     state.error = null
    //     state.status = 'Comment successfully patched'
    // },
    //
    // patchCommentError(state, error) {
    //     state.error = error.response.data.msg
    // }
};

export default {
    state,
    actions,
    mutations,
    getters
};