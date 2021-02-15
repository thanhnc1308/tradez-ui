<template>
  <div class="app-container">
    Settings
    <div>
      Show global settings button
      <base-switch
        v-model="userSettings.showGlobalSettingsButton"
        active-color="#13ce66"
        active-text="Show"
        @change="$store.dispatch('userSettings/showGlobalSettingsButton', $event)"
        inactive-text="Hide">
      </base-switch>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Settings',
  data() {
    return {
      settings: {}
    }
  },
  computed: {
    ...mapGetters([
      'userSettings'
    ])
  },
  created() {
    this.getUserSettings()
  },
  methods: {
    getUserSettings() {
      this.settings = {
      }
    }
  }
}
</script>
