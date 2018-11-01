<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="InputGroup1"
        label="Username:"
        label-for="username"
        description="Please enter your desired username">
        <b-form-input id="username"
          type="text"
          v-model="form.userName"
          required
          placeholder="Enter username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="InputGroup2"
        label="Password:"
        label-for="password"
        description="Please enter your desired password">
        <b-form-input id="password"
          type="text"
          v-model="form.password"
          required
          placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <b-form-group id="firstNameGroup"
        label="First Name:"
        label-for="firstName">
        <b-form-input id="firstName"
          type="text"
          v-model="form.firstName"
          required
          placeholder="First name">
        </b-form-input>
      </b-form-group>
        <b-form-group id="lastNameGroup"
          label="Last Name:"
          label-for="lastName">
          <b-form-input id="lastName"
            type="text"
            v-model="form.lastName"
            required
            placeholder="Last name">
          </b-form-input>
        </b-form-group>
      <b-form-group id="dropzoneGroup"
        label="Dropzone:"
        label-for="dropzone"
        v-if='form.userType === "instructor"'>
        <b-form-select id="dropzone"
          :options="locations"
          required
          v-model="form.currentDZ">
        </b-form-select>
        <p>Can't find Dropzone? <router-link to="/AddDropzone">Add a Dropzone</router-link></p>
      </b-form-group>
    <b-form-group >
      <b-form-radio-group v-model="form.userType"
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
import AddDropzone from './AddDropzone';

export default {
  components: {
    AddDropzone
  },
  data() {
    return {
      locations: [],
      form: {
        userName: '',
        firstName: '',
        lastName: '',
        currentDZ: null,
        userType: 'student',
        password: '',
        bio: '',
        photo: ''
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
        let answer = result.result.map(value => value.dzName);
        this.locations = answer;
      });
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // console.log(JSON.stringify(this.form));

      let form = JSON.stringify(this.form);
      // console.log(form);
      let username = this.form.userName;
      // console.log(username);
      const url = 'http://localhost:5000/users/' + username;
      // console.log('URL: ' + url);

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
      alert(
        `User ${this.form.userName} has been added! Redirecting to login page.`
      );
      this.$router.push('Login');

      // this.form.locationJumped = null;
      // this.form.instructor = null;
      // this.form.review = null;
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
