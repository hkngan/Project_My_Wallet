<template>
     <div class="box-form">
        <header class="head-form">
          <h2>Wellcome to MyWallet</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/3360/3360459.png" alt="#">
        </header>
      </div>
      
</template>
<script>
export default {
  name: 'HomePage',
  methods:{
    signupwitch_func(){
    this.$router.push({name: "Signup"});
    },
    loginswitch_func(){
      this.$router.push({name: "login"});
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Abel|Abril+Fatface|Alegreya|Arima+Madurai|Dancing+Script|Dosis|Merriweather|Oleo+Script|Overlock|PT+Serif|Pacifico|Playball|Playfair+Display|Share|Unica+One|Vibur|Sofia');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body, html {
  background-color: rgb(254, 254, 254);
  opacity: 9.5;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

h2 {
  text-align: center;
  font-family: "Sofia", sans-serif;
  padding: 30px;
  font-size: 30px;
}

.box-form {
  width: 1250px;
  min-height: 350px;
  height: auto;
  border-radius: 10px;
  margin: 5% 15px 0 15px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  box-shadow: 0 9px 50px hsla(0, 1%, 51%, 0.31);
  float: right;
}
img{
  width: 250px;
  height: 250px;
  margin: auto 0 30px 41%
}


</style>