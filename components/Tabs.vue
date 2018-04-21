<template>
<no-ssr>
  <section class="v-tabs" ref="tabs">
    <ul class="v-tabs--tabs">
      <li class="v-tabs--tab" :class="{'active': index == d_active}" v-for="(item, index) in items" :key="index" style="left: -100%" @click="Change(index)">
        <div class="v-tabs--title-wrap">
          <div class="v-tabs--title">
            <h5>{{item.title}}</h5>
          </div>
        </div>
      </li>
    </ul>
    <transition :name="d_animation">
      <div class="v-tabs--content" v-if="d_active >= 0" v-html="items[d_active].text"></div>
    </transition>
  </section>
</no-ssr>
</template>



<script>
import VueTypes from "vue-types";

export default {
  props: {
    active: VueTypes.number,
    space: VueTypes.number,
    animation: VueTypes.string.def("tabs"),
    animationLeft: VueTypes.string,
    animationRight: VueTypes.string,
    items: VueTypes.array.isRequired
  },
  data() {
    return {
      d_active: 0,
      d_isWidthPercent: true,
      d_width: this.width,
      d_showCountTabs: 3,
      d_space: this.space,
      d_animation: this.animation,
      d_animationLeft: this.animationLeft,
      d_animationRight: this.animationRight
    };
  },
  mounted() {
    setTimeout(() => {
      this.Change(this.active)
      this.Slide();
    }, 100);

    if (process.browser) {
      window.addEventListener('resize', this.Slide)
    }
  },
  methods: {
    ShowCountTabs() {
      if (this.d_showCountTabs > 2) {
        this.d_isWidthPercent = true;
        this.d_width =
          (this.$refs.tabs.clientWidth / this.d_showCountTabs -
            this.d_space * 2 * this.d_showCountTabs) *
          100 /
          this.$refs.tabs.clientWidth;
      }
    },
    Change(value) {
      if (value != this.d_active) {
        this.d_active = value;
        this.ShowCountTabs();
        this.Slide();
      }
    },
    Slide() {
      this.ShowCountTabs();
      var width = "",
        temp = 0;

      if (this.d_showCountTabs > 2) {
        for (var index = 0; index < this.items.length; ++index) {
          if (index + 1 == this.d_active + (this.d_showCountTabs - 2) - 1) {
            for (var i = 0; i < index; ++i) {
              if (this.d_active == this.items.length - 1) {
                if (i != 0)
                  temp -= this.$refs.tabs.children[0].children[i - 1].clientWidth;
              } else
                temp -= this.$refs.tabs.children[0].children[i].clientWidth;
            }
          }
        }
      }

      width =
        "width:" + this.d_width + (this.d_isWidthPercent ? "%" : "px") + ";";
      var element = new Array();
      for (var index = 0; index < this.items.length; ++index) {
        element = this.$refs.tabs.children[0].children[index];
        if (index == 0) {
          element.attributes["style"].value = "left:" + temp + "px; " + width;
          temp += element.clientWidth;
        } else {
          var prev = this.$refs.tabs.children[0].children[index - 1];
          element.attributes["style"].value = "left:" + temp + "px; " + width;
          temp += element.clientWidth;
        }
      }

    }
  }
};
</script>

<style>
.v-tabs {
  width: 100%;
}

.v-tabs * {
  transition: all ease 0.5s;
}

.v-tabs .v-tabs--tabs {
  background-color: #ffffff;
  height: 64px;
  position: relative;
  overflow: hidden;
  margin: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.v-tabs .v-tabs--tab {
  border-bottom: 9px solid #ececec;
  background-color: #ffffff;
  border-left: none;
  border-right: none;
  height: 67px;
  display: table;
  padding: 0;
  position: absolute;
  cursor: pointer;
}

.v-tabs .v-tabs--tab.active {
  color: #344fac;
  background-color: #ffffff;
  border-bottom: 9px solid #344fac;
}

.v-tabs .v-tabs--title-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  display: table;
}

.v-tabs .v-tabs--title {
  padding-top: 0;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  padding-left: 24px;
  padding-right: 24px;
}

.v-tabs .v-tabs--title h5 {
  color: #000;
  text-transform: uppercase;
  font-size: 12px;
  margin: auto;
  font-weight: normal;
}

@media only screen and (max-width: 767px) {
  .v-tabs>li {
    width: 33.3%;
  }
  .v-tabs .v-tabs--title h5 {
    color: #000;
    text-transform: uppercase;
    font-size: 10px;
    margin: auto;
    font-weight: normal;
  }
}

.v-tabs--content {
  background-color: white;
}

.v-tabs .v-tabs--content h2 {
  padding-top: 9px;
  color: #000;
  text-align: center;
  margin-bottom: 27px;
  font-size: 16px;
  margin-bottom: 27px;
  font-family: "Micra";
}

.v-tabs .v-tabs--content p {
  margin-bottom: 29px;
  color: #6a6f76;
  font-size: 12px;
}

.v-tabs .v-tabs--content {
  padding: 15px;
}

.v-tabs .v-tabs--content h3 {
  color: #323232;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: normal;
}
</style>