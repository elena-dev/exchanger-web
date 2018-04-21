<template>
  <div style="height: 80vh; padding-top: 100px;">
    <Loader/>
  </div>
</template>

<script>
import Loader from '~/components/Loader'

if (process.browser) {
  const config = require('~/_config/app');
  location.href = config.apiPath + 'docs/';
}
export default {
  components: {
    Loader
  }
}
</script>
