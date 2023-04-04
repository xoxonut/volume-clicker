<template>
    <section class="shop-container">
        <div class="header">
            <h2 class="pad">Shop</h2>
        </div>
        <div class="store-list">
            <Commodity v-for="c in commodities"
            :commodityName="c.name"
            :price="c.price"
            :volumePerSec="c.volumePerSeconds"
            :purchasedTime="c.purchasedTime"
            :id="c.id"
            ></Commodity>
        </div>
    </section>
</template>

<script>
    import Commodity from '@/components/Commodity.vue'
    export default{
        components:{
            Commodity
        },
        computed:{
            commodities : function(){
                return this.$store ? this.$store.state.commodities : null
            }
        }
    }
</script>

<style scoped>
    .shop-container {
        position: relative;
        background: #222;
        color: white;
        width: 300px;
        overflow-y: scroll;
    }

    .shop-container::before {
        position: absolute;
        content: "X";
        top: 0;
        left: 0;
        padding: 15px 30px;
        transform: translateX(-100%);
        z-index: 1000;
    }

    h2 {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        background: #111;
    }

    .pad {
        padding: 15px 30px;
    }

    .store-list {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }
</style>