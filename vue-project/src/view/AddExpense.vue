<template>
    <div class="form">
        <h4>How was your day?</h4>
            <label>Item</label>
            <br>
            <input class="form-input" v-model="report.ExpenseItem" type="text" placeholder="Type here" required>
            <br>
            <label>Amount</label>
            <br> 
            <input class="form-input" v-model="report.ExpenseCost" type="text" placeholder="0 vnd" required>
            <br>
            <label>Date</label>
            <br>
            <input class="form-input" v-model="report.ExpenseDate" type="date" required>
            <br>
            <br>
            <button class="add-btn" v-if="IsUpdate==true" @click.prevent="update()"> Update </button>
            <button class="add-btn" v-if="IsUpdate==false" @click.prevent="add()"> Add </button>
        </div>

            


</template>
<script>
import ReportService from '@/services/ReportService'
export default {
    name: 'AddExpense',
    data() {
        return {
            report: {
                id: 0,
                UserId: this.$store.state.user.id,
                ExpenseItem: null,
                ExpenseCost: null,
                ExpenseDate: null,
            },
            EditReport_id: -1,
            IsUpdate: false,
        }
    },
    methods: {
        async add() {
            try {
                await ReportService.post(this.report)
                this.$router.push({ name: "reports" })
            } catch (err) {
                console.log(err)
            }
        },
        async update() {
            try {
                var getdata = await ReportService.update(this.report)
                if(getdata.status == 200){
                   this.$router.push({ name: "reports" })
                }else{
                    alert("Update fail")
                }
                
            } catch (err) {
                console.log(err)
            }
        },
        async get(id) {
            try {
                var temp = await ReportService.getData(id)
                var temp2 = temp.data[0];
                if(temp2){
                   this.report.ExpenseCost = temp2.ExpenseCost;
                   this.report.ExpenseDate = temp2.ExpenseDate;
                   this.report.ExpenseItem = temp2.ExpenseItem;
                   this.report.id  = temp2.id;
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    created() {
        if(this.$route.params.id){
            this.EditReport_id = this.$route.params.id
            this.get(this.EditReport_id);
            this.IsUpdate = true;
        }
            
        this.report.UserId = this.$store.state.user.id
    }
}
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Abel|Abril+Fatface|Alegreya|Arima+Madurai|Dancing+Script|Dosis|Merriweather|Oleo+Script|Overlock|PT+Serif|Pacifico|Playball|Playfair+Display|Share|Unica+One|Vibur|Sofia');

h4 {
    text-align: center;
    font-family: "Sofia", sans-serif;
    color: rgb(0, 0, 0);
    padding: 50px 0 5% 0;
    font-size: 35px;
}

.form {
    margin: 6px 0px 6px 129px;
}

input:focus {
    transform: translateX(-2px);
    border-radius: 5px;
}

label {
    margin: 10px 200px 0 0px;
    color: rgb(0, 0, 0);
}

input.form-input {
    width: 250px;
    height: 50px;
    margin-top: 2%;
    padding: 15px;
    margin-left: 0px;
    font-size: 16px;
    font-family: 'Abel', sans-serif;
    color: #5E6472;
    border-radius: 5px;
    transition: 0.2s linear;
}

button{
    display: inline-block;
    cursor: pointer;
    width: 100px;
    height: 45px;
    border-radius: 5px;
    transition: all 0.5s linear;
    margin: 0 0 0 3px;
    font-family: 'Abel', sans-serif;
    font-size: 16px;
    border: none;
}

button:hover{
    transform: scale(1.2);
    background-color: rgb(121, 119, 119);
}

</style>