<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="reviewerGroup"
        label="Your name:"
        label-for="reviewerName">
      <b-form-input v-model="form.reviewerName"
        type="text"
        placeholder="What's your name?"
        id="reviewerName">
        </b-form-input>
         </b-form-group>
      <b-form-group id="dropzoneGroup"
        label="Dropzone:"
        label-for="dropzone">
        <b-form-select id="dropzone"
          :options="locations"
          required
          v-model="form.locationJumped"
          @input="instructorSelect">
        </b-form-select>
        <p>Can't find Dropzone? <router-link to="/adddropzone">Add a Dropzone</router-link></p>
      </b-form-group>
      <b-form-group id="instructorGroup"
        label="Instructor:"
        label-for="instructor">
        <b-form-select id="instructor"
          :options="instructors"
          required
          v-model="form.instructor"
          @input="splitInstructorName">
        </b-form-select>
      </b-form-group>
      <p>Can't find your instructor? <router-link to="/addinstructor">Add an instructor</router-link></p>
    <b-form-textarea id="review"
      v-model="form.review"
      placeholder="Write review here"
      :rows="3"
      :max-rows="6"
      >
    </b-form-textarea>
    <pre class="mt-3">{{ review }}</pre>
        <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="outline-primary">Reset</b-button>
    </b-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [],
      form: {
        locationJumped: null,
        instructor: null,
        review: null
      },
      instructors: [],
      review: '',
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
      let form = JSON.stringify(this.form);
      const url = 'http://localhost:5000/reviews';

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

      this.form.locationJumped = null;
      this.form.instructor = null;
      this.form.review = null;
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.locationJumped = null;
      this.form.instructor = null;
      this.form.review = null;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    instructorSelect() {
      let selectedDz = this.form.locationJumped;
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
    splitInstructorName() {
      let selectedInstructor = this.form.instructor;
      let separated = selectedInstructor.split(' ');
      let last = separated[1];
      let first = separated[0];
      this.form.instructorFirst = first;
      this.form.instructorLast = last;
    }
  }
};
</script>



