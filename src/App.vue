<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import { NConfigProvider } from 'naive-ui';
import { appTheme } from '@/theme';
</script>

<template>
  <n-config-provider :theme-overrides="appTheme">
    <AppHeader></AppHeader>
    <RouterView />
  </n-config-provider>
</template>

<script lang="ts"></script>
