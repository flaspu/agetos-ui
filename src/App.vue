<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider :placement="'bottom'">
      <router-view></router-view>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import 'boxicons';
import { NThemeEditor, GlobalThemeOverrides, NConfigProvider, NMessageProvider } from 'naive-ui'

export default {
  components: {
    NThemeEditor,
    NConfigProvider,
    NMessageProvider,
  },
  data () {
    return {
      themeOverrides: {
        Tooltip: {
          color: "rgba(38, 40, 50, 1)"
        }
      } as GlobalThemeOverrides
    }
  }
}
</script>