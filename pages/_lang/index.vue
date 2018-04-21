<template>

</template>

<script>
export default {
  fetch ({ store, redirect }) {
    redirect(302, '/' + store.state.locale + '/exchange/')
  }
}
</script>
