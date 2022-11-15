<template>
    <form>
        <div class="login_form">
            <h4>How was your day?</h4>
            <div class="field-set">
                <label >Item</label>
                <br>
                <input class="form-input" v-model="report.ExpenseItem" type="text" placeholder="Type here" required>
             <br>
             <label >Amount</label>
             <br>
             <input class="form-input" v-model="report.ExpenseCost" type="text" placeholder="0 vnd" required>
             <br>
             <label >Date</label>
             <br>
             <input class="form-input" v-model="report.ExpenseDate" type="date" required>
             <br>
             <br>
         <button class="add" @click.prevent="add()"> Add Expense </button>
          </div>
            </div>
        </form>
        
</template>
<script>
import ReportService from '@/services/ReportService'
export default{
    data() {
        return{
            report: {
            UserId: '',
            ExpenseItem: null,
            ExpenseCost: null,
            ExpenseDate: null,
            }
         

        }
    }, 
    methods: {
       async add(){
        try {
            await ReportService.post(this.report)
        }catch(err){
            console.log(err)
        }
        
        }
    },
   
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Abel|Abril+Fatface|Alegreya|Arima+Madurai|Dancing+Script|Dosis|Merriweather|Oleo+Script|Overlock|PT+Serif|Pacifico|Playball|Playfair+Display|Share|Unica+One|Vibur|Sofia');

h4 {
    text-align: center;
    font-family: "Sofia", sans-serif;
    color: white;
    padding: 50px 0 5% 0;
    font-size: 35px;
}
.login_form {
    background-color: black;
    width: 450px;
    height: 520px;
    margin: 1% 0 2px 395px;
    border-radius: 10px;
}

button.login_btn {
    display: inline-block;
    cursor: pointer;
    width: 100px;
    height: 45px;
    border-radius: 5px;
    transition: all 0.5s linear;
    margin: 20px 0 0 175px;
    font-family: 'Abel', sans-serif;
    font-size: 16px;
}

button.login_btn:hover {
    transform: scale(1.2);
}
input:focus {
    transform: translateX(-2px);
    border-radius: 5px;
}
label{
   margin: 10px 0 0 100px;
   color: white;
}
input.form-input{
width: 250px;
height: 50px;
margin-top: 2%;
padding: 15px;
margin-left: 100px;
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
    padding: 0 0 0 90px;
}
a:hover {
    color: rgba(230, 108, 108, 0.619);
}
button.add {
    display: inline-block;
    cursor: pointer;
    width: 100px;
    height: 45px;
    border-radius: 5px;
    transition: all 0.5s linear;
    margin: 0 0 0 175px;
    font-family: 'Abel', sans-serif;
    font-size: 16px;
}

button.add:hover {
    transform: scale(1.2);
}
</style>