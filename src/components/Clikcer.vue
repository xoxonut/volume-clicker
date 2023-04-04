<template>
  <section class="volume-container">
    <div class="header">
      <div class="score">
        <div class="volume-count">
          {{ volume.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) }}
        </div>
        <div style="display;: inline-block">
          volume
        </div>
      </div>
    </div>
    <div class="content">
      <div class="volume-wrapper">
        <img  class="volume" @click="click" src="@/assets/green.png">
      </div>
    </div>
  </section>
</template>

<script>
  export default{
    computed:{
      volume:function(){
        return this.$store.state.volume
      }
    },
    methods:{
      click(){
        this.$store.commit('CLICK')
      }
    }
  }
</script>
<style scoped>
    .volume-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #C7EFCF;
        user-select: none;
    }

    .header {
        font-family: 'Oswald', sans-serif;
        background: rgba(0, 0, 0, .4);
        text-align: center;
        padding: 30px 10px;
        font-size: 32px;
        color: white;
        user-select: none;
    }

    .volume-count {
        transition: all .2s;
    }

    .content {
        flex: 1;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    .volume-wrapper {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .volume {
        max-width: 50%;
        cursor: pointer;
        transition: all .5s;
    }

    .plus1 {
        font-size: 18px;
        font-weight: bold;
        color: white;
        border: solid 1px black;
    }
</style>