<template>
  <div class="main">
    <h1>Hello.</h1>
    <h2>My name is Evan You.</h2>
    <h3>
      I am an independent software developer and the creator of the open source JavaScript framework Vue.js. Most of my work is open source and publicly available on GitHub. You can follow me on Twitter where I mostly tweet about Vue and frontend technologies.
    </h3>
    <h3>
      If you happen to speak Chinese, my Chinese name is 尤雨溪 (yóu yǔ xī). You can also find me on 微博 and 知乎.
    </h3>
    <h3>
      Outside of programming and helping my wife take care of our two kids, I enjoy video games, karaoke, sushi and collecting watches.
    </h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  margin: 0 auto;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h3 {
  margin: 40px 0 0;
}

</style>
