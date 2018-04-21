<template>
<div class="slider-sl">

  <div>
    <div class="PageCaption">
      <h2>{{l('Title')}}</h2>
      <span>/</span>
      <nuxt-link :to="langLink+ 'reviews/'">
        {{l('All')}}
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </nuxt-link>
    </div>

  </div>

  <div class="slider-str">
    
    <no-ssr placeholder="Loading...">
    <Carousel 
    :navigationEnabled="true"
    :autoplay="true"
    :autoplayLoop="true" 
    :loop="true"
    :autoplayHoverPause="true"
    :perPage="1"
    :autoplayTimeout="3000"
    :navigationClickTargetSize="0"
    navigationNextLabel="" 
    navigationPrevLabel="" 
    >
      <Slide v-for="item in lastReviews" :key="item.id">
        <div class="content-in-slider">
          <div class="fll">{{item.title}}</div>
          <div class="flr">{{item.date}}</div>
          <div class="clear-blk-slider">
            {{item.text}}
          </div>
        </div>
      </Slide>
    </Carousel>
    </no-ssr>
  </div>
</div>
</template>

<script>

import { Carousel, Slide } from "vue-carousel";

export default {
  methods: {
    l(value) {
      return this.$t("Modules.Reviews." + value);
    }
  },
  computed: {
    langLink() {
      return "/" + this.$t("lang") + "/";
    },
    lastReviews() {
      return this.$store.getters["Reviews/Last"];
    }
  },
  components: {
    Carousel,
    Slide
  }
};
</script>
