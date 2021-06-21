<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{myMessage}}</h2>
    <h2>{{myPropsDynamic}}</h2>
    <button @click="onClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      require: false,
      default: null
    },
    myMessage: {
      type: String,
      default: null,
      require: false,
    },
    myPropsDynamic: {
      type: String,
      default: null,
      require: true,
    }
  },
  methods: {
    onClick() {
      this.$emit('my-action-click', 20)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
