<template lang="html">
  <div>
    <LoginHeader title="로그인"></LoginHeader>

          <!--=======  my account wrapper  =======-->

          <!-- <div class="myaccount-wrapper"> -->
        <div class="container">
                <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 offset-lg-3">
                          <!-- Login Form -->
                    <form action="#">

                        <div class="login-form login-form--extra-space mt-5">
                            <div class="row">
                                <div class="col-md-6 col-6 mb-4">
                                  <label>이메일</label>
                                  <input type="email" placeholder="example@nineso.com">
                                </div>
                                <div class="col-md-6 col-6 mb-4">
                                  <label>이메일 선택</label>
                                  <input type="email" placeholder="example@nineso.com">
                                </div>
                                <div class="col-12 mb-4">
                                  <label>비밀번호</label>
                                  <input type="password" placeholder="8자 이상 입력해주세요.">
                                </div>
                                <div class="col-12 mb-4">
                                  <label>비밀번호 확인</label>
                                  <input type="password" placeholder="비밀번호 확인">
                                </div>
                                <div class="col-12 mb-4">
                                  <label>닉네임 (2-15자)</label>
                                  <input type="password" placeholder="중복되지 않는 닉네임을 설정해주세요.">
                                </div>
                                <div class="col-md-6 col-6 mb-4">
                                  <label>성별</label>
                                  <input type="email" placeholder="남자">
                                </div>
                                <div class="col-md-6 col-6 mb-4">
                                  <label>성별</label>
                                  <input type="email" placeholder="여자">
                                </div>
                                <div class="col-12 mb-4">
                                  <label>생년월일</label>
                                  <input type="password" placeholder="생년월일을 선택해주세요. (yyyy-mm-dd)">
                                </div>
                                <div class="col-12 mb-4">
                                  <label>약관동의</label>
                                  <input type="password" placeholder="약관동의 form">
                                </div>
                                <div class="col-md-12">
                                  <button class="theme-button theme-button--custom btn-nineso">이메일 로그인</button>
                                </div>
                                <div class="col-md-6 text-center mt-3">
                                  <a href="#/reg" class="forget-pass-link nineso-reg">나인소 가입하기</a>
                                </div>
                                <div class="col-md-6 text-center mt-3">
                                  <a href="#" class="forget-pass-link">비밀번호 재설정</a>
                                </div>
                              </div>
                        </div>

                          </form>
                      </div>
              </div>

          <!-- </div> -->

          <!--=======  End of my account wrapper  =======-->

    </div>
</template>

<script>
import LoginHeader from '../components/login/LoginHeader.vue';

export default {
  components: {
    'LoginHeader': LoginHeader
  },
  data() {
    return
  }
}

var userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
  windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
  iosPlatforms = ['iPhone', 'iPad', 'iPod'],
  os = null;

if (macosPlatforms.indexOf(platform) !== -1) {
  os = 'Mac OS';
} else if (iosPlatforms.indexOf(platform) !== -1) {
  os = 'iOS';
} else if (windowsPlatforms.indexOf(platform) !== -1) {
  os = 'Windows';
} else if (/Android/.test(userAgent)) {
  os = 'Android';
} else if (!os && /Linux/.test(platform)) {
  os = 'Linux';
}

// 웹 일때는 mac / windows 구분 x

console.log(os);
</script>

<style lang="css" scoped>

.nineso-reg {
  text-decoration: underline;
}

.bg-login {
  background-color: #fafafa;
}

.btn-nineso {
  background-color: #03c04a;
}
.btn-kakao {
  background-color: #ffe600;
  color: #473535;
}

.btn-naver {
  background-color: #1ec800;
}

.btn-google {
  background-color: #ffffff;
  color: #333333;
  border: solid 1px #d5d5d5;
}

.btn-facebook {
  background-color: #0d64d6;
}


</style>
