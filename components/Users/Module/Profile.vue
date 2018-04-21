<template>
<div class="white-block">
  <div class="table-accoutnt">
    <h2>{{$t('EditingProfile')}}</h2>

    <div class="tabs-blk-user">
      <div class="tabs2">
        <nav class="tabs__navigation2">
          <a class="tabs__link2 tabs__link--active2" href="#sas1">{{$t('Profile')}}</a>
          <a class="tabs__link2" href="#sa2">{{$t('Contacts')}}</a>
          <a class="tabs__link2" href="#sa3">{{$t('Alerts')}}</a>
        </nav>

        <div class="tabs__section2" id="sas1">


          <div class="row">
            <div class="acc-l fll">
              <h5>{{$t('MainData')}}</h5>
              <div class="acc-inner">
                <div class="border-form">

                  <div class="lg-form">
                    <label for="">{{$t('FirstName')}}</label>
                    <input type="text" placeholder="" value="Иванов" /></div>


                  <div class="lg-form">
                    <label for="">{{$t('Name')}}</label>
                    <input type="text" placeholder="" value="Иван" /></div>



                  <div class="lg-form">
                    <label for="">{{$t('Patronymic')}}</label>
                    <input type="text" placeholder="" value="Иванованович" />
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </div>



                  <div class="lg-form">
                    <label for="">{{$t('NewPassword')}}</label>
                    <input type="password" placeholder="">

                  </div>



                  <div class="lg-form">
                    <label for="">{{$t('RepeatPassword')}}</label>
                    <input type="password" placeholder="">

                  </div>


                </div>




              </div>
            </div>
            <div class="acc-r fll">
              <h5>{{$t('PassportData')}}</h5>
              <div class="border-form">

                <div class="lg-form">
                  <label for="">{{$t('Series&Number')}}</label>
                  <input type="text" placeholder="">

                </div>


                <div class="lg-form">
                  <label for="">{{$t('IssuedBy')}}</label>
                  <textarea name="" id="" cols="30" rows="10" placeholder=""></textarea>
                </div>


                <div class="lg-form">
                  <label for="">{{$t('DateIssued')}}</label>
                  <input type="text" placeholder="">

                </div>
              </div>



              <div class="lg-form">
                <button class="zap-btn">
                            <i class="fa fa-check" aria-hidden="true"></i>{{$t('Save')}}</button>
              </div>


            </div>
          </div>

          <div class="clearfix"></div>


        </div>


      </div>

    </div>
  </div>

</div>
</template>
