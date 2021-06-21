<template>
  <div class="home__container">
    <h1>Home</h1>
    <transition name="fade">
      <p v-if="show">Hello world</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
<style lang="scss" scoped>
// Your style of the component go here

</style>