import { ethers } from 'ethers';
import tlds from "../../abi/tlds.json";
import tldAbi from '../../abi/PunkTLD.json';
import SmolPunkDomainsAbi from "../../abi/SmolPunkDomains.json";
import useChainHelpers from "../../hooks/useChainHelpers";

const { getFallbackProvider } = useChainHelpers();

export default {
  namespaced: true,
  
  state: () => ({ 
    smolTldAddress: tlds["42161"][".smol"],
    smolTldName: ".smol",
    tldAddress: "0xE0d972817e94c5FF9BDc49a63d8927A0bA833E4f",
    tldContract: null,
    wrapperAddress: "0x7c9A024C5eeed9fE96f8512cd7348245326f4bD7",
    wrapperContract: null,
    wrapperPaused: true,
    wrapperTldPrice: null
  }),

  getters: { 
    getSmolTldAddress(state) {
      return state.smolTldAddress;
    },
    getSmolTldContract(state) {
      return state.tldContract;
    },
    getSmolTldName(state) {
      return state.smolTldName;
    },
    getSmolWrapperAddress(state) {
      return state.wrapperAddress;
    },
    getWrapperContract(state) {
      return state.wrapperContract;
    },
    getWrapperPaused(state) {
      return state.wrapperPaused;
    },
    getWrapperTldPrice(state) {
      return state.wrapperTldPrice;
    }
  },

  mutations: {
    setTldContract(state) {
      let fProvider = getFallbackProvider(42161); // Polygon

      const tldIntfc = new ethers.utils.Interface(tldAbi);
      state.tldContract = new ethers.Contract(state.tldAddress, tldIntfc, fProvider);
    },

    setWrapperContract(state, contract) {
      state.wrapperContract = contract;
    },

    setWrapperPaused(state, paused) {
      state.wrapperPaused = paused;
    },

    setWrapperTldPrice(state, price) {
      state.wrapperTldPrice = price;
    },
  },

  actions: {
    async fetchWrapperContractData({commit, state}) {
      let fProvider = getFallbackProvider(42161);

      // Wrapper contract
      const wrapperIntfc = new ethers.utils.Interface(SmolPunkDomainsAbi);
      const contract = new ethers.Contract(state.wrapperAddress, wrapperIntfc, fProvider);

      commit("setWrapperContract", contract);

      // check if wrapper contract is paused
      const paused = await contract.paused();
      commit("setWrapperPaused", paused);

      // get price
      const priceMwei = await contract.price();
      const domainPrice = ethers.utils.formatEther(priceMwei); // $MAGIC
      commit("setWrapperTldPrice", domainPrice);
      
      //this.chosenAllowance = this.domainPrice;
    }
  }
};