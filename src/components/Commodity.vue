<template>
    <div  class="store" @click="buy">
        <div class="desc"> 
            <h4>{{ commodityName }}</h4>
            <small>+{{ volumePerSec.toLocaleString('fr-FR', 
            { maximumFractionDigits: 2 }) }} volume/s</small>
            <div class="price">
                <img class="icon" :src="require(`@/assets/${commodityName}.png`)"> 
                <div :class="{'text-green': canBuy === true, 'text-red': canBuy === false }">
                {{ price.toLocaleString('fr-FR', 
                { maximumFractionDigits: 2 }) }}</div>
            </div>
        </div>
        <div class="count">
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

<style scoped>
    .store {
        position: relative;
        font-family: 'Oswald', cursive;
        padding: 20px;
        border-bottom: solid 2px rgba(255, 255, 255, .2);
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        overflow-x: auto;
    }

    .popup {
        position: absolute;
        transform: translateX(-100%);
    }

    .store:hover {
        background: #444;
    }

    .price {
        padding-top: 10px;
        display: flex;
        align-items: center;
        font-family: 'Quicksand', sans-serif;
    }

    .desc {
        flex: 1;
    }

    .count {
        font-size: 30px;
        opacity: 0.3;
        transition: transform .1s;
    }

    .icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    .text-green {
        color: green;
    }

    .text-red {
        color: red;
    }

    small {
        color: #777;
        font-weight: normal;
        font-size: 12px;
    }

</style>