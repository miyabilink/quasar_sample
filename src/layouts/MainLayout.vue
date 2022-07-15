<template>
  <q-layout view="hHh Lpr lFf" class="fontfamily">
    <q-header
      elevated
      class="bg-blue-grey-7"
    >
      <q-toolbar>
        <q-toolbar-title>
          <strong>APPNAME</strong>
        </q-toolbar-title>
        <q-btn
          dense
          no-caps
          flat
          to="/sample1"
        >sample</q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="150"
      :breakpoint="599"
      elevated
      class="drawer bg-blue-grey-6 text-white"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item to="/sample1">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>sample1</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/sample2">
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>
            <q-item-section>
              <q-item-label>sample2</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/sample3">
            <q-item-section avatar>
              <q-icon name="key" />
            </q-item-section>
            <q-item-section>
              <q-item-label>sample3</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view @showLogin="logindialog=true" />
    </q-page-container>
    <q-footer
      elevated
      v-if="$q.screen.lt.sm"
    >
      <q-tabs class="bg-blue-grey-6 shadow-2">
        <q-route-tab
          name="sample1"
          icon="home"
          label="sample1"
          to="/sample1"
        />
        <q-route-tab
          name="sample2"
          icon="home"
          label="sample2"
          to="/sample2"
        />
        <q-route-tab
          name="sample3"
          icon="home"
          label="sample3"
          to="/sample3"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

 <script>
export default {
  name: 'MainLayout',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.q-drawer--left .q-item.q-router-link--active {
  color: white;
  background-color: $blue-grey-9;
}
.q-drawer--left .q-item.q-router-link--active .q-icon {
  color: white;
}

.q-drawer--left .q-icon {
  color: $indigo-2;
}

footer.q-tab__label {
  font-size: x-small;
  color: white;
}

.q-drawer {
  color: white;
}

.fontfamily {
  font-family: Consolas, Osaka, "Yu Gothic", Yo Gothic, HiraKakuProN-W6, sans-serif;
}

.monobold {
  font-family: "Courier New", Consolas, monospace;
  font-weight: bold;
}
</style>
