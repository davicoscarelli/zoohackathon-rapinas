<template>
  <q-page class="q-pa-md">
    <q-pull-to-refresh @refresh="refresh">
      <div v-for="report in reports" :key="report.id" >
      <q-card class="my-card q-my-md" >
        <q-img :src="report.url ? report.url : '/not-found.png'" />
        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
            @click="openLocation(report.latitude, report.longitude)"
          />
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ report.title }}
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <!-- <q-icon name="place" />
              250 ft -->
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">
            {{ report.description }}          
          </div>
        </q-card-section>
        <q-separator />
      </q-card>
      </div>
      </q-pull-to-refresh>
  </q-page>
</template>
<script>
const axios = require('axios');

import firebase from "../firebaseConfig";
const db = firebase.firestore();

import { openURL } from 'quasar'
export default {
  
  name: 'PageIndex',
  data: () => ({
    reports: []
  }),
  methods: {
    openLocation(lat, lon){
      openURL(`https://www.google.com/maps/place/${lat},${lon}`)
    },
    refresh (done) {
      setTimeout(() => {
        this.getData()
        done()
      }, 1000)
    },
    async getData() {
      
      const denunciations = db.collection('denunciations');

      denunciations.onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            switch (change.type) {
              // added
              case 'added':
                this.reports.push(change.doc.data())
                break;
            }
          });
        });
      
      
    }
  },
  mounted() {
    this.getData()
    
  }
}
</script>
