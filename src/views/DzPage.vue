<template>
      <section id="profiles-container">
          <h1>Dropzone name here</h1>
          <ul id="profiles">
          <!-- <AuthorsCard v-for="(author, index) in authors" v-bind:key='"author" + index' :author='author'/>               -->
    </ul>
  </section>
</template>

<script>
import InstructorCard from '../components/InstructorCard';
export default {
  name: 'DzPage',
  components: {
    InstructorCard
  },
  data() {
    return {};
  }
  // mounted() {
  // let apiURL = 'https://galvaniizereads.herokuapp.com/authors';
  // let apiURL = '../static/authors.json';
  // fetch(apiURL)
  //   .then(response => response.json())
  //   .then(result => {
  //     this.authors = result;
  //   });
  // }
};
</script>

<style scoped>
</style>