<template>
<div class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <nuxt-link class="navbar-brand" :to="langLink + 'exchange/'">
        <img src="~static/img/logo.png" height="66" width="90" alt=""></nuxt-link>
      <button type="button" class="navbar-toggle" @click="toggleMenu()">
          <span class="sr-only">{{$t('Open')}}</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
    </div>
    <div class="collapse navbar-collapse" id="responsive-menu" :class="{'opens': isMobile}">
      <ul class="nav navbar-nav">
        <li v-for="link in Menu" :key="link.id">
          <nuxt-link :to="langLink + link.url + '/'" :title="$t(link.key)">
            {{ $t(link.key) }}
          </nuxt-link>
        </li>
        <li>
          <span style="cursor: pointer;" @click="ChangeLang()">Lang</span>
        </li>
      </ul>

      <div class="user-blk no-autorization-style" v-if="!isAuth">
        <h3>
          <a class="modal__trigger" @click="ModalAuthorization()">{{$t('SignIn')}}</a>
          <span>{{$t('or')}}</span>
        </h3>
        <button class="modal__trigger" @click="ModalRegistration()">{{$t('SignUp')}}</button>
      </div>
      <div class="user-blk" v-if="isAuth">
        <img src="~static/img/ava.png" height="31" width="31" alt="">
        <h3>{{userData.last_name + ' ' + userData.first_name}}</h3>
        <a :href="'mailto:' + userData.email">{{userData.email}}</a>
      </div>
      <div class="login-block" v-if="isAuth">
        <a @click="UserPanel()">
            <img src="~static/img/cg.png" height="20" width="21" alt=""></a>
        <a @click="Exit()">
            <img src="~static/img/logout.png" height="22" width="19"></a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    ModalAuthorization() {
      return this.$store.dispatch('Modals/Authorization', true)
    },
    ModalRegistration() {
      return this.$store.dispatch('Modals/Registration', true);
    },
    toggleMenu() {
      if (this.isMobile)
        this.$store.dispatch('Menu/Mobile', false)
      else
        this.$store.dispatch('Menu/Mobile', true)
    },
    Exit() {},
    UserPanel() {
      return this.$router.push(this.langLink + 'user/')
    },
    ChangeLang() {
      let lang = this.$i18n.locale;
      let newlang = 'ru';
      if (this.$i18n.locale === 'ru')
        newlang = 'en';

      if (this.$route.fullPath.indexOf('/' + lang + '/') === 0) {
        this.$router.push(this.$route.fullPath.replace('/' + lang + '/', '/' + newlang + '/'))
      } else {
        this.$router.push(this.$route.fullPath.replace('/' + lang, '/' + newlang + '/'))
      }
    },
    async Exit() {
      await this.$rest.api('destroySession').then((res) => {
        if (res.success) {
          this.$store.dispatch('Menu/Auth', false)
          this.$store.dispatch('User/Set', [])
          return this.$router.push(this.langLink)
        }
      })
    }
  },
  computed: {
    langLink() {
      return '/' + this.$t('lang') + '/'
    },
    Menu() {
      return this.$store.state.Menu.Header
    },
    isMobile() {
      return this.$store.getters['Menu/Mobile']
    },
    isAuth() {
      return this.$store.getters['Menu/Auth']
    },
    userData() {
      return this.$store.getters['User/Get']
    },
  }
}
</script>
<style>
button.btn.btn-primary.dropdown-toggle {
  width: 39px !important;
  display: block;
  padding: 7px !important;
  min-width: 33px;
  margin-left: -18px;
  margin-top: -7px;
}

.dropdown.lang {
  position: absolute;
}

.dropdown.lang ul {
  width: 31px !important;
  min-width: auto;
  margin-left: -17px;
  margin-top: -1px;
  padding-top: 0;
  padding-bottom: 0;
}

.dropdown.lang ul li a {
  padding: 0px !important;
  padding-left: 6px !important;
  font-size: 14px;
}

.dropdown.lang ul li a:hover,
.dropdown.lang ul li {
  background: none !important;
}
</style>
