<template>
<div>
  <Rules />
  <!-- <SlidePartners /> -->
</div>
</template>

<script>
import Rules from '../../../components/Rules'
// import SlidePartners from '../../../components/SlidePartners'

export default {
head () {
    return {
      title: this.$t('Rules')
    }
  },
  components: {
    Rules
  }
}
</script>

<style lang="less">
.proexchange_rules-block .tabs {
	height: 64px;
	position: relative; 
	overflow: hidden; 
	z-index: 0;
  top: 15px;
}
.proexchange_rules-block .tabs li {
	height: 64px; 
	display: inline-block; 
	position: absolute; 
	z-index: 0; 
	cursor: pointer;
	-webkit-box-shadow: 0px 0 3px -1px orange inset;
       -moz-box-shadow: 0px 0 3px -1px orange inset;
            box-shadow: 0px 0 3px -1px orange inset;
}
.proexchange_rules-block .tab {
	background-color: #585858;
	border-bottom: 1px solid #FFFF99;
	border-left: none;
	border-right: none;
}

.proexchange_rules-block .tabs{height:64px;position:relative;overflow:hidden;z-index:0;top: 0;}
.proexchange_rules-block .tabs li{height: 67px;display: table;padding:  0;position:absolute;z-index:0;cursor:pointer;-webkit-box-shadow:0px 0 3px -1px orange inset;-moz-box-shadow:0px 0 3px -1px orange inset;box-shadow: none;border-bottom: 9px solid #ececec;}



.proexchange_rules-block h1 {
    font-size: 24px;
    text-align: left;
    margin-bottom: 25px;
}


.tab-more {
    width: 34px !important;
    opacity: 0.2;
}

.tab-back{
	   width: 34px !important;
	      opacity: 0.2;
}

@media only screen and (max-width: 767px){
.small-block-grid-4>li {
    width: 33.3%;
}

.tab-more {
    width: 18px !important;
    opacity: 0.2;
}

.tab-back{
	   width: 18px !important;
	      opacity: 0.2;
}

.title h5 {
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 10px;
    margin: auto;
    font-weight: normal;
}
}

li.tab-more .title, 
li.tab-back .title {
    padding: 0;
}


.block-txt {
    margin-bottom: 29px;
}

.block-txt h3{
   color: #323232;
   text-transform: uppercase;
   font-size: 12px;
   font-weight: normal;
}




/* news */

.Wrapper{background-color:#FFFFFF;width:100%;display:flex;justify-content:center;align-content:center;flex-wrap:wrap;}
body .Content .PageCaption{display:flex;align-items:center;flex-direction:row;width:100%;margin: 20px 0 7px;font-weight:bold;font-size: 16px;}
body .Content .PageCaption h2{text-transform:uppercase;font-family:"Micra";margin:0 10px;font-size:14pt;font-weight:100;}
body .Content .PageCaption span{color:#9d9fa8;margin:0 5px;}
body .Content .PageCaption a{color: #8a8c94;font-size: 13px;}
body .Content .News{width: 100%;background-color:#ffffff;margin:0 auto;margin-top: 14px;}
body .Content .News h2{margin-left: 0px;}
body .Content .News .Colons{display:flex;flex-direction:row;justify-content:space-around;flex-wrap:wrap;margin:auto;}
body .Content .News .Colons div{width:30%;min-width:300px;margin:20px 0;padding-right: 10px;}
body .Content .News .Colons div a{color:#0790bc;text-transform:uppercase;font-size: 13px;margin:10px 0;}
body .Content .News .Colons div p{color:#9d9fa8;font-size: 12px;margin:10px 0;}
body .Content .News .Colons div span{color:#9d9fa8;font-size: 12px;}

.PageCaption * {
    font-weight: normal !important;
}

@media only screen and (max-width: 991px){
body .Content .News .Colons div {
    width: 100%;
    max-width: 100%;
}

body .Content .News *{
	text-align: left;
}
}

.Content{
	padding-bottom: 15px;
}


.gr-blk{
	padding-bottom: 38px;
	background: #F9F9FB;
}
@media only screen and (max-width: 767px){
.gr-blk {
    padding-bottom: 20px;
    background: #F9F9FB;
}
.proexchange_rules-block h1 {
    font-size: 19px;
    margin-top: 31px;
}

}

.slider-top h2 {
    padding-top: 9px;
}


.main-container {
    background: #F9F9FB url(~static/img/bg.png) 0 0 no-repeat;
    background-size: 100% 600px !important;
    background-position: center top;
    min-height: 595px;
}

.next-ex{
	position: relative;
}

.next-ex:after{
	position: absolute;
	content: '';
	width: 138px;
	height: 183px;
	background: url(~static/img/opar.png) 0 0 no-repeat;
	top:  20px;
	z-index: 1;
	right:  20px;
}

section.small-12.columns {
    z-index: 111;
    position: relative;
}

section.small-12.columns *{
	background: none !important;
}

li.tab.active {
    border-bottom: 9px solid #3651A9 !important;
}

body .Content .PageCaption a:hover{
	opacity: 0.8;
	transition:opacity .25s ease-in-out;
}

body .Content .News .Colons div a:hover{
	opacity: 0.8;
	transition:opacity .25s ease-in-out;
}
</style>
