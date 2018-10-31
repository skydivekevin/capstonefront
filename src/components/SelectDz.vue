<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="dropzoneGroup"
        label="Dropzone:"
        label-for="dropzone">
        <b-form-select id="dropzone"
          :options="locations"
          required
          v-model="form.dropzone"
          @input="instructorSelect">
        </b-form-select>
      </b-form-group>
      <b-form-group id="instructorGroup"
        label="Instructor:"
        label-for="instructor">
        <b-form-select id="instructor"
          :options="instructors"
          required
          v-model="form.instructor">
        </b-form-select>
      </b-form-group>
    <b-form-group >
    </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [],
      instructors: [],
      form: {
        // dropzone: null
      },
      show: true
    };
  },
  mounted() {
    let apiURL = 'http://localhost:5000/locations';
    fetch(apiURL)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        let answer = result.result.map(value => value.dzName);
        console.log(answer);
        this.locations = answer;
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      // this.form.dropzone = null;
      /////////   PULL INFO FROM SUBMIT AND DO QUERY TO SHOW ALL REVIEWS FOR SELECTED DZ (locationJumped in reviews collection)     ///////////
    },
    instructorSelect() {
      let selectedDz = this.form.dropzone;
      console.log(selectedDz);
      let apiURL = 'http://localhost:5000/instructors/' + selectedDz;
      console.log(apiURL);
      fetch(apiURL)
        .then(response => response.json())
        .then(result => {
          let answer = result.result.map(
            value => `${value.firstName} ${value.lastName}`
          );
          this.instructors = answer;
        });
    }
  }
};
</script>

<style scoped>
</style>