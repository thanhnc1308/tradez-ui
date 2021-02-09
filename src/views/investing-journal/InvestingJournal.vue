<template>
  <div>
    <div class="open-popup">
      <base-button type="primary" @click="openPopupAddJournal">Add Journal</base-button>
    </div>
    <div class="list-notification">Notification Table</div>
  </div>
</template>

<script>
/**
 * 1. Stock symbol
 * 2. Buy/Sell
 * 3. PnL
 * 4. Screenshot of transaction
 * 5. Comment
 */
export default {
  name: 'InvestingJournal',
  data() {
    return {
    }
  },
  methods: {
    openPopupAddJournal() {

    }
  }
}
</script>
