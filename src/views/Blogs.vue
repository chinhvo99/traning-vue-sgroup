<template>
  <div class="blogs">
    This is blogs page
    <template v-for="blog in blogs">
      <div class="blog__container" :key="'blog-'+blog.id"
      @click="$router.push('/blog/'+blog.id)"
      >
      <img
        style="width: 100px; height: 100px"
       :src="blog.thumbnail"
       >
        <h2>{{blog.title}}</h2>
        <p>{{blog.description}}</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  data() {
    return {
      blogs: [
        {
          "id": "2",
          "categoryId": "2",
          "createdAt": "2021-04-23T09:07:41.855Z",
          "title": "cross-platform",
          "thumbnail": "http://lorempixel.com/640/480/animals",
          "description": "Legacy",
          "content": "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!"
        },
        {
          "id": "3",
          "categoryId": "3",
          "createdAt": "2021-04-23T14:57:39.459Z",
          "title": "Bedfordshire",
          "thumbnail": "http://lorempixel.com/640/480/transport",
          "description": "Investor",
          "content": "If we transmit the bandwidth, we can get to the SCSI microchip through the back-end JBOD hard drive!"
        },
        {
          "id": "4",
          "categoryId": "4",
          "createdAt": "2021-04-23T13:31:36.828Z",
          "title": "programming application quantify",
          "thumbnail": "http://lorempixel.com/640/480/city",
          "description": "Dynamic",
          "content": "Use the redundant TCP capacitor, then you can parse the redundant monitor!"
        }
      ]
    }
  },
  created() {
    console.log(this.blogs);
    console.log(this.$route);
  }
}
</script>

<style scoped>
.blogs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.blog__container {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  cursor: pointer;
}
</style>