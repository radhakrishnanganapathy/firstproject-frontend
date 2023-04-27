<template>
     <div>
          <table>
  <thead>
    <tr>
      <th>Word</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in items" :key="index">
      <td>{{ item.words }}</td>
      
    </tr>
  </tbody>
</table>
     </div>
</template>

<script>
import { SignUpUser} from '../services/Services'
export default {
     name:"ViewWords",
     data(){
          return{
               items:[]
          }
     },
     mounted() {
  this.fetchData()
},
     methods: {
  fetchData: async function() {
    let response= await SignUpUser.getword(this.items)
    this.items = response.data
    return this.$router.push('/viewword')
},

}
}
</script>