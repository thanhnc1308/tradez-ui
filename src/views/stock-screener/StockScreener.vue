<template>
  <div>
    <el-collapse>
      <el-collapse-item title="Consistency" name="1">
        <el-tabs v-model="selectedTab" type="border-card">
          <el-tab-pane label="Commonly Used">
            Commonly Used
            <div class="commonly-used">
              <!-- <div v-for="filter in listSelectedFilter" :key="filter.id">
            filter
          </div> -->
              <div>Choose filter</div>
              <el-select v-model="selectedFilter" placeholder="Select">
                <el-option
                  v-for="item in listFilters"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-form
                :inline="true"
                class="demo-form-inline"
              >
                <el-form-item label="Approved by">
                  <el-input
                    placeholder="Approved by"
                  />
                </el-form-item>
                <el-form-item label="Activity zone">
                  <el-select
                    placeholder="Activity zone"
                  >
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">Query</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Increase/Decrease">
            Increase/Decrease
            <div class="overbold-oversold">
              <div>Indicator</div>
              <el-select v-model="selectedIndicator" placeholder="Select">
                <el-option
                  v-for="item in listIncreaseDecrease"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <div>Number of transaction</div>
              <base-input-number
                v-model="numberOfTransaction"
                :min="1"
                :max="100"
                controls-position="right"
              />
              <div>Rate</div>
              <base-input-number
                v-model="rate"
                :min="1"
                :max="100"
                controls-position="right"
              />
            </div>
          </el-tab-pane>
          <el-tab-pane label="Trend">Trend</el-tab-pane>
          <el-tab-pane label="Overbought/Oversold">
            Overbought/Oversold
            <div class="overbold-oversold">
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
              <base-input-number
                v-model="numberOfTransaction"
                :min="1"
                :max="100"
                controls-position="right"
              />
              <div>Overbought at</div>
              <base-input-number
                v-model="overbought"
                :min="1"
                :max="100"
                controls-position="right"
              />
              <div>Oversold at</div>
              <base-input-number
                v-model="oversold"
                :min="1"
                :max="100"
                controls-position="right"
              />
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-collapse-item>
    </el-collapse>
    <div class="view-button">
      <base-button
        type="primary"
        :loading="loading"
        @click="onClickBtnFilter"
      >View</base-button>
    </div>
    <div class="result">Result</div>
  </div>
</template>

<script>
// import StockScreener from '@/views/stock-screener/StockScreener.js'

export default {
  name: 'StockScreener',
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

    this.listIncreaseDecrease = [
      {
        value: 'increase',
        label: 'Increase'
      },
      {
        value: 'decrease',
        label: 'Decrease'
      }
    ]

    this.listFilters = [
      {
        type: 'overboughtsold',
        value: 'rsi',
        label: 'RSI'
      },
      {
        type: 'overboughtsold',
        value: 'mfi',
        label: 'MFI'
      }
    ]

    return {
      loading: false,
      selectedTab: '1',
      // overbought/oversold
      numberOfTransaction: 14,
      overbought: 70,
      oversold: 30,
      selectedIndicator: 'rsi',
      rate: 10,
      selectedFilter: null
    }
  },
  methods: {
    async onClickBtnFilter() {
      if (await this.validateFilter()) {
        this.loading = true
        this.filterAsset()
      }
    },
    async validateFilter() {},
    filterAsset() {
      // this.loading = false;
    }
  }
}
</script>
