<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="dropzoneGroup"
        label="Dropzone:"
        label-for="dropzone">
        <b-form-select id="dropzone"
          :options="locations"
          required
          v-model="form.currentDZ">
        </b-form-select>
      </b-form-group>
    <div>
      <b-form-input v-model="form.firstName"
        type="text"
        placeholder="Enter instructor's first name"
        id="firstname"></b-form-input>
    </div>
    <div>
      <b-form-input v-model="form.lastName"
        type="text"
        placeholder="Enter instructor's last name"
        id="lastname"></b-form-input>
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
      locations: [],
      form: {
        currentDZ: null,
        firstName: null,
        lastName: null
      },
      show: true
    };
  },
  mounted() {
    let apiURL = 'http://localhost:5000/locations';
    fetch(apiURL)
      .then(response => response.json())
      .then(result => {
        let answer = result.result.map(value => value.dzName);
        this.locations = answer;
      });
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.form.fullName = `${this.form.firstName} ${this.form.lastName}`;
      let form = JSON.stringify(this.form);
      this.form.dropzone = null;
      this.form.newInstructor = null;

      const url = 'http://localhost:5000/instructors';

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
      this.$router.push('Writereview');
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
#firstname {
  margin-bottom: 20px;
}
#lastname {
  margin-bottom: 20px;
}
</style>




