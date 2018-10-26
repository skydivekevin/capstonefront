<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="InputGroup1"
                    label="Username:"
                    label-for="username"
                    description="Please enter your desired username">
        <b-form-input id="username"
                      type="text"
                      v-model="form.text"
                      required
                      placeholder="Enter username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="firstNameGroup"
                    label="First Name:"
                    label-for="firstName">
        <b-form-input id="firstName"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="First name">
        </b-form-input>
      </b-form-group>
            <b-form-group id="lastNameGroup"
                    label="Last Name:"
                    label-for="lastName">
        <b-form-input id="lastName"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Last name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="dropzoneGroup"
                    label="Dropzone:"
                    label-for="dropzone">
        <b-form-select id="dropzone"
                      :options="dropzones"
                      required
                      v-model="form.dropzone">
        </b-form-select>
      </b-form-group>

    <b-form-group >
      <b-form-radio-group v-model="selected"
                          :options="options"
                          name="radioInline">
      </b-form-radio-group>
    </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="outline-primary">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        dropzone: null
      },
      selected: 'student',
      options: [
        { text: 'Student', value: 'student' },
        { text: 'Instructor', value: 'instructor' }
      ],
      dropzones: [
        { text: 'Select One', value: null },
        'Mile-Hi',
        'Skydive Hawaii',
        'Skydive Cumberland',
        'Skydive Galveston'
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.dropzone = null;
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
</style>
