<template>
  <div class="dashboard-container">
    <div class="dashboard-editor-container">
      <panel-group />
      <el-row :gutter="40" class="panel-group">
        <el-col :xs="24" :sm="24" :lg="12" class="card-panel-col">
          <div class="card-title">Top gainers</div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12" class="card-panel-col">
          <div class="card-title">Top losers</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import PanelGroup from "./components/PanelGroup";

export default {
  name: "Dashboard",
  components: {
    PanelGroup
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>