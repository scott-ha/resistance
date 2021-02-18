<template>
<div class="header-area header-area--default header-sticky">
  <div class="header-navigation-area d-none d-lg-block bg-color-nis">
    <div class="container wide">
      <div class="row">
        <div class="col-lg-12">
          <div class="header-info-wrapper header-info-wrapper--alt-style">

            <div class="header-logo">
              <a href="/">
                <img src="assets/img/logo.png" class="img-fluid" alt="">
              </a>
            </div>

            <!-- component HeaderList -->
            <HeaderList></HeaderList>
            <form class="form-inline">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-search" style="color:#e4a8b0"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="검색어를 입력해주세요" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </form>

            <!-- component HeaderIcon -->
            <HeaderIcon></HeaderIcon>

          </div>
        </div>
      </div>
    </div>
  </div>

  <!--=======  End of header navigation wrapper  =======-->

  <!-- component HeaderMobile -->
  <HeaderMobile></HeaderMobile>
</div>
</template>

<script>
import HeaderList from '../components/header/HeaderList.vue';
import HeaderIcon from '../components/header/HeaderIcon.vue';
import HeaderMobile from '../components/header/HeaderMobile.vue';

export default {
  components: {
    'HeaderList': HeaderList,
    'HeaderIcon': HeaderIcon
  },
  data() {
    return
  }
}
</script>

<style>
</style>
