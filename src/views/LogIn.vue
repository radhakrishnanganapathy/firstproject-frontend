<template>
     <div class="wrapper">
          <div class="form-box">
               <h2>Login</h2>
               <form action="#" @submit.prevent="userLogIn">
                    <div class="input-box">
                         <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                         <input v-model="login.userName" type="text" >
                         <label>UserName</label>
                    </div>
                    <div class="input-box">
                         <input v-model="login.password" type="password" >
                         <label>Password </label>
                    </div>
                    <div class="input-box">
                    <input class="btn-login" type="submit" value="Login">
                    <input type="submit" value="signup">
                    </div>
                    
               </form>
          </div>
     </div>
</template>

<script>
import { SignUpUser} from '../services/Services'
export default {
     name: "SignIn",
     data :function(){
          return {
               login:{
               userName : "",
               password: "",
               }
             

          };

     },
     methods:{
          userLogIn: async function(){
               let response = await SignUpUser.userlogin(this.login)
               this.login = response
               console.log("loggedIn", response.data)
               if(response){
                    console.log("loginnnnnnnn....")
                    return this.$router.push('/rawmaterial')
                    // return this.$toasted.success("login")
               }
               else{
                    // console.log("invale")
                    // return this.$router.push('/about')
                    return this.$VueToasted.error('Hello world!', {
                    duration: 2000
                    })
               }
          }
     }
}
</script>