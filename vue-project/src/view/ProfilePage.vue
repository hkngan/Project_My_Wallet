<template>
    <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-md-9 col-lg-7 col-xl-5">
              <div class="card" style="border-radius: 15px;">
                <div class="card-body p-4">
                  <div class="d-flex text-black">
                    <div class="flex-shrink-0">
                      <img src="https://pbs.twimg.com/media/FOXLCuDVQAAaEW4.jpg"
                        alt="Generic placeholder image" class="img-fluid"
                        style="width: 180px; border-radius: 10px;">
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5 class="mb-1" style="text-align: left; "> {{ user.fullname }} </h5>
                      <p class="mb-2 pb-1" style="color: #2b2a2a; text-align: left;"> {{ user.email }} </p>
                      <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                        <div>
                          <p class="small text-muted mb-1">Phone Number</p>
                          <p class="mb-0">{{ user.mobilephone }}</p>
                          <br>
                          <!-- <button class="btn btn-dark" @click="change_button()">CHANGE</button> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
export default {
  computed: {
      user() {
            return this.$store.state.user;
        },
    },
  
}
</script>
<style>

</style>