import Vue from 'vue'
import Vuex from 'vuex'

import UserWarehouseCRUD from '../warehouse/UserREST';
import PostWarehouseCRUD from '../warehouse/PostREST';
import CommentWarehouseCRUD from '../warehouse/CommentREST';
import ReplyWarehouseCRUD from '../warehouse/ReplyREST';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserWarehouseCRUD,
    PostWarehouseCRUD,
    CommentWarehouseCRUD,
    ReplyWarehouseCRUD
  },

  state: {

  },

  mutations: {

  },

  actions: {

  }
});
