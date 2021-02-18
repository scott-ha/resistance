<template>
<div class="header-icon-area">
  <div class="account-dropdown">
    <a href="my-account.html">Login / Register <i class="pe-7s-angle-down"></i></a>

    <ul class="account-dropdown__list">
      <li><a href="my-account.html">My account</a></li>
      <li><a href="cart.html">Shopping cart</a></li>
      <li><a href="checkout.html">Checkout</a></li>
      <li><a href="order-tracking.html">Order Tracking</a></li>
    </ul>
  </div>

  <div class="header-icon d-flex align-items-center">
    <ul class="header-icon__list">
      <li><a href="javascript:void(0)" id="search-icon"><i class="fa fa-search"></i></a></li>
      <li>
        <a href="wishlist.html"><i class="fa fa-heart-o"></i><span class="item-count">1</span></a>
        <div class="minicart-wrapper">
          <p class="minicart-wrapper__title">WISHLIST</p>

          <div class="minicart-wrapper__items ps-scroll">
            <div class="minicart-wrapper__items__single">
              <a href="javascript:void(0)" class="close-icon"><i class="pe-7s-close"></i></a>
              <div class="image">
                <a href="product-details-basic.html">
                  <img src="assets/img/products/product-1-90x100.jpg" class="img-fluid" alt="">
                </a>
              </div>
              <div class="content">
                <p class="product-title"><a href="product-details-basic.html">Atelier Fuji NC Chair</a></p>
                <p class="product-calculation"><span class="price">$900</span></p>
                <a href="javascript:void(0)" class="wishlist-cart-icon"><i class="fa fa-shopping-basket"></i> ADD TO CART</a>
              </div>
            </div>
          </div>
          <div class="minicart-wrapper__buttons mb-0">
            <a href="wishlist.html" class="theme-button theme-button--minicart-button mb-0">VIEW WISHLIST</a>
          </div>
        </div>
      </li>
      <li>
        <a href="cart.html"><i class="fa fa-shopping-basket"></i><span class="item-count">3</span></a>
        <div class="minicart-wrapper">
          <p class="minicart-wrapper__title">CART</p>

          <div class="minicart-wrapper__items ps-scroll">
            <div class="minicart-wrapper__items__single">
              <a href="javascript:void(0)" class="close-icon"><i class="pe-7s-close"></i></a>
              <div class="image">
                <a href="product-details-basic.html">
                  <img src="assets/img/products/product-1-90x100.jpg" class="img-fluid" alt="">
                </a>
              </div>
              <div class="content">
                <p class="product-title"><a href="product-details-basic.html">Atelier Fuji NC Chair</a></p>
                <p class="product-calculation"><span class="count">1</span> x <span class="price">$900</span></p>
              </div>
            </div>
            <div class="minicart-wrapper__items__single">
              <a href="javascript:void(0)" class="close-icon"><i class="pe-7s-close"></i></a>
              <div class="image">
                <a href="product-details-basic.html">
                  <img src="assets/img/products/product-2-90x100.jpg" class="img-fluid" alt="">
                </a>
              </div>
              <div class="content">
                <p class="product-title"><a href="product-details-basic.html">Jane Lauren Rebel Sofa</a></p>
                <p class="product-calculation"><span class="count">1</span> x <span class="price">$900</span></p>
              </div>
            </div>
            <div class="minicart-wrapper__items__single">
              <a href="javascript:void(0)" class="close-icon"><i class="pe-7s-close"></i></a>
              <div class="image">
                <a href="product-details-basic.html">
                  <img src="assets/img/products/product-1-90x100.jpg" class="img-fluid" alt="">
                </a>
              </div>
              <div class="content">
                <p class="product-title"><a href="product-details-basic.html">Atelier Fuji NC Chair</a></p>
                <p class="product-calculation"><span class="count">1</span> x <span class="price">$900</span></p>
              </div>
            </div>
          </div>

          <p class="minicart-wrapper__subtotal">SUBTOTAL: <span>$1800</span></p>

          <div class="minicart-wrapper__buttons">
            <a href="cart.html" class="theme-button theme-button--minicart-button">VIEW CART</a>
            <a href="checkout.html" class="theme-button theme-button--alt theme-button--minicart-button theme-button--minicart-button--alt mb-0">CHECKOUT</a>
          </div>

          <p class="minicart-wrapper__featuretext">Free Shipping on All Orders Over $100!</p>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
</style>
