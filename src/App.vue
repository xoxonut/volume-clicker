<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/game">About</router-link>
  </nav>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
