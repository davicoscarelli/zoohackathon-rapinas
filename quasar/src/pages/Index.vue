<template>
  <q-page class="q-pa-md">
      <div v-for="report in reports" :key="report.id" >
      <q-card class="my-card q-my-md" >
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ report.title }}
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place" />
              250 ft
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            $・Italian, Cafe
          </div>
          <div class="text-caption text-grey">
            {{ report.description }}          
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions class="flex-center">
          <q-btn color="primary">
            <q-icon left size="2em" name="add"/>
            <div class="q-pa-sm">Mais</div>
          </q-btn>
          
        </q-card-actions>
      </q-card>
      </div>
  </q-page>
</template>
<script>

export default {
  name: 'PageIndex',
  data: () => ({
    reports: [
      { id: 0, title: 'teste', description: 'bleble' },
      { id: 1, title: 'teste1', description: 'bleble' },
      { id: 2, title: 'teste2', description: 'bleble' }]
  }),
  methods: {},
  created() {

}
}
</script>
