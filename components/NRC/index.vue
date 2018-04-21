<template>
<div class="block-slider">
  <div class="container">

    <div class="row">

      <News />
      <Reviews />
      <Courses />
    </div>
  </div>
</div>
</template>

<script>
import News from './News'
import Reviews from './Reviews'
import Courses from './Courses'

export default {
  components: {
    News,
    Reviews,
    Courses
  }
}
</script>
