<template lang="pug">
  .flex.p404
    center
      h1.title {{ error.statusCode }}
      h2.info {{ error.message }}
      nuxt-link.circle(to="/", v-if="error.statusCode === 404") На главную


</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped lang="styl">
.p404
  height: 100vh

center
  margin auto

.title
  margin: 0;
  font-size: 5em;
.info
  color: #9aabb1;
  margin-bottom: 1.6em

</style>
