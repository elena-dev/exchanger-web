<template>
<footer>
  <div class="container">
    <div class="line-top"></div>
    <div class="menu-footer">
      <p class="fll">{{$t('Copyright')}}</p>
      <div class="menu-bottom flr">
        <ul>
          <li v-for="link in Menu" :key="link.id">
            <nuxt-link :to="langLink + link.url" :title="$t(link.key)">
              {{ $t(link.key) }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  methods: {
    LangMenu(value) {
      return this.$t(String(value));
    }
  },
  computed: {
    langLink() {
      return "/" + this.$t("lang") + "/";
    },
    Menu() {
      return this.$store.state.Menu.Footer;
    }
  }
};
</script>
