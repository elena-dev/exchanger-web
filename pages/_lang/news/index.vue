<template>
<div class="flx2">
  <div class="baron__scroller">
    <div class="container-v">

    </div>

  </div>
  <div class="bottom-blk">
    <div class="soc-blk">
      <div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,twitter,telegram"></div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  beforeCreate() {
    this.$rest.api('getNewsBasic', {
      limit: 1,
      page: 1,
      lanng: this.$route.params.lang
    }).then((res) => {
      if (res.success)
        this.$router.push('/' + this.$store.state.locale + '/news/' + res.data.news[0].link)
    })
  }
}
</script>