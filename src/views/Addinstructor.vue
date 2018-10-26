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

        <div>
    <b-form-input v-model="form.newInstructor"
                  type="text"
                  placeholder="Enter instructor's name"></b-form-input>
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
        dropzone: null,
        newInstructor: null
      },
      dropzones: [
        { text: 'Select One', value: null },
        'Mile-Hi',
        'Skydive Hawaii',
        'Skydive Cumberland',
        'Skydive Galveston'
      ],
      newInstructor: '',
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      this.form.dropzone = null;
      this.form.newInstructor = null;
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



