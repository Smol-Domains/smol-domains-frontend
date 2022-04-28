import { createStore } from 'vuex';
import network from "./modules/network";
import user from "./modules/user";
import punk from "./modules/punk";
import smol from "./modules/smol";


const store = createStore({
  modules: {
    network,
    user,
    punk,
    smol
  }
})

export default store;