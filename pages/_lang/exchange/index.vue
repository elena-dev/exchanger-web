<template>
  <div>
    <Exchange />
    <Reserves />
    <NRC />
    <StatisticsMinimal />
    <Information />
    <SlidePartners /> 
  </div>
</template>

<script>
import Exchange from '~/components/Exchange'
import Reserves from '~/components/Reserves'
import NRC from '~/components/NRC'
import StatisticsMinimal from '~/components/Statistics/Minimal'
import Information from '~/components/Information'
import SlidePartners from '~/components/SlidePartners'

export default {
  head() {
    return {
      title: this.$t('Exchange')
    };
  },
  components: {
    Exchange,
    Reserves,
    NRC,
    StatisticsMinimal,
    Information,
    SlidePartners
  }
}
</script>
