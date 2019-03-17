<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/public/Header'
import Footer from './components/public/Footer'

export default {
  name: 'App',
  components: {Footer, Header}
}
</script>

<style>
  #app {
    display: grid;
    background: #f3f3f3;
    grid-template-columns: auto 1200px auto;
    grid-template-rows: 80px 1200px 40px;
    grid-template-areas: "header header header" ".      hero   ." "footer footer footer";

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2d4054;
    font-size: 14px;
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
</style>
