<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="InputGroup1"
        label="Username:"
        label-for="username"
        description="Please enter your desired username">
        <b-form-input id="username"
          type="text"
          v-model="form.username"
          required
          placeholder="Enter username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="firstNameGroup"
        label="First Name:"
        label-for="firstName">
        <b-form-input id="firstName"
          type="text"
          v-model="form.firstname"
          required
          placeholder="First name">
        </b-form-input>
      </b-form-group>
        <b-form-group id="lastNameGroup"
          label="Last Name:"
          label-for="lastName">
          <b-form-input id="lastName"
            type="text"
            v-model="form.lastname"
            required
            placeholder="Last name">
          </b-form-input>
        </b-form-group>
      <b-form-group id="dropzoneGroup"
        label="Dropzone:"
        label-for="dropzone"
        v-if='form.usertype === "instructor"'>
        <b-form-select id="dropzone"
          :options="locations"
          required
          v-model="form.dropzone">
        </b-form-select>
      </b-form-group>
    <b-form-group >
      <b-form-radio-group v-model="form.usertype"
        :options="options"
        name="options">
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
      locations: [],
      form: {
        username: '',
        firstname: '',
        lastname: '',
        dropzone: null,
        usertype: 'student'
      },
      selected: 'student',
      options: [
        { text: 'Student', value: 'student' },
        { text: 'Instructor', value: 'instructor' }
      ],
      show: true
    };
  },
  mounted() {
    let apiURL = 'http://localhost:5000/locations';
    fetch(apiURL)
      .then(response => response.json())
      .then(result => {
        // console.log(result.result[0]['dzName']);
        let answer = result.result.map(value => value.dzName);
        this.locations = answer;
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();

      this.form.email = '';
      this.form.name = '';
      this.form.dropzone = null;
      this.form.usertype = 'student';
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
