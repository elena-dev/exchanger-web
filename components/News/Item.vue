<template>
<div class="news-block">
  <nuxt-link :to="link">
    <i class="fa fa-file-text-o" aria-hidden="true"></i>
    <p>{{title}}</p>
    <span>{{date.toLocaleDateString('ru-Ru')}}</span>
  </nuxt-link>
</div>
</template>

<script>
export default {
  props: {
    link: {
      type: String
    },
    title: {
      type: String
    },
    date: {
      type: Date
    }
  }
}
</script>

<style lang="less">
.news-block {
  .nuxt-link-exact-active {
    i {
      color: #ffc900;
    }
  }
}
</style>
