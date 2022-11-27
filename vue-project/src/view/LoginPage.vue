<template>
    <form >
    <div class="login_form">
        <header>Login Here</header>
        <h4>Use your username and password. If you don't have a account yet? 
            <router-link to="signup">Register</router-link>
        </h4>
        <div class="field-set">
            <input class="form-input" v-model="email" type="text" placeholder="@example.com" required>
         <br>
         <input class="form-input" v-model="password" type="password" placeholder="Password" required>
         <br>
         <button class="btn btn-dark" @click.prevent="login"> Log In </button>
      </div>
      <br>
      <div class="error" v-html="error"/>
        <br>

        </div>
    </form>
    
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async login() {
            try {
            const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                this.$router.push({name:"profile"})

            } catch (error) {
                this.error = error.response.data.error
            }

        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Abel|Abril+Fatface|Alegreya|Arima+Madurai|Dancing+Script|Dosis|Merriweather|Oleo+Script|Overlock|PT+Serif|Pacifico|Playball|Playfair+Display|Share|Unica+One|Vibur|Sofia');

header {
    font-size: 35px;
    padding: 15% 0 0 0;
}
h4 {
    padding: 0 0 5% 0;
}
header,
h4 {
    text-align: center;
    font-family: "Abel", sans-serif;
    color: white;
}
.login_form {
    background-color: black;
    width: 450px;
    height: 520px;
    margin: 1% 0 2px 395px;
    border-radius: 10px;
}

button {
    display: inline-block;
    cursor: pointer;
    width: 100px;
    height: 45px;
    border-radius: 5px;
    transition: all 0.5s linear;
    margin: 20px 0 0 0;
    font-family: 'Abel', sans-serif;
    font-size: 16px;
}

button:hover {
    transform: scale(1.2);
}
input:focus {
    transform: translateX(-2px);
    border-radius: 5px;
}

input[class="form-input"]{
width: 250px;
height: 50px;
margin-top: 2%;
padding: 10px;
font-size: 16px;
font-family: 'Abel', sans-serif;
color: #5E6472;
outline: none;
border: none;
border-radius: 5px;
transition: 0.2s linear;
}
.login_form .other a {
    color: white;
    padding: 0 50px 0 50px;
}
a{
    color: white;
}
a:hover {
    color: rgba(230, 108, 108, 0.619);
}
.error{
    color: red;
    margin-left: 15px;
}
</style>
