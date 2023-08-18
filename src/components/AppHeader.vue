<script setup lang="ts">
import { ref } from 'vue';
import { NLayoutHeader, NAvatar, NButton, NSpace } from 'naive-ui';

let testSwitch = ref<boolean>();
</script>

<template>
    <n-layout-header class="header padding-small">
        <n-space align="center">
            <!-- TODO: change logo to vector image -->
            <n-avatar round :size="64" src="src/assets/img/osnova-logo.jpg" />
            <n-button type="primary" @click="testSwitch = !testSwitch">Switch</n-button>
        </n-space>
    </n-layout-header>
</template>

<style>
.header {
    color: white;
}

n-avatar {
    padding: 0;
}

.padding-small {
    padding: 4px;
}
</style>