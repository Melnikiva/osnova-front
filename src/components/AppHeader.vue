<script setup lang='ts'>
import {ref, type Ref} from 'vue'
import {NLayoutHeader, NAvatar, NGrid, NGi, NH3, NText, NMenu} from 'naive-ui';
import {MenuOptions} from '@/options/menu'

const activeKey: Ref<string | null> = ref(null)
</script>

<template>
  <NLayoutHeader>
    <header class='container header'>
      <n-grid x-gap='12' :cols='12'>
        <n-gi :span='1'>
          <n-avatar @click='$router.push({name: "Home"})' class='header__logo' round :size='64'
            src='src/assets/img/osnova-logo.jpg' />
        </n-gi>
        <n-gi :span='9'>
          <n-menu v-model:value='activeKey' mode='horizontal' :options='MenuOptions' class='header__nav'
            :indent='12'></n-menu>
        </n-gi>
        <n-gi :span='2'>
          <div class='header__contact'>
            <n-h3 type='warning'>Зв'яжіться з нами</n-h3>
            <n-text>099 322 14 88</n-text>
          </div>
        </n-gi>
      </n-grid>
    </header>
  </NLayoutHeader>
</template>


<style lang='scss' scoped>
.header {
  padding: 0 10px;
  font-family: 'Ubuntu', sans-serif;
  color: lightcyan;

  &__logo {
    margin: 10px 0;
    cursor: pointer;
  }

  &__nav {
    align-items: center;
    height: 100%;
  }

  &__contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;

    h3 {
      margin-bottom: 8px;
      color: #fff;
    }

    span {
      color: #fff;
    }
  }
}
</style>