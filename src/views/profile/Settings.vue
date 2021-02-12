<template>
  <div class="app-container">
    Settings
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
      'name'
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
