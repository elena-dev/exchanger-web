<template>
<div class="main-container bg-contacts">
	<div class="container contacts-content">
		<div class="contacts-sl">
			<div class="left-contacts">
				<h1>{{$t('Contacts')}}</h1>
				<div class="row">
					<div v-for="(contact, index) in contacts" :class="'els-' + contact.icon +' column-'+ contact.size" :key="index">
						<span>{{$t(contact.name)}}</span>
						<a :href="contact.link" target="_blank">{{contact.value}}</a>
					</div>
				</div>
				<div class="clearfix"></div>
				<p class="cnt-block">{{$t(infoText)}}</p>
				<div class="btn-area-cont">
					<button class="btn-cnt"><b>{{$t('StartChat')}}</b></button>
					<span><strong>{{$t('Attention')}}</strong>{{$t('ExchangeOnlyOnTheSite')}}</span>
				</div>
			</div>
			<div class="right-contacts">
				<div class="in-form">
					<form>
						<h4>{{$t('FeedBack')}}</h4>
						<div class="frms">
							<label>{{$t('PhoneNumber')}}</label>
							<input class="form-inp">
						</div>
						<div class="frms">
							<label>{{$t('Email')}}</label>
							<input class="form-inp">
						</div>
						<div class="frms">
							<label>{{$t('Message')}}</label>
							<textarea></textarea>
						</div>
						<div class="frms">
							<button><i class="fa fa-check" aria-hidden="true"></i>{{$t('Save')}}</button>
						</div>
					</form>
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
				this.contacts = res.data.contacts.sort((a, b) => {
					if (a.position_sort < b.position_sort)
						return -1
					if (a.position_sort > b.position_sort)
						return 1
					return 0
				})
				this.infoText = res.data.infoText
				return
			}
		})
	},
	data() {
		return {
			contacts: [],
			infoText: ''
		}
	}
}
</script>

<style lang="less">
@import "~assets/css/for.less";
.left-contacts {
	width: 60%;
	float: left;
}

.left-contacts h1 {
	text-align: left;
	margin-bottom: 19px;
}


/* Grid-System */

@grid-column: 12;
.column- {
	.for(@grid-column);
	.-each(@value) {
		@size: extract(@value, 1);
		&@{size} {
			width: percentage(@value / @grid-column)
		}
	}
}

[class^="els-"] {
	color: #a7b3db;
	float: left;
	font-size: 13px;
	padding: 16px;
	padding-left: 63px;
	&:before {
		content: '';
		position: absolute;
		width: 40px;
		height: 40px;
		margin-left: -50px;
		margin-top: -2px;
		background-position: center;
		background-size: cover;
	}
	a {
		display: block;
		clear: both;
		color: #fff;
	}
}

.els-email {
	&:before {
		background-image: url(~static/img/ac1.png);
	}
}

.els-telegram {
	&:before {
		background-image: url(~static/img/ac2.png);
	}
}

.els-phone {
	&:before {
		background-image: url(~static/img/ac3.png);
	}
}

.els-time {
	&:before {
		background-image: url(~static/img/ac4.png);
	}
}

.cnt-block {
	color: #a7b3db;
	font-size: 13px;
	margin-top: 22px;
	padding-right: 50px;
	padding-bottom: 14px;
}

.btn-area-cont {
	margin-top: 35px;
}

.btn-cnt {
	font-size: 15px;
	text-transform: uppercase;
	background: none;
	color: #fff;
	width: 200px;
	height: 48px;
	border-radius: 60px;
	border: 2px solid #12dcf9;
	float: left;
	padding-left: 30px;
}

.btn-area-cont span {
	color: #9ba8d6;
	display: block;
	float: left;
	margin-left: 25px;
	max-width: 150px;
	line-height: 15px;
	font-size: 13px;
	margin-top: 1px;
}

.btn-area-cont strong {
	font-weight: normal !important;
	text-transform: uppercase;
	clear: both;
	display: block;
	color: #ffc900;
}

.right-contacts {
	width: 40%;
	float: right;
}

.in-form {
	width: 310px;
	float: right;
	margin-top: 75px;
	background: #2c469f;
	padding: 22px;
	padding-top: 15px;
	border-radius: 8px;
	border-top: 0px solid #2ADAF6;
	background-image: -moz-linear-gradient(111deg, #3350B7 0%, #2C449C 100%);
	background-image: -o-linear-gradient(111deg, #3350B7 0%, #2C449C 100%);
	background-image: -webkit-linear-gradient(111deg, #3350B7 0%, #2C449C 100%);
	background-image: linear-gradient(339deg, #3350B7 0%, #2C449C 100%);
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	-moz-box-shadow: inset 0 5px 0 #12DCF9;
	-webkit-box-shadow: inset 0 5px 0 #12DCF9;
	box-shadow: inset 0 5px 0 #12DCF9;
}

.form-inp {
	width: 100%;
	height: 39px;
	border: 0;
	background: #314db1;
	border-radius: 5px;
	color: #fff;
	padding-left: 11px;
}

.in-form .frms {
	margin-bottom: 8px;
	margin-top: 16px;
}

.in-form textarea {
	background: #3350AE;
}

.frms button {
	width: 100%;
	height: 56px;
	background-image: -moz-linear-gradient(bottom, #14D9F8 0%, #3FB7E4 100%);
	background-image: -o-linear-gradient(bottom, #14D9F8 0%, #3FB7E4 100%);
	background-image: -webkit-linear-gradient(bottom, #14D9F8 0%, #3FB7E4 100%);
	background-image: linear-gradient(to top, #14D9F8 0%, #3FB7E4 100%);
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	border: 0;
	font-size: 14px;
	color: #fff;
}

.btn-area-cont strong:after {
	content: '';
	position: absolute;
	background: url(~static/img/sl4.png) 0 0 no-repeat;
	width: 40px;
	height: 40px;
	margin-left: 122px;
	margin-top: 4px;
}

.btn-cnt b:before {
	content: '';
	position: absolute;
	background: url(~static/img/ctx.png) 0 0 no-repeat;
	width: 40px;
	height: 40px;
	margin-left: -25px;
	margin-top: 1px;
}

.wc50 b {
	display: block;
	clear: both;
	color: #fff;
}

.wc50 a:hover {
	color: #FEC82E;
}

.in-form h4 {
	color: #fff;
	text-align: center;
	text-transform: uppercase;
	font-size: 16px;
	margin-bottom: 20px;
}

.in-form label {
	color: #fff;
	font-size: 10px;
	clear: both;
	display: block;
	text-transform: uppercase;
	margin-top: 4px;
}

.in-form textarea {
	padding-left: 10px;
	color: #fff;
	padding-top: 10px;
}

@media only screen and (max-width: 991px) {
	.in-form {
		width: 274px;
	}
}

@media only screen and (max-width: 767px) {
	.in-form {
		width: 100%;
	}
	.left-contacts,
	.right-contacts {
		width: 100% !important;
	}
	.btn-cnt {
		margin-bottom: 20px;
		margin-right: 15px;
	}
	.btn-area-cont span {
		margin-left: 0;
	}
	.in-form {
		margin-top: 20px;
	}
	.bg-contacts.main-container {
		padding-bottom: 45px;
		background: #3554B7 !important;
	}
	.cnt-block {
		padding-bottom: 2px;
	}
}

@media only screen and (max-width: 500px) {
	.wc50 {
		color: #a7b3db;
		width: 100%;
		float: left;
		font-size: 13px;
		padding: 16px;
		padding-left: 63px;
	}
}

@media only screen and (min-width: 768px) {
	.main-container.bg-contacts {
		background: url(~static/img/jlk.jpg) 0 0 no-repeat !important;
		background-position: center center !important;
		margin-top: 72px;
		min-height: 550px;
	}
}

@media only screen and (min-width: 1200px) {
	.main-container.bg-contacts {
		background: url(~static/img/jlk.jpg) 0 0 no-repeat !important;
		background-position: center center !important;
		margin-top: 89px;
		min-height: 550px;
	}
}
</style>
