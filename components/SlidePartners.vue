<template>
<div class="glv">
    <div class="container">
      <h2>{{$t('OurPartners')}}</h2>
      <div class="slick-slt">

    <no-ssr placeholder="Loading...">
      <Carousel
    :autoplay="true"
    :autoplayLoop="true"
    :navigationEnabled="true"
    :loop="true"
    :autoplayHoverPause="true"
    :perPage="5"
    :autoplayTimeout="3000"
    :paginationEnabled="false"
    navigationNextLabel=""
    navigationPrevLabel=""
    >
      <Slide>
          <a href="#">
            <img src="~static/img/sl1.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl2.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl3.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl1.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl2.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl3.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl1.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl2.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl3.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl1.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl2.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl3.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl1.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl2.png" alt="">
          </a>
      </Slide>
      <Slide>
          <a href="#">
            <img src="~static/img/sl3.png" alt="">
          </a>
      </Slide>
    </Carousel>
    </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel"

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>
