<template>
<div class="main-container">

  <div class="container check-order-content">
    <div class="rows">
      <h1>{{l('Title')}}</h1>

      <div class="Content-mt">
        <div class="Exchange">

          <div class="Calculator">
            <div class="Left">
              <h1>{{ l('YouGive') }}</h1>
              <div class="Input">
                <input type="number" v-model.number="get" :min="minimal" @change="Convert()" />
                <div class="Money modal__trigger" id="SetExchange" aria-hidden="true" data-modal="#sys-modal">
                  <span>{{setSystem}}</span>
                  <img src="~static/img/yandex.png">
                </div>
              </div>
              <h2>
                {{ l('Minimal') }}
                <label id="GetMinimal">{{minimal}}</label> RUB
              </h2>
            </div>
            <div class="Midle">
              <img src="~static/img/load.png">
            </div>

            <div class="Left show-mobile">
              <h1>
                {{ l('YouGet') }}
                <a href="#" v-scroll-to="'#Reserves, 80px'">
                    <i class="icon i-balance"></i>
                    <span class="res">{{ l('Reserves') }}</span>
                </a>
              </h1>
              <div class="Input">
                <input type="number" v-model.number="set" :min="minimal" readonly />
                <div class="Money modal__trigger" aria-hidden="true" data-modal="#sys-modal2">
                  <span>{{getSystem}}</span>
                  <img src="~static/img/yandex.png">
                </div>
              </div>
              <h2>
                {{ l('Exchenge') }} 1 руб. =
                <label id="Curency">{{ rate }}</label> руб.
              </h2>
            </div>

            <div class="Right hidden-mobile">
              <h1>
                {{ l('YouGet') }}
                <a href="#" v-scroll-to="'#Reserves, 80px'">
                    <i class="icon i-balance"></i>
                    <span class="res">{{ l('Reserves') }}</span>
                  </a>
              </h1>
              <div class="Input">
                <div class="Money modal__trigger" aria-hidden="true" data-modal="#sys-modal3">
                  <img c src="~static/img/yandex.png">{{getSystem}}</div>
                <input type="number" id="SwMoney" :min="minimal" v-model.number="set" readonly />
              </div>

              <h2>
                {{ l('Exchenge') }} 1 руб. =
                <label id="Curency">{{ rate }}</label> руб.
              </h2>
            </div>
          </div>
          <form>
            <div class="Data">
              <h2>{{l('EnterData')}}</h2>
              <div class="IconInputs">
                <input type="email" :placeholder="l('Email')" :v-model="email" required />
                <input type="text" :placeholder="l('Purse') + ' ' + setSystem" :v-model="getRequisite" required />
                <input type="text" :placeholder="l('Purse') + ' ' + getSystem" :v-model="setRequisite" required />
              </div>

            </div>


            <div class="checkbox">
              <label @click="agree = !agree">
            <div class="jq-checkbox" :class="{'checked': agree}">
              <input id="agree" type="checkbox" v-model="agree" required @click="agree = !agree"/>
              <div class="jq-checkbox__div"></div>
            </div>
            {{l('Agree')}}&nbsp;
          </label>
              <label>
            <a :href="'/' + $t('lang') + '/rules/'" target="_blank">{{l('License')}}</a>
          </label>
            </div>

            <button class="main-btn main-button-bg">{{l('Button')}}</button>

          </form>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      rate: 0.954,
      minimal: 500,
      get: 500,
      set: 0,
      email: '',
      getRequisite: '',
      setRequisite: '',
      agree: true,
      setSystem: 'Я.Деньги',
      getSystem: 'Я.Деньги'
    }
  },
  methods: {
    Convert() {
      if (this.get < this.minimal)
        this.get = this.minimal
      return this.set = this.get * this.rate
    },
    l(value) {
      return this.$t('Modules.Exchange.' + value)
    }
  },
  created() {
    this.Convert()
  }
}
</script>
