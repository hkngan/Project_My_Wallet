<template>
    <div class="form">
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Expense Item</th>
                <th scope="col">Expense Cost</th>
                <th scope="col">Expense Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="report in reports" :key="report.id">
                <th scope="row">{{report.id}}</th>
                <td>{{report.ExpenseItem}}</td>
                <td> {{report.ExpenseCost}}</td>
                <td>{{report.ExpenseDate}}</td>
              </tr>
             
            </tbody>
          </table>
    </div>
    
</template>
<script>
import ReportService from '@/services/ReportService'
export default {
   data(){
    return{
      reports: null
    }
   },
   async mounted(){
    this.reports = (await ReportService.index()).data
   }
}
</script>
<style>
.form {
    width: 800px;
    height: auto;
    margin-left: 240px;
}
</style>