<template>
  <p>请点击F12看log</p>
</template>
<script>
import { useLifecycles } from '../../../src'
export default {
  setup() {
    useLifecycles(
      () => console.log('mounted'),
      () => console.log('unmounted')
    )
  }
}
</script>
