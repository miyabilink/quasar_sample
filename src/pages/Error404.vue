<template>
  <div
    class="fullscreen bg-blue-grey text-black text-center q-pa-md flex flex-center"
    style="font-family: Consolas, Osaka, serif"
  >
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div
        class="text-h5"
        style="opacity:.4"
      >
        ４０４エラーです
      </div>

      <q-btn
        class="q-mt-xl"
        color="black"
        text-color="white"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
