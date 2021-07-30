<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Essential Links</h3>
    <sumFunction/>
  </div>
</template>

<script>
// import sumFunction from '../../node_modules/marvin_mahaitao_test_test/dist/sumFunction'
const sumFunction = window.sumFunction.default
export default {
  name: 'HelloWorld',
  components: {
    sumFunction
  },
  props: {
    msg: String
  },
  created () {
    // console.log(window.sumFunction)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
