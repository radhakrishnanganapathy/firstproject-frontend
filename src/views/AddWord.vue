<template>
     <div>
          <div>
               <form @submit.prevent="wordAdd">
                    <div>
                         <label>Add Words</label>
                         <input v-model="addword" type="text" placeholder="words">
                         <input type="submit" value="add">
                    </div>
               </form>
          </div>
     </div>
</template>

<script>
import { SignUpUser} from '../services/Services'
export default {
     name: "AddWord",
     data : function(){
          return{
               
                    addword:""
               
          }
     },
     methods:{
          wordAdd: async function(){
               let response = await SignUpUser.addword(this.addword)
               console.log(response)
               this.word = response
               return this.$router.push('/')
          }
     }
}
</script>