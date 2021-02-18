<template>
  <div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <!--=======  breadcrumb wrapper  =======-->
                    <div class="breadcrumb-wrapper">
                      <a class="login-logo" href="/">
                        <img src="assets/img/logo.png" class="img-fluid" alt="">
                      </a>
                        <!-- <h2 class="page-title">{{title}}</h2> -->
                        <!-- <ul class="breadcrumb-list">
                            <li><a href="/">Home</a></li>
                            <li class="active">My Account</li>
                        </ul> -->
                    </div>

                    <!--=======  End of breadcrumb wrapper  =======-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="css" scoped>
.login-logo {
  margin-top: 160px;
}
</style>
