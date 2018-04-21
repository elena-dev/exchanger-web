<template>
  <div id="reserv-modal" class="modal modal--align-top modal__bg w360px modal--active" aria-hidden="true" v-if="isReserve">
    <div class="modal__dialog">
      <div class="modal__content modal__content--active">
        <h2>{{$t('ReservOrder')}}</h2>
        <div class="reserv-content">

          <form action="">
            <div class="form-login">
              <div class="ex-modal-block">
                <div class="fll fl50">
                  <img src="~static/img/pvt.png" alt="">
                </div>
                <div class="flr fl50">
                  <p>PRIVAT24 UA</p>
                  <h3>8 394.00</h3>
                </div>

              </div>
              <div class="lg-form">
                <label for="">{{$t('NeedAmount')}}</label>
                <input type="text" value="485.39 UHA">
              </div>
              <div class="lg-form">
                <label for="">E-MAIL</label>
                <input type="text" value="www.lancer.pro@gmail.com">
              </div>

              <div class="lg-form">
                <label for="">{{$t('Comment')}}</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>

              <div class="lg-form ">
                <button class="zap-btn">
                  <span>{{$t('Request')}}</span>
                </button>
              </div>

              <br>

              <br>
            </div>

          </form>

        </div>

        <a class="modal__close demo-close" @click="Close()">
          <svg class="" viewBox="0 0 24 24">
            <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"
            />
            <path d="M0 0h24v24h-24z" fill="none" />
          </svg>
        </a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Close() {
      return this.$store.dispatch('Modals/Reserve', false)
    }
  },
  computed: {
    isReserve() {
      return this.$store.getters['Modals/Reserve']
    }
  }
}
</script>
