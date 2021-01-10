import Vue from 'vue'
import Vuex from 'vuex'

import UserWarehouseCRUD from '../warehouse/UserREST';
import PostWarehouseCRUD from '../warehouse/PostREST';
import CommentWarehouseCRUD from '../warehouse/CommentREST';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserWarehouseCRUD,
    PostWarehouseCRUD,
    CommentWarehouseCRUD
  },

  state: {

  },

  mutations: {

  },

  actions: {

  }
});
