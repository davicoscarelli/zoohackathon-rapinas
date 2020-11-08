<template>
  <q-page>
    <div class="q-pb-xl">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
    </div>
    <div class="flex flex-center q-mt-xl">
      <q-icon name="qr_code_scanner"  size="50px"/>
    </div>
    <div class="col-12 flex flex-center q-my-md q-mb-xl">
      <span>Aproxime o QR Code para identificação</span>
    </div>
    <q-dialog
      v-model="document"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup >
            <q-tooltip content-class="bg-white text-primary">Fechar</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Documento de Identificação</div>
        </q-card-section>

        <!-- <q-card-section class="q-pt-none">
          {{token}}
        </q-card-section> -->
        <img :src="token" />
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
  name: 'Scan',
  data: () => ({
    token: '',
    document: false,
    maximizedToggle: true
  }),
  methods: {
    onDecode (decodedString) {
      this.token = decodedString
      this.document = true
    }
  },
  components: {
    QrcodeStream
    // QrcodeDropZone,
    // QrcodeCapture
  }
}
</script>
