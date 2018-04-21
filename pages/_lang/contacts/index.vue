<template>
  <div>
    <Contacts />
    <NRC />
  </div>
</template>

<script>
import Contacts from '~/components/Contacts'
import NRC from '~/components/NRC'

export default {
  head() {
    return {
      title: this.$t('Contacts')
    };
  },
  components: {
    Contacts,
    NRC
  }
}
</script>
