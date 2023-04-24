<template>
    <nav class="navbar navbar-expand-lg navbar-dark bar">
    <div class="container-fluid" style="flex-direction: column;align-items: center;justify-content: center;">
      <button
        class="navbar-toggler d-flex d-none-lg"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      style="position: absolute; right: 15px;color: black; background-color: black;">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbarrr">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              ><RouterLink to="/">Home</RouterLink></a>
            
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              ><RouterLink to="/about">About</RouterLink></a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              ><RouterLink to="/info">Information</RouterLink></a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              ><RouterLink to="/contact">Contact</RouterLink></a>
          </li>
        </ul>
      </div>
      </div>
    </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    h1{
        color: #ffffff;
    }

a{
    text-decoration: none;
}

    .bar{
      color:rgb(225, 14, 14);
      font-weight: bold;
      
    }
</style>





