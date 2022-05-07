<template>
<div class="container">
  <h1 class="text-center">About Smol Domains</h1>
  
  <div class="row mt-3">
    <div class="col-md-8 offset-md-2">
      <p>Smol domains are your your Smolverse identity.</p>

      <p>
        Smol domains can be compared to ENS. They are wallet-linked domains that let you type example.smol 
        instead of a long 0x address. As opposed to ENS, Smol domains are built on top of a decentralized and 
        permissionless protocol called Punk Domains, which is deployed on Arbitrum and allows more flexibility than ENS.
      </p>

      <p>
        Smol domains are your Smolverse wallet. Own your username, and have an avatar and other profile data.
      </p>

      <p>
        Smol domains are new, so they aren't integrated everywhere like ENS. That is something that will happen 
        over time with partnerships and more. This also means MetaMask doesn't support sending to a domain yet, 
        but they have a program called Snaps in the works that will allow this. To manage this, we will build 
        projects like a Metamask Extension Plugin that allows you to send and receive Tokens and NFTs from a .smol 
        domain to a .smol domain.
      </p>

      <h3>Useful links</h3>

      <ul>
        <li><a target="_blank" href="https://docs.smol.domains/">Docs</a></li>
        <li><a target="_blank" href="https://github.com/Smol-Domains">Github</a></li>
        <li><a target="_blank" href="https://discord.gg/TjaXwz4cYY">Discord</a></li>
        <li><a target="_blank" href="https://twitter.com/SmolDomains">Twitter</a></li>
      </ul>

    </div>
  </div>
</div>
</template>

<script lang="ts">
  export default {
    name: "About"
  }
</script>

<style scoped>
p {
  text-align: justify;
  font-size: 1.1em;
}

h3 {
  margin-top: 35px;
}
</style>