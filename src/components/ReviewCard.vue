<template>
<div>
  This is the review card
</div>
</template>

<script>
export default {
  name: 'ReviewCard',

  data() {
    return {};
  },
  methods: {}
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