import { createStore } from 'vuex'
import commodities from '@/assets/commodities'
export default createStore({
  state: {
    commodities:commodities,
    volume:0
  },
  getters: {
  },
  mutations: {
    CLICK(state){
      state.volume++
    },
    BUY(state,{ID}){
      state.commodities = state.commodities.map(commodity=>{
        if(commodity.id === ID){
          commodity.purchasedTime++
          state.volume -= commodity.price
          commodity.price = 1.22 * commodity.price
        }
        return commodity
      })
    },
    ADD(state,{volume}){
      state.volume += volume
    }
  },
  actions: {
  },
  modules: {
  }
})
