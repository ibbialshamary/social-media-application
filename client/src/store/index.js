import Vue from 'vue'
import Vuex from 'vuex'

import UserWarehouseCRUD from '../warehouse/UserREST';
import PostWarehouseCRUD from '../warehouse/PostREST';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserWarehouseCRUD,
    PostWarehouseCRUD
  },

  state: {

  },

  mutations: {

  },

  actions: {

  }
});
