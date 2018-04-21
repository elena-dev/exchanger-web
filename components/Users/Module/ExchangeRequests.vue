<template>
<div class="white-block">
  <div class="table-accoutnt">
    <h2>МОИ ЗАЯВКИ НА ОБМЕН</h2>

    <div class="tabs-blk-user">

      <div class="tabs2">
        <nav class="tabs__navigation2">
          <a class="tabs__link2 tabs__link--active2" href="#sa1">Все</a>
          <a class="tabs__link2" href="#sa2">НОВЫЙ</a>
          <a class="tabs__link2" href="#sa3">Завершонные</a>
          <a class="tabs__link2" href="#sa4">Отмененные</a>
        </nav>

        <div class="tabs__section2" id="sa1">
          <div class="fll-select">
            <div class="jq-selectbox jqselect" style="z-index: 10;"><select>
                        <option>Валюта</option>
                        <option class="lang-en">Английский</option>
                        <option class="lang-es">Испанский</option>
                        <option class="lang-de">Немецкий</option>
                        <option class="lang-ru">Русский</option>
                        <option class="lang-fr">Французский</option>
                      </select>
              <div class="jq-selectbox__select">
                <div class="jq-selectbox__select-text">Валюта</div>
                <div class="jq-selectbox__trigger">
                  <div class="jq-selectbox__trigger-arrow"></div>
                </div>
              </div>

              <select>
                  <option>Пункт 1</option>
                  <option>Пункт 2</option>
              </select>

            </div>
          </div>
          <div class="flr-select">
            <div class="jq-selectbox jqselect" style="z-index: 9;"><select>
                        <option>Номер кошелька</option>
                        <option>32323233243434</option>
                        <option>14534563254566</option>
                        <option>32323233243434</option>
                        <option>14534563254566</option>
                      </select>
              <div class="jq-selectbox__select">
                <div class="jq-selectbox__select-text">Номер кошелька</div>
                <div class="jq-selectbox__trigger">
                  <div class="jq-selectbox__trigger-arrow"></div>
                </div>
              </div>
              <div class="jq-selectbox__dropdown" style="height: auto; bottom: auto; top: 41px; display: none;">
                <div class="jq-selectbox__search" style="display: none;"><input type="search" autocomplete="off" placeholder="Поиск..."></div>
                <div class="jq-selectbox__not-found" style="display: none;">Совпадений не найдено</div>
                <ul style="max-height: 348px;">
                  <li class="selected sel">Номер кошелька</li>
                  <li>32323233243434</li>
                  <li>14534563254566</li>
                  <li>32323233243434</li>
                  <li>14534563254566</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="clearfix"></div>

          <div class="table-flx">
            <table>
              <thead>
                <tr>
                  <td>
                    № <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                  </td>
                  <td>Статус</td>
                  <td>Операции</td>
                  <td>
                    Дата
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                  </td>
                  <td>Действия</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="fsl1">#510030</div>
                  </td>
                  <td>
                    <div class="fsl2">
                      <i class="fa fa-clock-o" aria-hidden="true"></i>
                    </div>
                  </td>
                  <td>
                    <div class="fsl3">
                      <p>
                        <img src="~/static/img/yandex.png">#15000 RUB</p>
                      <span>на</span>
                      <p>
                        <img src="~/static/img/yandex.png">14000 RUB</p>
                    </div>
                  </td>
                  <td>
                    <div class="fsl4">2 минуты назад</div>
                  </td>
                  <td>
                    <div class="fsl5">
                      <i class="fa fa-eye" aria-hidden="true"></i>
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="fsl1">#510030</div>
                  </td>
                  <td>
                    <div class="fsl2">
                      <i class="fa fa-check" aria-hidden="true"></i>

                    </div>
                  </td>
                  <td>
                    <div class="fsl3">
                      <p>
                        <img src="~/static/img/yandex.png">#15000 RUB</p>
                      <span>на</span>
                      <p>
                        <img src="~/static/img/yandex.png">14000 RUB</p>
                    </div>
                  </td>
                  <td>
                    <div class="fsl4">2 минуты назад</div>
                  </td>
                  <td>
                    <div class="fsl5">
                      <i class="fa fa-eye" aria-hidden="true"></i>
                      <i class="fa fa-trash yellow" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div class="fsl1">#510030</div>
                  </td>
                  <td>
                    <div class="fsl2">
                      <i class="fa fa-times-circle-o" aria-hidden="true"></i>

                    </div>
                  </td>
                  <td>
                    <div class="fsl3">
                      <p>
                        <img src="~/static/img/yandex.png">#15000 RUB</p>
                      <span>на</span>
                      <p>
                        <img src="~/static/img/yandex.png">14000 RUB</p>
                    </div>
                  </td>
                  <td>
                    <div class="fsl4">2 минуты назад</div>
                  </td>
                  <td>
                    <div class="fsl5">
                      <i class="fa fa-eye yellow" aria-hidden="true"></i>
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="pagination">
            <ul>
              <li class="arrow-l"></li>
              <li class="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li class="hidden-mobile">
                <a href="#">3</a>
              </li>
              <li class="hidden-mobile">
                <a href="#">4</a>
              </li>
              <li class="hidden-mobile">
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">...</a>
              </li>
              <li class="hidden-mobile">
                <a href="#">10</a>
              </li>
              <li>
                <a href="#">50</a>
              </li>
              <li class="arrow-r"></li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  </div>
</div>
</template>
