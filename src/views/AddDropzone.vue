<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <div>
      <b-form-input v-model="form.dzName"
        type="text"
        placeholder="Enter dropzone name"
        id="dzName"></b-form-input>
    </div>
    <div>
      <b-form-input v-model="form.dzCity"
        type="text"
        placeholder="Enter dropzone city"
        id="dzCity">
        </b-form-input>
    </div>
        <div>
      <b-form-input v-model="form.dzState"
        type="text"
        placeholder="Enter dropzone state"
        id="dzState">
        </b-form-input>
    </div>
    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="outline-primary">Reset</b-button>
      
    </b-form>
    <router-link to="/writereview">Back to write a review</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        dzName: null,
        dzCity: null,
        dzState: null
      },
      show: true
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      let form = JSON.stringify(this.form);
      console.log(form);
      // this.form.dropzone = null;
      // this.form.newInstructor = null;

      const url = 'http://localhost:5000/locations';
      console.log(url);

      var postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: form
      };

      fetch(url, postOptions)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.dropzone = null;
      this.form.newInstructor = null;

      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
#dzName {
  margin-bottom: 20px;
}
#dzCity {
  margin-bottom: 20px;
}
#dzState {
  margin-bottom: 20px;
}
</style>




