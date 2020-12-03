<template>
  <i :class="'el-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'BaseIcon',

    props: {
      name: String
    }
  };
</script>
