<template>
<div class="main-container bg-news">
  <div class="container">
    <div class="contacts-sl">
      <div class="news-area">
        <h1>{{$t('News')}}</h1>
        <!-- <TopMenu /> -->
        <div class="clearfix"></div>
        <div class="split-block-area">
          <NewsAside />
          <nuxt-child />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import NewsAside from '~/components/News/Aside'
import TopMenu from '~/components/News/TopMenu'

export default {
  head() {
    return {
      title: this.$t('News')
    }
  },
  components: {
    NewsAside,
    TopMenu
  }
}
</script>

<style lang="less">
.baron {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  min-width: 100px;
  width: 100%;
  height: 91%;
  margin: 0px;
  /* background: #fff; */
  box-shadow: none;
  text-align: left;
  white-space: normal;
}

.baron__scroller {
  overflow-y: scroll;
  -ms-overflow-style: none;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}

.main-container.bg-news {
  background: #FAFAFC url(~static/img/bgp.jpg) 0 0 no-repeat !important;
  background-size: 100% 563px !important;
  margin-bottom: -55px;
  z-index: 2;
  position: relative;
  padding-bottom: 60px;
}

.news-area h1 {
  text-align: left;
  float: left;
}

.nav-tabs {
  float: right;
  margin-top: 81px;
  margin-right: -15px;
}

.nav-tabs a {
  text-transform: uppercase;
  font-size: 13px;
  opacity: 0.55;
  color: #fff;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 9px;
  padding-bottom: 9px;
  border: 2px solid #334CA8;
  border-radius: 40px;
}

.nav-tabs a:hover {
  opacity: 1 !important;
}

.nav-tabs a.active {
  opacity: 1 !important;
  border: 2px solid #12dcf9;
  color: #fff !important;
  position: relative;
}

.nav-tabs a.active:before {
  content: '';
  border: 13px solid transparent;
  border-top: 9px solid #12dcf9;
  position: absolute;
  margin-top: 24px;
  left: 50%;
  margin-left: -12px;
}

.nav-tabs a.active:after {
  content: '';
  border: 10px solid transparent;
  border-top: 6px solid #334CA8;
  position: absolute;
  margin-top: 24px;
  left: 50%;
  margin-left: -9px;
}

.split-block-area {
  background: #f7f8f9;
}

.flx1 {
  width: 26%;
  padding: 0px;
  float: left;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+93,f7f7f7+98,ededed+100 */
  background: #ffffff;
  /* Old browsers */
  background: -moz-linear-gradient(left, #ffffff 0%, #ffffff 93%, #f7f7f7 98%, #ededed 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #ffffff 0%, #ffffff 93%, #f7f7f7 98%, #ededed 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #ffffff 0%, #ffffff 93%, #f7f7f7 98%, #ededed 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1);
  /* IE6-9 */
  height: 551px;
}

.flx2 {
  float: left;
  background: #fff;
  width: 74%;
  padding: 33px;
  height: 551px;
  padding-right: 29px;
  padding-top: 19px;
}

.split-block-area {
  overflow: hidden;
  background: #fff;
  margin-top: 28px;
}

.glv .container {
  max-width: 838px;
}

.flx2 h2 {
  color: #000 !important;
  font-size: 16px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 25px;
  line-height: 19px;
}

.flx2 p {
  font-size: 13px;
  margin-bottom: 25px;
  line-height: 1.54em;

  color: rgba(0, 0, 0, 0.65);
}

.bottom-blk {
  overflow: hidden;
  clear: both;
  margin-top: 15px;
}

.soc-blk {
  float: left;
}

.spa-date {
  float: right;
  font-style: italic;
  opacity: 0.65;
  margin-top: 2px;
  font-size: 13px;
}

.no-margin {
  margin-bottom: 0;
}

.news-block {
  padding: 18px;
  border-bottom: 1px dashed #c5c5c5;
}

.flx1 .container-v {
  padding-right: 0;
}

.news-block i {
  color: #d2d2d4;
  font-size: 27px;
  position: absolute;
  margin-top: 4px;
}

.news-block {
  position: relative;
}

.news-block p {
  padding-left: 36px;
  line-height: 19px;
  font-size: 13px;
  color: #0790bc;
}

.news-block span {
  padding-left: 37px;
  font-size: 13px;
  margin-top: -6px;
  display: block;
  color: #999eaf;
}

.news-block:hover i {
  color: #ffc900;
  transition: opacity .25s ease-in-out;
}

.flx1 .baron {
  height: 83.3%;
}

.flx1 .chat-area button {
  width: 63%;
  margin: 0 auto;
  position: relative;
  display: block;
  float: none;
}

@media screen and (max-width: 991px) {
  .flx1 {
    width: 33%;
  }
  .flx2 {
    width: 67%;
  }
  .nav-tabs a {
    text-transform: uppercase;
    font-size: 11px;
    opacity: 0.55;
    color: #fff;
    padding-left: 9px;
    padding-right: 11px;
    border: 2px solid #334CA8;
    border-radius: 40px;
    display: inline-block;
    margin-bottom: 9px;
  }
  .nav-tabs {
    float: right;
    margin-top: 26px;
    margin-right: -14px;
  }
}

@media screen and (max-width: 767px) {
  .flx1 {
    width: 100%;
    background: #fff !important;
  }
  .flx1 {
    height: 187px;
  }
  .flx2 {
    width: 100%;
    background: #ffffff;
    margin-top: 63px;
    height: auto;
    border-top: 1px dashed #C5C5C5;
  }
  .container-v {
    padding-right: 0;
  }
  .flx2 h2 {
    font-size: 14px;
    padding-top: 10px;
  }
  .flx1 .chat-area {
    margin: 29px auto;
  }
}

.flx1 {
  position: relative;
}

.flx1:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 19px;
  background: #ffffff;
  background: -moz-linear-gradient(left, #ffffff 0%, #ffffff 93%, #f7f7f7 98%, #ededed 100%);
  background: -webkit-linear-gradient(left, #ffffff 0%, #ffffff 93%, #f7f7f7 98%, #ededed 100%);
  background: linear-gradient(to right, #ffffff 0%, #ffffff 93%, #f7f7f7 98%, #ededed 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1);
  z-index: 1;
}

@media screen and (max-width: 767px) {
  .flx2 h2 {
    line-height: 17px;
  }
  .flx1:before {
    background: #fff !important;
  }
  .nav-tabs a {
    text-transform: uppercase;
    font-size: 10px;
    opacity: 0.55;
    color: #fff;
    padding-left: 7px;
    padding-right: 7px;
    border: 2px solid #334CA8;
    border-radius: 40px;
    display: inline-block;
    margin-bottom: 9px;
  }
  .nav-tabs {
    float: right;
    margin-top: 26px;
    margin-right: -10px;
  }
  .nav-tabs a.active:after {
    content: '';
    border: 10px solid transparent;
    border-top: 6px solid #334CA8;
    position: absolute;
    margin-top: 23px;
    left: 50%;
    margin-left: -9px;
  }
  .nav-tabs a.active:before {
    content: '';
    border: 13px solid transparent;
    border-top: 9px solid #12dcf9;
    position: absolute;
    margin-top: 23px;
    left: 50%;
    margin-left: -12px;
  }
}

@media screen and (min-width: 992px) {
  .nav-tabs a.active:before {
    content: '';
    border: 13px solid transparent;
    border-top: 9px solid #12dcf9;
    position: absolute;
    margin-top: 27px;
    left: 50%;
    margin-left: -12px;
  }
  .nav-tabs a.active:after {
    content: '';
    border: 10px solid transparent;
    border-top: 6px solid #334CA8;
    position: absolute;
    margin-top: 27px;
    left: 50%;
    margin-left: -9px;
  }
}

.news-area h1 {
  padding-right: 15px;
}

.flx2 .container-v {
  padding-right: 0;
}

@media screen and (max-width: 991px) {
  .main-container.bg-news {
    z-index: 1;
  }
}
</style>
