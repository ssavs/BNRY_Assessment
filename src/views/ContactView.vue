<template>
<div class="container" style="margin-top: 2%;">
    <div class="row"> 
        <div class="col">
            <h2>Contact Our Team !</h2>
            <form
            action="https://formspree.io/f/xjvdjadr"
            method="POST"
            >
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" required>
              </div>
              <div class="form-group">
                  <label for="email" >Email</label>
                  <input type="email" class="form-control" id="email" name="email" required>
              </div>
              <div class="form-group">
                  <label for="message">Enquiries</label>
                  <textarea class="form-control" id="message" rows="5" name="message" required></textarea>
              </div>
              <button type="submit" class="btn btn-dark m-3" style="background-color: rgb(225, 14, 14);">Send</button>
          </form>
      </div>
      <div class="col info">
        <h4><i class="fa-solid fa-location-dot"></i> 216 Herzalia Road </h4>
        <h5>Cape Town ,South Africa</h5>

        <h4><i class="fa-solid fa-phone"></i> 021 365 9816</h4>

        <h4><i class="fa-solid fa-envelope"></i> NewtonewsOfficial@gmail.com</h4>
      </div>
      </div>
  </div>
  
  </template>
  <script>
  export default {
      
  }
  </script>
  <style scoped>
  .container{
      height: 70vh;
      background-color: #00000064;
      padding-top:4rem;
      font-size: large;
     margin-bottom: 2rem;
  
      color: white;
      }

      h2{
        background-color: rgb(225, 14, 14);
        font-weight: bold;
      }
      
      .info{
          margin-top: 10%;
          margin-bottom: 15%;
      }
  </style>
  
  
  