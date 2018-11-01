<template>
  <div>
    <h1>{{firstName}} {{lastName}}</h1>
    <p>bio: {{bio}}</p>
    <p>user name: {{user}}</p>
    <h3>Reviews:</h3>
      <ul>
        <li v-if='reviews.length > 0' v-for="(review, index) in reviews" v-bind:key='"review" + index' :review='review'>{{review}}</li>  
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      bio: '',
      currentDZ: '',
      firstName: '',
      lastName: '',
      userType: '',
      reviews: [],
      userName: ''
    };
  },
  components: {},
  mounted() {
    let url = window.location.href;
    // console.log('url = ' + url);
    let regex = /[:]([a-z]+[0-9a-z]+)/gim;
    let parsed = url.match(regex);
    // console.log(parsed);
    let userName = parsed[0].replace(':', '');
    // console.log('userName = ' + userName);

    let apiURL = 'http://localhost:5000/users/' + userName;
    // console.log('apiURL= ' + apiURL);
    fetch(apiURL)
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        let answer = result.result;
        // console.log('answer = ' + answer);
        this.user = answer[0].userName;
        this.bio = answer[0].bio;
        this.firstName = answer[0].firstName;
        this.lastName = answer[0].lastName;
        let newURL =
          'http://localhost:5000/reviews/' +
          this.firstName +
          '/' +
          this.lastName;
        // console.log(newURL);
        fetch(newURL)
          .then(res => res.json())
          .then(results => {
            // console.log(results.result);
            let answer = results.result.map(value => value.review);
            this.reviews = answer;
            if (this.reviews.length < 1) {
              this.reviews[0] = 'No reviews posted for this instructor yet.';
            }
          });
      });
  }
};
</script>


<style>
</style>
