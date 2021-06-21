<template>
  <div>
    <!-- <router-link :to="`/blog/${$route.params.id}/posts`">Posts</router-link> | 
    <router-link :to="`/blog/${$route.params.id}/detail`">Detail</router-link>
    <router-view></router-view> -->
    <h1>{{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
}
</script>

<style>

</style>