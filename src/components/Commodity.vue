<template>
    <div @click="buy">
        <h4>{{ commodityName }}</h4>
        <small>+{{ volumePerSec.toLocaleString('fr-FR', 
        { maximumFractionDigits: 2 }) }}</small>
        <div>
            <img :src="require(`@/assets/${commodityName}.png`)"> 
            <div :class="{'text-green': canBuy === true, 'text-red': canBuy === false }">
            {{ price.toLocaleString('fr-FR', 
            { maximumFractionDigits: 2 }) }}</div>
        </div>
        <div>
            <span>{{ purchasedTime }}</span>
        </div>
    </div>
</template>
<script>
    export default{
        props:['commodityName','price','volumePerSec','purchasedTime','id'],
        computed:{
            totalVolume: function(){
                return this.$store.state.volume
            },
            canBuy: function(){
                return this.totalVolume >= this.price
            }
        },
        methods:{
            buy(){
                if(this.canBuy){
                    this.$store.commit('BUY',{ID:this.id})
                }
            }
        }
    }
</script>