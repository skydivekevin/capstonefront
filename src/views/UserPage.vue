<template>
  <div>
    <h1>User page for {{user}}</h1>




  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ''
    };
  },
  props: ['userName'],
  components: {},
  mounted() {
    let url = window.location.href;
    // console.log(userName);
    let regex = /[:]([a-z]+)/gim;
    let parsed = url.match(regex);
    let userName = parsed[0].replace(':', '');

    let apiURL = 'http://localhost:5000/users/' + userName;
    console.log(apiURL);
    fetch(apiURL)
      .then(response => response.json())
      .then(result => {
        let answer = result.result;
        console.log(answer);
        this.user = answer[0].firstName;
      });
  }
};
</script>


<style>
</style>
