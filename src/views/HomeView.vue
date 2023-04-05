<template>
  <div>
    
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card my-2 list-group-item-success shadow-lg">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <img
                    src='../assets/water.png'
                    class="contact-img"
                  />
                </div>
              
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    <span class="fw-bold">Name</span>
                  </li>
                  <li class="list-group-item">
                    <span class="fw-bold">lt</span>
                  </li>
                  <li class="list-group-item">
                    <span class="fw-bold">Price</span>
                  </li>
                </ul>
              </div>
              <div class="row-sm-1 d-flex gap-5 justify-content-center align-items-center">
                <router-link to="/buy" class="btn btn-wd btn-success my-1"><i class="fa fa-shopping-bag"></i></router-link>
                <router-link to="/" class="btn btn-wd btn-cart my-1"><i class="fa fa-shopping-cart"></i></router-link>
              </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    }
}
</script>
