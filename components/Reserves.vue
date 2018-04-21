<template>
<div class="block-reserv" id="Reserves">
  <div class="container">
    <div class="left-title">
      <h2>{{$t('CurrencyReserves')}}</h2>
    </div>
    <div class="right-title">
      <a class="modal__trigger" data-modal="#reserv-modal" @click="Open()">
          <i class="icon i-balance"></i>
          <span class="res">{{$t('OrderReserves')}}</span>
        </a>
    </div>

    <div class="res-blks">
      <div class="res-block-area">
        <p>
          <img src="~static/img/qw.png" alt="">Qiwi</p>
        <span>4751.23</span>
      </div>
      <div class="res-block-area">
        <p>
          <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
        <span>4751.23</span>
      </div>
      <div class="res-block-area">
        <p>
          <img src="~static/img/qw.png" alt="">Qiwi</p>
        <span>4751.23</span>
      </div>
      <div class="res-block-area">
        <p>
          <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
        <span>4751.23</span>
      </div>
      <div class="res-block-area">
        <p>
          <img src="~static/img/qw.png" alt="">Qiwi</p>
        <span>4751.23</span>
      </div>
      <div class="res-block-area">
        <p>
          <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
        <span>4751.23</span>
      </div>
      <div class="res-block-area">
        <p>
          <img src="~static/img/qw.png" alt="">Qiwi</p>
        <span>4751.23</span>
      </div>
      <div class="res-block-area">
        <p>
          <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
        <span>4751.23</span>
      </div>
      <div class="res-block-area">
        <p>
          <img src="~static/img/qw.png" alt="">Qiwi</p>
        <span>4751.23</span>
      </div>
      <div class="res-block-area">
        <p>
          <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
        <span>4751.23</span>
      </div>
      <div class="res-block-area">
        <p>
          <img src="~static/img/qw.png" alt="">Qiwi</p>
        <span>4751.23</span>
      </div>
      <div class="res-block-area">
        <p>
          <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
        <span>4751.23</span>
      </div>
      <transition name="reserves">
        <div class="overflow-hiden" v-if="isShowReserves">
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/qw.png" alt="">Qiwi</p>
            <span>4751.23</span>
          </div>
          <div class="res-block-area">
            <p>
              <img src="~static/img/pvt.png" alt="">PRIVAT24</p>
            <span>4751.23</span>
          </div>
        </div>
      </transition>
    </div>

    <div class="arrow-trigger-show" @click="isShowReserves = !isShowReserves">
      <i class="fa" :class="{'fa-chevron-down': !isShowReserves, 'fa-chevron-up': isShowReserves}" aria-hidden="true"></i>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isShowReserves: false
    }
  },
    methods: {
      Open() {
        return this.$store.dispatch('Modals/Reserve', true)
      }
    }
}
</script>
