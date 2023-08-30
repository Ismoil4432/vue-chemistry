<template>
  <header>
    <el-menu
      :default-active="activeRoute"
      class="el-menu-demo center"
      mode="horizontal"
      :router="true"
    >
      <el-menu-item index="/">Home</el-menu-item>

      <el-menu-item index="/login">Login</el-menu-item>
    </el-menu>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const activeRoute = computed(() => useRoute().fullPath);
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>
