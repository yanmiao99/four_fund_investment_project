<script setup>
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
</script>

<template>
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
</template>

<style scoped lang="less">
@import '@arco-design/web-vue/es/style/index.less';
</style>
