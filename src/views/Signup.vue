<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <div class="">
          <div>
               LogIn
          </div>
          <div>
               <form @submit.prevent="submitCreate">
                    <div>
                    <input v-model="signup.username" type="text" placeholder="username">
                    <input v-model="signup.email" type="email" placeholder="email">
                    <input v-model="signup.mobile" type="number" placeholder="mobile number">
                    <input v-model="signup.password" type="password" placeholder="password">
                    </div>
                    <div>
                         <input type="submit" value="signup">
                         <!-- <input type="submit" value="already have account"> -->
                    </div>
               </form>
          </div>
     </div>
</template>

<script>
import { SignUpUser } from '../services/Services';
export default {
     name : "SignUp",
     data: function(){
          return {
               signup:{
                    username:"",
                    email:"",
                    mobile:"",
                    password:""
               }
          };
     },
     methods :{
          submitCreate : async function(){
               let response = await SignUpUser.usersignup(this.signup);
               console.log('````````````````',response)
      if (response) {
        return this.$router.push("/");
      } else {
        return ("invalid")
      }
          }
     }
     
}
</script>