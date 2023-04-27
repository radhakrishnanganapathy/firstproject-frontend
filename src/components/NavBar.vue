<template>
     <header>
<nav class="nav-header">
     <div class="">
          <router-link to="/" class=""><i class="fa fa-tint"></i> Name your project</router-link>
          <a href="/dds"> Home</a>
          <a href="/rawmaterial"> Raw Material</a>
          <a href="/viewproduct"> About</a>
          <a href="#"> Contact</a>
          <a href="/"> Add Word</a>
          <a href="/viewword"> View Word</a>
          <router-link to='/'><button class="btn-own">LogIn</button></router-link>
          </div>
</nav>    
</header>
</template>
<script>
export default{
     name:"NavBar"
}
</script>
