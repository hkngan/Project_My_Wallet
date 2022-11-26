<template>
  <span>Recent Transaction</span>
  <div class="form">

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Expense Item</th>
          <th scope="col">Expense Cost</th>
          <th scope="col">Expense Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="report in reports" :key="report.id">
          <th scope="row">{{ report.id }}</th>
          <td>{{ report.ExpenseItem }}</td>
          <td> {{ report.ExpenseCost }}</td>
          <td>{{ report.ExpenseDate }}</td>
          <td>
            <button style="margin-right: 10px; border-radius: 5px" @click="onDelete(report)">Delete</button>
            <router-link :to="{name: 'add.edit', params: {id: report.id}}">
              <button style="border-radius: 5px">Edit</button></router-link>
          </td>
        </tr>
        <tr>
          <td colspan="4">Total</td>
          <td>{{ total }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
import ReportService from '@/services/ReportService'
export default {
  data() {
    return {
      reports: null,
      total: 0
    }
  },
  async mounted() {
    this.reports = (await ReportService.indexSingle(this.$store.state.user.id)).data
    for (var item of this.reports) {
      this.total += parseInt(item.ExpenseCost);
    }
  },
  methods: {
    async onDelete(del_report) {
      try {
        await ReportService.delete(del_report.id);
        this.reports = (await ReportService.indexSingle(this.$store.state.user.id)).data
        this.total =0;
        for (var item of this.reports) {
          this.total += parseInt(item.ExpenseCost);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getData(id){
     await this.get(`localhost:3000/report/${id}`).then(res => {
        this.$request.reports = res.data
    }) 
  }
  },
  computed: {
    toltalExpense() {
      let total = 0;
      for (let reports of (this.$store.state.user.id).data) {
        total += reports.ExpenseCost;
      }
      return total;
    }
  },
 

}
</script>
<style>
.form {
  width: 800px;
  height: auto;
  margin-left: 110px;
}

span {
  font-size: 50px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>