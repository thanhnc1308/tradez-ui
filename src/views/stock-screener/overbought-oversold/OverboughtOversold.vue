<template>
  <div>
    <el-tabs v-model="selectedTab" type="border-card">
      <el-tab-pane label="IncreaseDecrease">Increase/Decrease</el-tab-pane>
      <el-tab-pane label="Trend">Trend</el-tab-pane>
      <el-tab-pane label="OverboughtOversold">
        Overbought/Oversold
        <div class="number-transaction">
          <div>Indicator</div>
          <el-select v-model="selectedIndicator" placeholder="Select">
            <el-option
              v-for="item in listIndicators"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <div>Number of transaction</div>
          <el-input-number v-model="numberOfTransaction" :min="1" :max="100" controls-position="right" />
          <div>Overbought at</div>
          <el-input-number v-model="overbought" :min="1" :max="100" controls-position="right" />
          <div>Oversold at</div>
          <el-input-number v-model="oversold" :min="1" :max="100" controls-position="right" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'AssetsFilter',
  data() {
    this.listIndicators = [
      {
        value: 'rsi',
        label: 'RSI'
      },
      {
        value: 'mfi',
        label: 'MFI'
      }
    ]

    return {
      selectedTab: '1',
      // overbought/oversold
      numberOfTransaction: 14,
      overbought: 70,
      oversold: 30,
      selectedIndicator: null
    }
  }
}
</script>
