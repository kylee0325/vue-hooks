<template>
  <p>x: {{ x }}</p>
  <p>y: {{ y }}</p>
  <p>滚动下方粉色块观测x和y变化</p>
  <div ref="target" style="border: 1px solid #ccc; width: 200px; height: 200px; overflow: auto">
    <div style="width: 300px; height: 300px; background: pink"></div>
  </div>
</template>

<script>
import { useScrollRef } from '../../../src'
export default {
  setup() {
    const [target, x, y] = useScrollRef()
    return {
      x,
      y,
      target
    }
  }
}
</script>
