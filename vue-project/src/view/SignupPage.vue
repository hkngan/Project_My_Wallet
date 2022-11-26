<template>
    <div class="form">
        <header>Signup Here</header>
        <h4>Use your username and password</h4>
        <form >
            <div class="form-login">
                <div class="form-login-item">
                    <input class="form-input" v-model="fullname" type="text" placeholder="Fullname" required>
                </div>
                <br>
               
                <div class="form-login-item">
                    <input class="form-input" v-model="mobilephone" type="text" placeholder="Mobile phone" required>
                </div>
                <br>
                <div class="form-login-item">
                    <input class="form-input" v-model="email" type="email" placeholder="@email" required>
                </div>
                <br>
                <div class="form-login-item">
                    <input class="form-input" v-model="password" type="password" placeholder="Password" />
                </div>
                <div class="form-login-item">
                    <div class="error" v-html="error"/>
                    <br>
                    <button class="btn btn-light" type="reset">Cancle</button>
                    <button type="submit" class="btn btn-dark" @click.prevent="signup">Signup</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data() {
        return {
            fullname: '',
            email: '',
            mobilephone: '',
            password: '',
            error: null
        }
    },
    methods: {
        async signup() {
            try {
            const response = await AuthenticationService.signup({
                    fullname: this.fullname, 
                    email: this.email,
                    mobilephone: this.mobilephone,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                this.$router.push({name: "Login"})
            } catch (error) {
                this.error = error.response.data.error
            }

        }
    }
}
</script >
<style>
@import url('https://fonts.googleapis.com/css?family=Abel|Abril+Fatface|Alegreya|Arima+Madurai|Dancing+Script|Dosis|Merriweather|Oleo+Script|Overlock|PT+Serif|Pacifico|Playball|Playfair+Display|Share|Unica+One|Vibur|Sofia');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body,
html {
    background-color: rgb(254, 254, 254);
    opacity: 9.5;
    font-family: "Dosis", sans-serif;
    color: white;
}

header {
    font-size: 35px;
    padding: 5% 0 0 0;
    color: white;
}

h4 {
    padding: 0 0 3% 0;
    color: white;

}

header,
h4 {
    text-align: center;
    font-family: "Sofia", sans-serif;

}

.form{
    background-color: black;
    width: 450px;
    height: 520px;
    margin: 1% 0 0 395px;
    border-radius: 10px;
}

button {
    display: inline-block;
    cursor: pointer;
    border-radius: 5px;
    margin: 10px 50px 0 50px;
    transform: scale(1.2);
    transition: all 0.5s linear;
    font-family: 'Abel', sans-serif;
    
}

button:hover {
    transform: scale(1.30);
}

input:focus {
    transform: translateX(-2px);
    border-radius: 5px;
}

input[class="form-input"] {
    width: 250px;
    height: 50px;
    margin: 0 0 0 0;
    font-size: 16px;
    font-family: 'Abel', sans-serif;
    padding-left: 10px;
    color: #000000;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s linear;

}
.error{
    color: red;
    margin-left: 15px;
}
</style>
