<template>
  <div id="app">
    <Header></Header>
    <div class="center">
      <Aside></Aside>
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/public/Header'
import Footer from './components/public/Footer'
import Aside from './components/public/Aside'

export default {
  name: 'App',
  components: {Aside, Footer, Header}
}
</script>

<style>
  #app {
    display: grid;
    display: -ms-grid;
    background: #f3f3f3;
    grid-template-columns: 1fr 1200px 1fr;
    grid-template-rows: 80px auto 40px;
    grid-template-areas: "header header header"
    ".      hero   ."
    "footer footer footer";

    -ms-grid-columns: 1fr 1200px 1fr;
    -ms-grid-rows: 80px auto 40px;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2d4054;
    font-size: 14px;
  }

  .center{
    grid-area: hero;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: auto;
    grid-template-areas: "aside content"
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #F5F5F5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, .3);
    background-color: #555;
  }

  input {
    border: 1px solid #ccc;
  }

  input:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
  }

  .float {
    float: left;
    margin-right: 10px;
    cursor: pointer;
    font-size: 14px;
    padding: 8px;
  }

  .float:after {
    clear: both;
  }

  .blue-btn {
    background: #00b4cf;
    color: #fff;
  }

  .blue-btn:hover{
    background: #01869a;
  }
</style>
