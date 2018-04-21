<template>
<div class="full-obmn-blk">
  <div class="close-sl" @click="close">
    <i class="fa fa-times" aria-hidden="true"></i>
  </div>
  <div class="left-side-b">
    <img src="~/static/img/qiwi.png" alt=""></div>
  <div class="right-side-b">
    <div class="sel1 fll">
      <label>ВАЛЮТА</label>
      <no-ssr>
        <v-select :options="Сurrency">
          <span slot="no-options">{{$t('SearchFailed')}}</span>
        </v-select>
      </no-ssr>
    </div>

    <div class="sel2 fll">
      <label>КОШЕЛЕК</label>
      <no-ssr>
        <v-select :options="Purse">
          <span slot="no-options">{{$t('SearchFailed')}}</span>
        </v-select>
      </no-ssr>
    </div>

    <div class="cleafix"></div>

    <button @click="save">
<span>
<i class="fa fa-check" aria-hidden="true"></i>
Сохарнить
</span>
</button>

  </div>
</div>
</template>
<script>
export default {
  props: {
    Сurrency: {
      type: Array,
      required: true
    },
    Purse: {
      type: Array,
      required: true
    },
    close: {
      type: Function,
      required: true
    },
    save: {
      type: Function,
      required: true
    }
  }
}
</script>
