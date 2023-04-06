<template>
     <header>
<nav class="nav-header">
     <div class="">
          <router-link to="/" class=""><i class="fa fa-tint"></i> Name your project</router-link>
          <a href="/"> Home</a>
          <a href="/rawmaterial"> Raw Material</a>
          <a href="#"> About</a>
          <a href="#"> Contact</a>
          <a href="#"> Services</a>
          <router-link to='/login'><button class="btn-own">LogIn</button></router-link>
          </div>
</nav>    
</header>
</template>
<script>
export default{
     name:"NavBar"
}
</script>
