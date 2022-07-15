<template>
  <div class="fixed-center convert q-pa-sm text-center fontfamily">
    <div>Sample1</div>
    <hr>
        sample3ページでvuexに保存されたデータは {{getSavedPassword()}}
  </div>
</template>

<script>
export default {
  name: 'sample1',
  data () {
    return {      
    }
  },
  methods: {
    getSavedPassword () {
      let h = this.$store.state.sample.hoge // vuexのsampleモジュールのストアからhoge属性情報を取り出し
      return h
    }
  }
}
</script>
