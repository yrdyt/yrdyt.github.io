<template>
  <div>
    <header class="app">
        <ul>
            <li>
                <img src="../../assets/images/close.png" alt="">
              
            </li>
            <li><img src="../../assets/images/logo.png" alt=""></li>
            <li>打开京东App，购物更轻松</li>
            <li>立即打开</li>
        </ul>
    </header>
    <div class="search-wrap">
        <div class="search-left"></div>
        <div class="search">
            <div class="jd-icon"></div>
            <div class="son"></div>
        </div>
        <div class="search-login">登录</div>
    </div>
    <div class="main-content">
        <div class="slider">
            <img src="../../assets/upload/banner.png" alt="">

        </div>
        <div class="brand">
            <div>
                <a href="javascript:;"><img src="../../assets/upload/pic11.png" alt=""></a>

            </div>
            <div>
                <a href="#"><img src="../../assets/upload/pic22.png" alt=""></a>
            </div>
            <div>
                <a href=""><img src="../../assets/upload/pic33.png" alt=""></a>
            </div>
        </div>
        <nav class="clearfix">
            <a href=""><img src="../../assets/upload/nav1.webp" alt="">
                <span>
                京东超市
            </span>
            </a>
            <a href=""><img src="../../assets/upload/nav1.webp" alt="">
                <span>
                京东超市
            </span>
            </a>
            <a href=""><img src="../../assets/upload/nav1.webp" alt="">
                <span>
                京东超市
            </span>
            </a>
            <a href=""><img src="../../assets/upload/nav1.webp" alt="">
                <span>
                京东超市
            </span>
            </a>
            <a href=""><img src="../../assets/upload/nav1.webp" alt="">
                <span>
                京东超市
            </span>
            </a>
            <a href=""><img src="../../assets/upload/nav1.webp" alt="">
                <span>
                京东超市
            </span>
            </a>
            <a href=""><img src="../../assets/upload/nav1.webp" alt="">
                <span>
                京东超市
            </span>
            </a>
            <a href=""><img src="../../assets/upload/nav1.webp" alt="">
                <span>
                京东超市
            </span>
            </a>
            <a href=""><img src="../../assets/upload/nav1.webp" alt="">
                <span>
                京东超市
            </span>
            </a>
            <a href=""><img src="../../assets/upload/nav1.webp" alt="">
                <span>
                京东超市
            </span>
            </a>

        </nav>
        <div class="news">
            <a href=""><img src="../../assets/upload/new1.png" alt=""></a>
            <a href=""><img src="../../assets/upload/new2.png" alt=""></a>
            <a href=""><img src="../../assets/upload/new3.png" alt=""></a>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name:'as'
}
</script>

<style scoped>


[hidden] {
  display: none;
}

body {
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    /* background: rgb(109, 109, 109); */
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    font-family: -apple-system, Helvetica, sans-serif;
}

img {
    vertical-align: middle;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.app {
    height: 45px;
}

.app li {
    height: 45px;
    line-height: 45px;
    float: left;
    background-color: #333333;
    text-align: center;
    color: #fff;
}

.app ul li:nth-child(1) {
    width: 8%;
}

.app ul li:nth-child(1) img {
    width: 10px;
    /* height: 10px; */
}

.app ul li:nth-child(2) {
    width: 10%;
}

.app ul li:nth-child(2) img {
    width: 30px;
    vertical-align: middle;
}

.app ul li:nth-child(3) {
    width: 57%;
}

.app ul li:nth-child(4) {
    width: 25%;
    background: #f63515;
}

.search-wrap {
    /* position: fixed; */
    position: sticky;
  top: 0;
  background-color: rgb(201,22,35);
    height: 44px;
    overflow: hidden;
    min-width: 320px;
    max-width: 640px;
    width: 100%;
}

.search-left {
    width: 40px;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    /* background-color: pink; */
}

.search-left::before {
    content: "";
    display: block;
    width: 20px;
    height: 18px;
    background: url(../../assets/images/s-btn.png) no-repeat;
    background-size: 20px 18px;
    margin: 14px 0 0 15px;
}

.search-login {
    width: 40px;
    height: 44px;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    line-height: 44px;
}

.search {
    height: 30px;
    margin: 0 50px;
    background-color: #fff;
    margin-top: 7px;
    border-radius: 15px;
    position: relative;
}

.jd-icon {
    width: 20px;
    height: 15px;
    background: url(../../assets/images/jd.png) no-repeat;
    position: absolute;
    top: 8px;
    left: 13px;
    background-size: 20px 15px;
}

.jd-icon::after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 15px;
    background-color: #ccc;
    top: 0;
    right: -8px;
}

.son {
    position: absolute;
    width: 18px;
    height: 15px;
    top: 8px;
    left: 50px;
    background: url(../../assets/images/jd-sprites.png) no-repeat -81px 0;
    background-size: 200px auto;
}

.slider img {
    width: 100%;
}

.brand {
    overflow: hidden;
    border-radius: 10px 10px 0 0;
}

.brand div {
    float: left;
    width: 33.33%;
}

.brand div img {
    width: 100%;
}

nav {
    padding-top: 5px;
}

nav a {
    width: 20%;
    float: left;
    text-align: center;
    color: #fff;
    text-decoration: none;
}

nav a img {
    width: 40px;
    margin: 10px 0;
}

nav a span {
    display: block;
}

.clearfix:after {
    content: "";
    display: block;
    line-height: 0;
    visibility: hidden;
    height: 0;
    clear: both;
}

.news {
    margin-top: 20px;
}

.news a {
    float: left;
    box-sizing: border-box;
}

.news a:nth-child(1) {
    width: 50%;
}

.news a:nth-child(n+2) {
    width: 25%;
    border-left: 1px solid #ccc;
}

.news img {
    width: 100%;
}
</style>