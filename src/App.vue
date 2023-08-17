<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <n-space>
          <n-button type="primary" @click="$router.push('/')">Home</n-button>
          <n-button type="warning" @click="$router.push('/about')">About</n-button>
        </n-space>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, NSpace } from 'naive-ui'

export default defineComponent({
    components: {
      NButton
    }
  })
</script>
