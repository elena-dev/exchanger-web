<template>
  <div class="block-obm">
    <div class="container">
      <div class="left-sl">
        <h4>ОБМЕН ETHEREUM ETH НА СБЕРБАНК RUB</h4>
        <p>Для обмена Вам необходимо выполнить несколько шагов:</p>
        <ul>
          <li class="bf1">
            Заполните все поля представленной формы. Нажмите кнопку «Обменять».
          </li>
          <li class="bf2">
            Ознакомьтесь с условиями договора на оказание услуг обмена, если вы принимаете их, поставьте галочку в соответствующем поле
            и нажмите кнопку «Создать заявку».
          </li>
          <li class="bf3">
            Оплатите заявку. Для этого следует совершить перевод необходимой суммы, следуя инструкциям на нашем сайте.
          </li>
          <li class="bf4">
            После выполнения указанных действий, система переместит Вас на страницу «Состояние заявки», где будет указан статус вашего
            перевода.
          </li>
        </ul>

        <p>
          Внимание: для выполнения данной операции потребуется участие оператора (см. статус оператора).
        </p>
      </div>

      <div class="cns-2 flr">
        <h2>{{$t('OperatorOnline')}}</h2>

        <div class="emz">
          <div class="rx-block">
            <div v-for="(contact, index) in contacts" :class="'flrx-' + contact.icon +' column-'+ contact.size" :key="index" v-if="contact.name != 'Address'">
              <p>{{$t(contact.name)}}</p>
						  <a :href="contact.link" v-if="contact.link != 'false'" target="_blank">{{contact.value}}</a>
						  <span v-else>{{contact.value}}</span>
            </div>
          </div>

          <div class="chat-area">
            <button class="fll">{{$t('StartChat')}}</button>
            <p>{{$t('ExchangeOnlyOnTheSite')}}</p>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
	created() {
		return this.$rest.api('getContacts').then((res) => {
			if (res.success) {
			return	this.contacts = res.data.contacts.sort((a, b) => {
					if (a.position_sort < b.position_sort)
						return -1
					if (a.position_sort > b.position_sort)
						return 1
					return 0
				})
			}
		})
	},
	data() {
		return {
			contacts: []
		}
	}
  }
</script>

<style lang="less">
[class^="flrx-"] {
	&:before {
    content: '';
    position: absolute;
    width: 35px;
    height: 35px;
    left: -2px;
    margin-top: 1px;
		background-position: center;
		background-size: cover;
	}
	a {
		display: block;
		clear: both;
  }
  span {
		display: block;
    clear: both;
  }
}

.flrx-email {
	&:before {
		background-image: url(~static/img/clv1.png);
	}
}

.flrx-telegram {
	&:before {
		background-image: url(~static/img/clv3.png);
	}
}

.flrx-phone {
	&:before {
		background-image: url(~static/img/clv2.png);
	}
}

.flrx-time {
	&:before {
		background-image: url(~static/img/clv4.png);
	}
}
</style>

