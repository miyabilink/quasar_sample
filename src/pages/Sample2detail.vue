<template>
  <div class="fixed-center convert q-pa-sm text-center fontfamily">
    <div>Sample2-detail page</div>
    <br>
    このページのURLの、router定義における:key部分の情報は... {{this.$route.params.key}}
    <br>
    <q-btn to="/sample2">戻る</q-btn>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'generator',
  data () {
    return {
      password: '',
      isPwd: true,
      
    }
  },
  methods: {
    click () {
      console.log("sample")
    },
    // QRコード書き出し機能
    writeQr (canvas, data) {
      QRCode.toCanvas(canvas, data, function (error) {
        if (error) console.error(error)
        // qrcode
      })
    }
  }
}
</script>
