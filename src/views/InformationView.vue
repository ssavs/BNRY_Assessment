<template>
<div class="container">
  <h3>Search Articles</h3>
  <form class="d-flex" style="margin-top: 2rem;">
     
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="Results">
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    <div class="col-md-4 mt-4" v-for="article in search" :key="article.id">

  <div class="card" style="width:80rem; height:23rem">
    <div class="row g-0">
      <div class="col-sm-4">
        <img :src="article.urlToImage" class="" alt="..."
      style="width:26rem ; height:23rem ;">
      </div>
      <div class="col-sm-8">
        <div class="card-body">
            <h2 class="h2">{{ article.title }}</h2>
          <h4 class="author">{{ article.author }}</h4>
          <h5 class="card-title">
            <a class="link-dark text-decoration-none" href="" target="_blank"></a>
          </h5>
          <p class="card-text">{{ article.description }}</p>
          <p>{{ article.content }}</p>
          <a class="badge rounded-pill bg-dark pill" :href="article.url" target="_blank">See Article</a>
        </div>
        <div class="card-footer text-end text-muted">
         Published : {{ article.publishedAt }}
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  </template>
  
  <script>
  import { computed } from '@vue/runtime-core';
  import { useStore } from 'vuex';
  
  export default {

data() {
  return{
    Results:'',
    articles:[]
  }
},
  setup() {
        const store = useStore();
        store.dispatch('fetchArticles');
        const articles = computed(() =>
            store.state.articles);
  
        return {
            articles,
        }
    },

computed:{
  search:function(){
    return this.articles.filter((article) => {
      return article.content.toLowerCase().match(this.Results.toLowerCase())
    });
  }
  }
};
  </script>
  
  <style scoped>
  
  
  .title{
    margin-bottom: 5rem;
  }
  
  .h2{
    margin-top: 1rem;
    font-size:x-large;
    color: rgb(225, 14, 14);
    font-weight: bolder;
  }
  
  .author{
    color:rgb(0, 0, 0);
    font-weight: bold;
    font-size: large;
  }
  
.pill{
    background-color: rgb(225, 14, 14);
}

  .paragraph{
    margin-top: 1rem;
    color: rgb(0, 0, 0);
  }
  
  .time{
    font-size: medium;
  color: rgb(0, 0, 0);
  }
  
  .content{
    margin-top: 1rem;
    color: rgb(0, 0, 0);
  }
  
  .url{
    margin-bottom: 1rem;
  }

  h3{
    color: white;
  }
  
  .card{
    background-color: rgb(255, 255, 255);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.5);
    margin-bottom: 3rem;
  }
  </style>