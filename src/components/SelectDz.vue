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
    </b-form>
  <div v-if='reviews.length > 0' v-for="(review, index) in reviews" v-bind:key='"review" + index' :review='review'>
        <b-card-group deck>
          <b-card header="Review"
                  header-tag="header">
                  <p class="card-text">Reviewed by {{review.reviewerName}}</p>
                 <p class="card-text">{{review.reviewerName}} jumped at {{review.locationJumped}} on {{review.date}}</p>
                 <p class="card-text">{{review.review}}</p>
          
        </b-card>
        </b-card-group>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      locations: [],
      instructors: [],
      reviews: [],
      dates: [],
      form: {
        // dropzone: null
      },
      props: ['reviews'],
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
      let apiURL = 'http://localhost:5000/instructors/' + selectedDz;
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
      fetch(apiURL)
        .then(response => response.json())
        .then(result => {
          console.log(result.result);
          this.reviews = result.result;
        });
    }
  }
};
</script>

<style scoped>
ul {
  margin: 20px;
  list-style-type: none;
}

li {
  list-style-type: none;
}
</style>
