<script setup lang='ts'>
import {ref, type Ref} from 'vue';
import {NLayoutHeader, NAvatar, NGrid, NGi, NH3, NP, NMenu} from 'naive-ui';
import {MenuOptions} from '@/options/menu';
import logoUrl from '@/assets/img/osnova-logo.jpg';

const activeKey: Ref<string | null> = ref(null)
</script>

<template>
  <NLayoutHeader>
    <header class='container header'>
      <n-grid x-gap='12' :cols='12'>
        <n-gi :span='1'>
          <n-avatar class='header__logo' id="logo" round :size='64' :src="logoUrl" />
        </n-gi>
        <n-gi :span='9'>
          <n-menu v-model:value='activeKey' mode='horizontal' :options='MenuOptions' :indent='12'></n-menu>
        </n-gi>
        <n-gi :span='2'>
          <div class='header__contact'>
            <n-h3>Зв'яжіться з нами</n-h3>
            <n-p>099 322 14 88</n-p>
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
  }

  &__nav {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
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
    }

    p {
      margin: 0;
    }
  }
}
</style>