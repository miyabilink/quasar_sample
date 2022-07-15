<template>
  <div class="fixed-center convert q-pa-sm text-center fontfamily">
    <div>Sample2</div>

      <q-list bordered>
      <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple :to="{path: '/sample2/' + contact.email}">
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>
      </q-item>
    </q-list>
  
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'generator',
  data () {
    return {
      contacts: [{
        id: 1,
        name: 'Ruddy Jedrzej',
        email: 'rjedrzej0@discuz.net',
        letter: 'R'
      }, {
        id: 2,
        name: 'Mallorie Alessandrini',
        email: 'malessandrini1@marketwatch.com',
        letter: 'M'
      }]
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
