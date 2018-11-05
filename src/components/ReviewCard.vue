<template>
<div>

    <b-card-group deck>
        <b-card header="Review date:  "
                header-tag="header"
                title="test" />
    </b-card-group>
</div>



</template>

<script>
export default {
  name: 'ReviewCard',

  data() {
    return {};
  },
  methods: {},
  props: ['review']
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