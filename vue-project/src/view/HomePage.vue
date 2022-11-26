<template>
  <div class="dashboard">
      <SideBar/>
      <div class="content">
        <!-- <canvas id="myChart" width="400" height="200"></canvas> -->
          <router-view/>
      </div>
  </div>
</template>

<script>
// import Chart from 'chart.js/auto';
import SideBar from '../components/SideBar.vue'
export default {
  name: 'HomePage',
  components: {
      SideBar
  },
//   mounted(){
//     const ctx = document.getElementById('myChart');
//     const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['January', 'Ferbruary', 'March', 'April', 'May', 'June'],
//         datasets: [{
//             label: 'Expense Daily',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
// myChart;
//   }
}
</script>

<style>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: rgb(0, 0, 0);
  height: 100vh;
  width: 100vw;
}
.content {
  background-color: white;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
}
</style>