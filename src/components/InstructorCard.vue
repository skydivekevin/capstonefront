<template>
  <li v-on:click='showInfoToggle'>
    <div class="profile-card">
      <header class="profile-header">
        
        <h3>{{author.firstName}} {{author.lastName}}</h3>
      </header>
      <section class="Bio-container">
        <h4 v-if='this.showInfo'>Bio</h4>
        <ul v-if='this.showInfo' class="skills-list">
          <!-- <li v-for='(bio, index) in author' v-bind:key='"bio" + index' :bio='bio' >{{author.bio}} </li> -->
          <li><img :src=author.portrait></li>
          <li>{{author.bio}} </li>
          
        </ul>
      </section>
  </div>
  </li>
</template>

<script>
export default {
  name: 'InstructorCard',

  data() {
    return {
      showInfo: false
    };
  },
  methods: {
    showInfoToggle() {
      this.showInfo = !this.showInfo;
    }
  },
  props: ['author']
};
</script>


<style>
ul {
  list-style: none;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  /* width: 100%; */
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>