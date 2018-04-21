<template>
<div class="white-block">
  <div class="table-accoutnt">
    <h2>Партнерская программа</h2>
    <div class="row">
      <ul class="ls-area">
        <li>
          <div class="ul-ls1">
            <p>Доступно для вывода:</p>
            <h3>402.85 $</h3>
            <button class="vds1 button-open">
                        <span>
                          <i class="fa fa-minus-circle" aria-hidden="true"></i>
                          Вывести
                        </span>
                      </button>
            <a href="">
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        Автовывод
                      </a>
          </div>
        </li>
        <li>
          <div class="ul-ls2">
            <p>Моя ставка:</p>
            <h3>
              10%
              <span>
                          от 
прибыли
                        </span>
            </h3>
            <button class="vds1 button-open">
                        <span>
                          <i class="fa fa-line-chart" aria-hidden="true"></i>
                          Увеличить
                        </span>
                      </button>
            <a href="">
                        <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        Подробнее
                      </a>
          </div>
        </li>
        <li>
          <div class="ul-ls3">
            <p>Выплачено:</p>
            <h3>1400.75 $</h3>
            <div class="rw-table">
              <div class="srg-area">
                <p class="fll">Операция:</p>
                <p class="flr">2487</p>
              </div>
              <div class="srg-area">
                <p class="fll">Переходов:</p>
                <p class="flr">31872</p>
              </div>
              <div class="srg-area">
                <p class="fll">Рефералов:</p>
                <p class="flr">175</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="referal-area-top">
    <h4>РЕфЕральная ссылка и виджет:</h4>
    <p>
      Вы можете участвовать в нашей партнерской программе. Используйте личную ссылку или размещайте баннеры для привлечения клиентов на наш сайт. Более подробно о программе можно прочитать здесь.
    </p>
  </div>
  <div class="referal-area-bottom">
    <div class="row">
      <div class="fll">
        <h4>Ваша партнерская ссылка:</h4>
        <div class="partner-blk">
          https://exchanger.pro/?r=11600
          <div class="copy-blk">
            <i class="fa fa-files-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="fll">
        <h4>Онлайн курс валют xml:</h4>
        <div class="partner-blk">
          https://exchanger.pro/?r=11600_OnlineCurse.xml
          <div class="copy-blk">
            <i class="fa fa-files-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="hrx"></div>

    <div class="statistic">
      <h2>Статистика</h2>
      <div class="fll">
        <no-ssr>
          <highcharts :options="options">
          </highcharts>
        </no-ssr>

      </div>


      <div class="flr">
        <p class="px">Полученно</p>
        <h3>402.85 $</h3>
        <div class="date">

          <p>
            с
            <input type="text" id="datepicker" value="01/08/2017" class="hasDatepicker"></p>
          <span>по</span>
          <p>
            <input type="text" value="01/08/2018" id="datepicker2" class="hasDatepicker"></p>

        </div>
        <div class="usrk">
          <div class="plsl"> <strong><img src="~/static/img/pvt.png"></strong> <b>Privat 24</b>
            <span>17.11.2017</span>
          </div>
          <div class="prsl">12$</div>
        </div>

        <div class="usrk">
          <div class="plsl"> <strong><img src="~/static/img/yandex.png"></strong> <b>Yandex</b>
            <span>17.11.2017</span>
          </div>
          <div class="prsl">12$</div>
        </div>

        <div class="usrk">
          <div class="plsl">
            <strong>
                        <img src="~/static/img/pvt.png"></strong>
            <b>Privat 24</b>
            <span>17.11.2017</span>
          </div>
          <div class="prsl">12$</div>
        </div>

        <a class="history" href="#">
                    <i class="fa fa-history" aria-hidden="true"></i>
                    История опираций
                  </a>

      </div>
    </div>
    <div class="clearfix"></div>

    <div class="referal-area-top">
      <h4>Информация о паретнерке 2</h4>
      <p>
        Вы можете участвовать в нашей партнерской программе. Используйте личную ссылку или размещайте баннеры для привлечения клиентов на наш сайт. Более подробно о программе можно прочитать здесь.
      </p>
    </div>

  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        exportButtonTitle: "Экспорт",
        printButtonTitle: "Печать",
        rangeSelectorFrom: "С",
        rangeSelectorTo: "По",
        rangeSelectorZoom: "Период",
        downloadPNG: 'Скачать PNG',
        downloadJPEG: 'Скачать JPEG',
        downloadPDF: 'Скачать PDF',
        downloadSVG: 'Скачать SVG',
        printChart: 'Напечатать график',
        credits: {
          enabled: false // Скрывает ссылку "highcharts.com"
        },
        exporting: {
          enabled: true
        },
        title: {
          text: 'Тест',
          x: -20 //center
        },
        subtitle: {
          text: 'Source: WorldClimate.com',
          x: -20
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ]
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        tooltip: {
          valueSuffix: '°C'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        series: [{
          name: 'London',
          data: [2, 3, 1, 4]
        }]
      }
    }
  }
}
</script>
