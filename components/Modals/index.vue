<template>
<transition name="modal">
  <div class="modal modal--align-top modal__bg w360px" v-if="isModal">
    <div class="modal__dialog">
      <div class="modal__content modal__content--active">
        <h2 v-if="isAuthorization">{{$t('Authorization')}}</h2>
        <h2 v-if="isRegistration">{{$t('Registration')}}</h2>
        <div class="login-content">

          <div class="tabs">
            <nav class="tabs__navigation">
              <a class="tabs__link" :class="{'tabs__link--active': isAuthorization }" @click="Change('Registration')">{{$t('Authorization')}}</a>
              <a class="tabs__link" :class="{'tabs__link--active': isRegistration }" @click="Change('Authorization')">{{$t('Registration')}}</a>
            </nav>

            <div class="tabs__section" v-if="isAuthorization">
              <form @submit.prevent="Authorization">
                <div class="form-login">
                  <div class="lg-form">
                    <label for="">{{$t('Email')}}</label>
                    <input name="email" type="email" v-model="email" required>
                  </div>
                  <div class="lg-form">
                    <label for="">{{$t('Password')}}</label>
                    <input name="password" type="password" v-model="password" required>
                    <a class="conf-password">{{$t('ForgotPassword')}}</a>
                  </div>
                  <div class="lg-form">
                    <button class="login-btn">
                        <span>{{$t('SignIn')}}</span>
                      </button>
                  </div>

                </div>

              </form>
            </div>

            <div class="tabs__section" v-else-if="isRegistration">
              <form @submit.prevent="Registraion">
                <div class="form-login">

                  <div class="lg-form">
                    <label for="">{{$t('Name')}}</label>
                    <input name="name" type="text" v-model="name" required>
                  </div>

                  <div class="lg-form">
                    <label for="">{{$t('Surname')}}</label>
                    <input name="surname" type="text" v-model="surname" required>
                  </div>

                  <div class="lg-form">
                    <label for="">{{$t('Email')}}</label>
                    <input name="email" type="email" v-model="email" required>
                  </div>

                  <div class="lg-form">
                    <label for="">{{$t('Password')}}</label>
                    <input name="password" type="password" v-model="password" required>
                  </div>

                  <div class="lg-form" :class="isPasswordAgain">
                    <label for="">{{$t('Again')}}</label>
                    <input name="again" type="password" v-model="again" required autocomplete>
                  </div>

                  <div class="checkbox">
                    <label @click="agree = !agree">
                        <div class="jq-checkbox" :class="{'checked': agree}">
                          <input id="agree" type="checkbox" @click="agree = !agree" v-model="agree" required autocomplete />
                          <div class="jq-checkbox__div"></div>
                        </div>
                        {{$t('IAgree')}}&nbsp;
                      </label>
                    <label>
                        <a :href="'/' + $t('lang') + '/rules/'" target="_blank">{{$t('WithConditions')}}</a>
                      </label>
                  </div>
                  <div class="lg-form ">
                    <button class="reg-btn">
                        <span>{{$t('SignUp')}}</span>
                      </button>
                  </div>

                </div>

              </form>
            </div>

            <div class="social-enter">
              <p>{{$t("SocialRegistration")}}</p>
              <ul>
                <li>
                  <a class="soc1" href="#">
                      <i class="fa fa-google" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                  <a class="soc2" href="#">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                  <a class="soc3" href="#">
                      <i class="fa fa-vk" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                  <a class="soc4" href="#">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                  <a class="soc5" href="#">
                      <i class="fa fa-odnoklassniki" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                  <a class="soc6" href="#">
                      <i class="fa fa-maxcdn" aria-hidden="true"></i>
                    </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        <a class="modal__close demo-close" @click="Close()" :title="$t('Close')">
            <svg class="" viewBox="0 0 24 24">
              <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/>
              <path d="M0 0h24v24h-24z" fill="none" />
            </svg>
          </a>

      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  notifications: {
    showError: {
      title: 'Error',
      type: 'error',
      timeout: 5000
    }
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      surname: "",
      again: "",
      agree: true
    };
  },
  methods: {
    Close() {
      if (this.$store.getters['Modals/DontClose']) {
        this.$store.dispatch('Modals/DontClose', false)
        this.$router.push('/')
      }
      this.$store.dispatch("Modals/Authorization", false);
      this.$store.dispatch("Modals/Registration", false);
    },
    Change(value) {
      if (value === "Authorization") {
        this.$store.dispatch("Modals/Authorization", false);
        this.$store.dispatch("Modals/Registration", true);
      } else if (value === "Registration") {
        this.$store.dispatch("Modals/Authorization", true);
        this.$store.dispatch("Modals/Registration", false);
      }
    },
    async Authorization() {
      await this.$rest.api('loginUseEmail', {
        email: this.email,
        password: this.password
      }).then((res) => {
        if (res.success) {
          this.Close()
          this.$store.dispatch('User/Set', res.data)
          return this.$store.dispatch('Menu/Auth', true)
        } else {
          this.showError({
            title: 'Failed',
            message: res.error.message
          })
        }
      })
    },
    async Registraion() {
      await this.$rest.api('registerUseEmail', {
        email: this.email,
        password: this.password,
        first_name: this.name,
        last_name: this.surname
      }).then((res) => {
        if (res.success) {
          this.again = ""
          this.name = ""
          this.surname = ""
          this.Change('Registration')
        } else {
          this.showError({
            title: 'Failed',
            message: res.error.message
          })
        }
      })
    }
  },
  computed: {
    isModal() {
      return this.$store.getters["Modals/Show"];
    },
    isAuthorization() {
      return this.$store.getters["Modals/Authorization"];
    },
    isRegistration() {
      return this.$store.getters["Modals/Registration"];
    },
    isPasswordAgain() {
      if (this.password === this.again && this.password.length > 0) {
        return 'suss-form-green';
      } else return 'error-form-red';
    }
  }
};
</script>
