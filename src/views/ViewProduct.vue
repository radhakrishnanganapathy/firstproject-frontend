<template>
     <div class="">
          <div>
               <div>
                    <h5 class="add_dopotss" @click="$bvModal.show('modal-multi-1')">
              Add Item
            </h5>
               </div>
               <div>
            <b-modal
              ref="errorset_depotname"
              id="modal-multi-1"
              v-model="modalmulti1"
              title="First Modal"
              ok-only
              no-stacking
              no-close-on-backdrop
            >
            </b-modal>
            
            </div>
          </div>
     </div>
</template>

<script>
export default {
     
}
</script>