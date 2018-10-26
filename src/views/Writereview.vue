<template>
  <div>
    <h1>Write a review</h1>
      <div>
        <b-form-textarea id="textarea1"
          v-model="text"
          placeholder="Enter something"
          :rows="3"
          :max-rows="6">
        </b-form-textarea>
      <pre class="mt-3">{{ text }}</pre>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    };
  }
};
</script>


<style>
</style>






