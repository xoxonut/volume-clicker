<template>
  <div class="game">
    <Clikcer></Clikcer>
    <ListCommodity></ListCommodity>
  </div>
</template>
<script>
  import ListCommodity from '@/components/ListCommodity.vue';
  import Clikcer from '@/components/Clikcer.vue';
  export default{
    components:{
      Clikcer,
      ListCommodity
    }
  }
</script>
<style scoped>
    .game {
        height: 100%;
        background: white;
        display: flex;
    }    
</style>
