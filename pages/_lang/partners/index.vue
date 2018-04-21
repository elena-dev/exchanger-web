<template>
<div>
    <Partners/>
    <!-- <div class="glv"></div> -->
    <!-- <SlidePartners /> -->
</div>
</template>

<script>
import Partners from '../../../components/Partners'
// import SlidePartners from '../../../components/SlidePartners'

export default {
    head() {
        return {
            title: this.$t('Partners')
        }
    },
    components: {
        Partners,

    }
}
</script>

<style lang="less">
.main-container.bg-partners {
    background: #FAFAFC url(~static/img/bgp.jpg) 0 0 no-repeat !important;
    background-size: 100% 563px !important;
    margin-bottom: -55px;
    z-index: 2;
    position: relative;
    padding-bottom: 60px;
}

.trx-area {
    width: 33.3%;
    float: left;
    color: #fff;
    height: 510px;
    background: #2c439a;
    padding: 28px;
    position: relative;
    padding-top: 106px;
}

.trx-area img {
    display: block;
    margin: 0 auto;
}

.trio-bl {
    overflow: hidden;
    margin-top: 43px;
}

.tlk-area h4 {
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    line-height: 19px;
}

.tlk-area h5 {
    text-align: center;
    margin-top: -8px;
    color: #afc5e3;
    margin-bottom: 10px;
}

.tlk-area {
    height: 108px;
    padding-top: 14px;
}

.trio-bl p {
    font-size: 13px;
}

.more-info {
    position: absolute;
    bottom: 28px;
    width: 82%;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: none;
    height: 48px;
    text-transform: uppercase;
    font-size: 14px;
    border: 1px solid #272727;
    border-radius: 5px;
}

@media only screen and (max-width: 991px) {
    .trx-area {
        width: 100%;
        max-width: 313px;
        margin: 0 auto;
        display: block;
        float: none;
        margin-bottom: 20px;
    }
    .main-container.bg-partners {
        z-index: 1;
    }
}

.trx-area.tr1 {
    background: url(~static/img/v1.png) 0 0 no-repeat;
    background-position: center center;
}

.trx-area.tr2 {
    background: url(~static/img/v2.png) 0 0 no-repeat;
    background-position: center center;
}

.trx-area.tr3 {
    background: url(~static/img/v3.png) 0 0 no-repeat;
    background-position: center center;
}

.more-info:hover {
    opacity: 1 !important;
    border-color: #fff !important;
}

.trx-area.tr2 button {
    color: #333;
}

.trx-area.tr2 p,
.trx-area.tr2 h5,
.trx-area.tr2 h4 {
    color: #4a4040;
}

.trx-area.tr3 p,
.trx-area.tr3 h5 {
    color: #e2ddd0;
}
</style>
