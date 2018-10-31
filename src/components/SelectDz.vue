<template>
  <div>
    <b-form v-if="show">
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
          v-model="form.instructor"
          @input="showReviews">
        </b-form-select>
      </b-form-group>
    <b-form-group >
    </b-form-group>
      <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
    </b-form>
    <ReviewCard />
  </div>
</template>

<script>
import ReviewCard from './ReviewCard';
export default {
  components: {
    ReviewCard
  },
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
        let answer = result.result.map(value => value.dzName);
        this.locations = answer;
      });
  },
  methods: {
    instructorSelect() {
      let selectedDz = this.form.dropzone;
      // console.log(selectedDz);
      let apiURL = 'http://localhost:5000/instructors/' + selectedDz;
      // console.log(apiURL);
      fetch(apiURL)
        .then(response => response.json())
        .then(result => {
          let answer = result.result.map(
            value => `${value.firstName} ${value.lastName}`
          );
          this.instructors = answer;
        });
    },
    showReviews() {
      ////////////      FETCH ALL REVIEWS FOR SELECTED INSTRUCTOR    /////////
      let selectedInstructor = this.form.instructor;
      let separated = selectedInstructor.split(' ');
      let last = separated[1];
      let first = separated[0];

      let apiURL = 'http://localhost:5000/reviews/' + first + '/' + last;
      // console.log(apiURL);
      fetch(apiURL)
        .then(response => response.json())
        .then(result => {
          console.log(result);

          //push those into array just like instructors and shit
          // let answer = result[result];
          // console.log(answer);
          // let answer = result.map(value => value.review);
          // console.log(answer);
        });
    }
  }
};
</script>

<style scoped>
</style>