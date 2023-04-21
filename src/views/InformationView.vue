<template>
<div class="container">
    <div class="col-md-4 mt-4" v-for="article in articles" :key="article.id">
  <div class="card" style="width:80rem; height:21rem">
    <div class="row g-0">
      <div class="col-sm-4">
        <img :src="article.urlToImage" class="" alt="..."
      style="width:26rem ; height:21rem ;">
      </div>
      <div class="col-sm-8">
        <div class="card-body">
            <h2 class="h2">{{ article.title }}</h2>
          <h4 class="author">{{ article.author }}</h4> 
         <!-- <a class="url">{{ article.url }}</a> -->
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


        <!-- <div class="container">
            <div class="row">
                <div class="col-md-4 mt-4" v-for="article in articles" :key="article.id">
                    <div class="card" style="width: 25rem; height: 46rem;">
                        <h3 class="card-title cards">{{ article.name }}</h3>
                        <div class="img">
                            <img :src="article.urlToImage" class="card-img-top" style="height:12rem;max-width: 26rem" />
                        </div>
                        <div class="card-body">
                            <h2 class="h2">{{ article.title }}</h2>
                              <p class="author">{{ article.author }}</p>
                              <a class="url">{{ article.url }}</a>
                            <p class="paragraph">{{ article.description }}</p>
                            <p class="content">{{ article.content }}</p>
                                <p class="time">{{ article.publishedAt}}</p>
                              
                            
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
  </template>
  
  <script>
  import { computed } from '@vue/runtime-core';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
        const store = useStore();
        store.dispatch('fetchArticles');
        const articles = computed(() =>
            store.state.articles);
  
        return {
            articles,
        }
    }
  }
  </script>
  
  <style scoped>
  
  
  .title{
    margin-bottom: 5rem;
  }
  
  .h2{
    margin-top: 1rem;
    font-size:x-large;
    color: rgb(225, 14, 14);
    font-weight: bold;
  }
  
  .author{
    color:rgb(0, 0, 0) ;
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
  
  .card{
    background-color: rgb(255, 255, 255);
  }
  </style>