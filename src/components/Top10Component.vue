<template>
    <div>
      
      <div class="contentsText">
        <h2><slot name="title"></slot></h2>
      </div>

  <flickity  class="flickity" ref="flickity" :options="flickityOptions">
    <slot name="div"></slot>
  </flickity>
  
  </div>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: true,
        groupCells: true,
        

      }
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  top: 600px;
  

}

.flickity-viewport {
  overflow: visible;
}


</style>



