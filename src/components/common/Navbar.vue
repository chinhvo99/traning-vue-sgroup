<template>
  <div id="nav">
    <button @click="$router.go(-1)">Back</button> | 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <button @click="$router.push({
      name: 'Blogs'
    })">Blogs</button> | 
    <button @click="$router.go(1)">Foward</button> | 
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>