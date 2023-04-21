import { createStore } from 'vuex';
import axios from 'axios';
const BNRY = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8b2b68e300aa444aaa5569c5c2b34c0b';



export default createStore({
  state: {
    articles: null,
    message:null,
  },
  getters: {
    articles(state){
      return state.articles
    }
  },
  mutations: {
    setArticles(state,values){
      state.articles = values;
    },
    setMessage(state,message){
      state.message = message
    }
  },
  actions: {
async fetchArticles(context){
  const response = await axios.get(`${BNRY}`);
 let {articles}= await response.data;
  if (articles){
    context.commit('setArticles', articles);
  } else{
    context.commit('setMessage', err)
  }
}},

  modules: {
  }
})
