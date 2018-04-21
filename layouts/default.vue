<template>
<div>
  <HeaderMenu />
  <nuxt/>
  <Modals/>
  <Reserves/>
  <FooterMenu/>
</div>
</template>

<script>
import HeaderMenu from "~/components/Header";
import FooterMenu from "~/components/Footer";
import Modals from "~/components/Modals";
import Reserves from "~/components/Modals/Reserves";

export default {
  created() {
    this.$rest.api('isAuthUser').then((res) => {
      if (res.success) {
        this.$store.dispatch('User/Set', res.data)
        this.$store.dispatch('Menu/Auth', true)
      } else {
        this.$store.dispatch('Menu/Auth', false)
      }
    })
  },
  // middleware: 'authenticated',
  head() {
    return {
      htmlAttrs: {
        lang: this.$t("lang")
      }
    };
  },
  components: {
    HeaderMenu,
    FooterMenu,
    Modals,
    Reserves
  }
}
</script>
