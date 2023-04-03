<template>
  <div class="about">
     <h1>{{ this.$store.state.volume.toLocaleString('fr-FR', 
        { maximumFractionDigits: 2 }) }}</h1>
    <img src="@/assets/king.png" @click="this.$store.commit('CLICK')">
    <ListCommodity></ListCommodity>
  </div>
</template>
<script>
  import ListCommodity from '@/components/ListCommodity.vue';

  export default{
    components:{
      ListCommodity
    }
  }
</script>