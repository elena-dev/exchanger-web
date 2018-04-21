<template>
<div class="flx2">
  <div class="baron__scroller">
    <div class="container-v" v-html="news.content" />

  </div>
  <div class="bottom-blk">
    <div class="soc-blk">
      <div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,twitter,telegram"></div>
    </div>
    <div class="spa-date">{{new Date(news.createdAt).toLocaleDateString('ru-Ru')}}</div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      news: {}
    }
  },
  methods: {
    async GetNews() {
      await this.$rest.api('getOneNews', {
        link: this.$route.params.link
      }).then((res) => {
        if (res.success) {
          this.news = res.data
        } else {
          this.showError({
            title: 'Failed',
            message: res.error.message
          })
        }
      })
    }
  },
  created() {
    this.GetNews()
  },
  watch: {
    '$route' () {
      this.GetNews()
    }
  }
}
</script>
