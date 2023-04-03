<template>
    <section>
        <div>
            <h2>Shop</h2>
        </div>
        <div>
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