<template>
  <div class="fixed-center convert q-pa-sm text-center fontfamily">
    <div>Sample3</div>
    <form>
      <q-input
        filled
        label="pw"
        class="input"
        :type="isPwd ? 'password' : 'text'"
        :autofocus="true"
        autocomplete="off"
        v-model="password"
      > <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <br>
      <q-btn
        color="blue-grey-7"
        label="保存"
        id="convertBtn"
        @click.stop="click()"
      />
    </form>       
    <div class="q-pa-lg">
      <canvas id="qr"></canvas>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sample3',
  data () {
    // このページが最初に読み込まれたときに利用される、初期データ
    return {
      password: 'himitsu', // PW情報。v-model指定により、画面内のPW入力欄に紐付ける
      isPwd: true, // PW入力欄の伏せ文字状態をon/offするためのフラグ      
    }
  },
  methods: {
    click () {
      console.log("保存ボタンがおされました。現在のpassword値を、vuexにhogeとして保存します（setHogeAsyncアクション経由で、setHogeミューテーションを呼び出し、hogeステートに書き込み）")
      this.$store.dispatch({ type: 'addHogeAsync', hoge: this.password })
        .then(() => { // quasarのNofityプラグインを使って、ポップアップを実現(https://quasar.dev/quasar-plugins/notify)
          this.$q.notify({message:'vuexに保存しました。他page(sample1など)から読み取れます。', position: 'top', icon: 'done'})
        })
        .catch(() => {
          this.$q.notify({message:'設定できませんでした', position: 'top', type: 'negative', icon: 'warning'})
        })

    }
  }
}
</script>
