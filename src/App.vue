<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/game">About</router-link>
  </nav> -->
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default{
    name: 'app',
    data(){
      return{
        delayMs: 1000
      }
    },
    computed:{
      commodities:function(){
        return this.$store.state.commodities
      }
    },
    mounted(){
      this.increVolume()
    },
    methods:{
      increVolume(){
        setInterval(()=>{
          let count=0

          for(let c of this.commodities){
            count += c.volumePerSeconds*c.purchasedTime
          }

          this.$store.commit('ADD',{volume:count})
        },this.delayMs)
      }
    }
  }
</script>
<style>
    @import url('https://fonts.googleapis.com/css?family=Quicksand');
    @import url('https://fonts.googleapis.com/css?family=Oswald');

    #app {
        height: 100%;
        background: #fff;
        font-family: 'Quicksand', sans-serif;
        overflow: hidden;
    }

    h1 {
        font-size: 36px;
        font-weight: bold;
        line-height: 60px;
        color: #3e606f;
    }

    .btn-main {
        border: solid 3px #3e606f;
        background: transparent;
        color: #3e606f;
        padding: 15px 30px;
        font-size: 20px;
        border-radius: 9999px;
        transition: all .2s;
    }

    .btn-main:hover {
        background: #3e606f;
        color: white;
        padding: 15px 30px;
        font-size: 20px;
        border-radius: 9999px;
        cursor: pointer;
    }

    .scale-up {
        transform: scale(1.5);
    }
</style>
<style scoped>
  footer {
    background: #F0B67F;
    padding: 10px 5px;
    height: 20px;
  }
</style>


