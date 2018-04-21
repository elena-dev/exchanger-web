<template>
          <div class="slider-sl">
          <div>
            <div class="PageCaption">
              <h2>{{$t('ExchangeRateMain')}}</h2>

            </div>

          </div>

          <div class="table-area-slider">
            <table>
              <thead>
                <tr>
                  <td>31.01.2018</td>
                  <td class="th2">{{$t('Buy')}}</td>
                  <td class="th3">{{$t('Sell')}}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="ta1">
                      <img src="~static/img/f1.png" alt="">Украинская гривна</div>
                  </td>
                  <td>
                    <div class="ta2">
                      94.4
                      <i class="fa fa-level-up" aria-hidden="true"></i>
                    </div>
                  </td>
                  <td>
                    <div class="ta3">
                      98.6
                      <span>...</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="ta1">
                      <img src="~static/img/f2.png" alt="">Российский рубль</div>
                  </td>
                  <td>
                    <div class="ta2">
                      94.4
                      <i class="fa fa-level-up" aria-hidden="true"></i>
                    </div>
                  </td>
                  <td>
                    <div class="ta3">
                      98.6
                      <span>...</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="ta1">
                      <img src="~static/img/f3.png" alt="">Доллар США</div>
                  </td>
                  <td>
                    <div class="ta2">
                      94.4
                      <i class="fa fa-level-down" aria-hidden="true"></i>
                    </div>
                  </td>
                  <td>
                    <div class="ta3">
                      98.6
                      <span>...</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
</template>

<script>
export default {

}
</script>
