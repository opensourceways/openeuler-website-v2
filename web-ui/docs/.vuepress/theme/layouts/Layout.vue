<template>
  <div id="euler-app">
    <CustomHeader />
    <Content  class="content" :class="{ 'is-home': $route.path.length === 4 }"/>
    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from "@theme/components/CustomHeader.vue";
import CustomFooter from "@theme/components/CustomFooter.vue";

export default {
  name: "Layout",

  components: {
    CustomHeader,
    CustomFooter,
  },

  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    isPost() {
      let currentPath = this.$route.path;
      return currentPath.indexOf("/" + this.$lang + "/blog/") > -1
        ? true
        : false;
    }
  },
};
</script>
<style lang="less" scoped>
.content {
    min-height: calc(100vh - 178px);
    @media (max-width: 1000px) {
        min-height: calc(100vh - 70px - 328px);
    }
}
.is-home {
  background-color:#f5f6f8;
}

</style>
