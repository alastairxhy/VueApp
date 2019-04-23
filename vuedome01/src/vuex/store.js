// 1.安装vuex
// cnpm install vuex --save

// 2.引入vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



//2.设置vuex
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

//实例化
const  store = new Vuex.Store({
  //定义数据 state在vuex中用于存储数据
  state: {
    count: 1
  },

  //定义方法 mutations在vuex中用于存放方法
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    doneTodos(state) {
      return state.count * 5;
    }
  }
  })

export default store;
