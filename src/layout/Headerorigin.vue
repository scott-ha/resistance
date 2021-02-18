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
