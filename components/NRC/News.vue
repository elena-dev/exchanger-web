<template>
<div class="slider-sl">
  <div>
    <div class="PageCaption">
      <h2>{{l('Title')}}</h2>
      <span>/</span>
      <nuxt-link :to="langLink+ 'news/'">
        {{l('All')}}
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </nuxt-link>
    </div>

  </div>

  <div class="news-clx">
    <div class="news-blk" v-for="item in items" :key="item.id">
      <nuxt-link :to="langLink + 'news/' + item.link">
        <p>{{ item.title }}</p>
        <span>{{new Date(item.createdAt).toLocaleDateString('ru-Ru')}}</span>
      </nuxt-link>
    </div>
  </div>

</div>
</template>

<script>
export default {
  methods: {
    l(value) {
      return this.$t('Modules.News.' + value)
    },
    async GetNews() {
      await this.$rest.api('getNewsBasic', {limit: 3}).then((res) => {
        if (res.success) {
          this.items = res.data.news
        }
      })
    }
  },
  computed: {
    langLink() {
      return '/' + this.$t('lang') + '/'
    }
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.GetNews()
  }
}
</script>
