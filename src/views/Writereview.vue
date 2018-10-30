<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="dropzoneGroup"
        label="Dropzone:"
        label-for="dropzone">
        <b-form-select id="dropzone"
          :options="dropzones"
          required
          v-model="form.dropzone">
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
        dropzone: null,
        instructor: null,
        review: null
      },
      dropzones: [
        { text: 'Select your dropzone', value: null },
        'Mile-Hi',
        'Skydive Hawaii',
        'Skydive Cumberland',
        'Skydive Galveston'
      ],
      instructors: [
        { text: 'Select your instructor', value: null },
        'Kevin Potts',
        'Jeff Stagg',
        'Brian Moler',
        'John Wheldon'
      ],
      review: '',
      show: true
    };
  },
  mounted() {
    const apiURL = 'http://localhost:5000/locations';
    fetch(apiURL)
      .then(response => response.json())
      .then(result => {
        this.locations = result;
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      this.form.dropzone = null;
      this.form.instructor = null;
      this.form.review = null;
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.dropzone = null;
      this.form.instructor = null;
      this.form.review = null;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>



