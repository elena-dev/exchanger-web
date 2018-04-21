<template>
<div class="white-block">
  <div class="recv-accoutnt">
    <h2>Реквизиты</h2>

    <div class="tabs-blk-user">

      <div class="tabs2">
        <nav class="tabs__navigation2">
          <a class="tabs__link2 tabs__link--active2" href="#sa1">Электронные валюты</a>
          <a class="tabs__link2" href="#sa2">Криптовалюты</a>
          <a class="tabs__link2" href="#sa3">банковские счета</a>
        </nav>

      </div>

      <p class="rkv-p">
        Вы можете заполнить или изменить ваши реквизиты, для того, чтобы быстро использовать их при обменах.
      </p>

      <div class="obmn-blk">
        <div class="row">
          <div class="obm-left">
            <div class="grr-bg">
              <img src="~/static/img/qiwi.png" alt="">
              <p>
                У вас нет ни одного Яндекс.Деньги реквизита
              </p>
              <button @click="AddPurse()">
                                  <span>
                                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                    Добавить кошелек
                                  </span>
                                </button>
            </div>
          </div>
          <div class="obm-right">
            <div class="grr-bg">
              <img src="~/static/img/qiwi.png" alt="">
              <p>
                У вас нет ни одного Яндекс.Деньги реквизита
              </p>
              <button @click="AddPurse()">
                                  <span>
                                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                    Добавить кошелек
                                  </span>
                                </button>
            </div>
          </div>
        </div>
        <AddRequisites :Сurrency="Сurrency" :Purse="Purse" :close="closePurse" :save="savePurse" v-if="Сurrency != null && Purse != null"/>
      </div>
    </div>

  </div>

</div>
</template>

<script>
import AddRequisites from './AddRequisites'

export default {
  data() {
    return {
      Сurrency: null,
      Purse: null,
    }
  },
  components: {
    AddRequisites
  },
  methods: {
    AddPurse() {
      this.Сurrency = ["RUB", "USD", "EUR"]
      this.Purse = ["7661067727020406", "4490097712933821", "2995966060905806", "7751032222845659"]
    },
    closePurse(){
      this.Сurrency = null
      this.Purse = null
    },
    savePurse(){
      this.Сurrency = null
      this.Purse = null
    }
  }
}
</script>