<template>
  <NavBar />
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  components: { NavBar, FooterComp },
};
</script>

<style>
#app {
  font-family:'Display';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  /* background-color:#825938; */
  background-image:url(https://i.postimg.cc/bNNWHLdy/absolutvision-WYd-Pk-Ca1-BY-unsplash.jpg);
  background-repeat: no-repeat;
background-size: cover;
overflow-x: hidden;
/* overflow-y: hidden; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  font-size: x-large;
  color: #000000;
}

nav a.router-link-exact-active {
 
  color:rgb(255, 8, 0);
}
</style>
