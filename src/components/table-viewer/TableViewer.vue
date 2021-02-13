<template>
  <div class="table-viewer">
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @sort-change="sortChange"
    >
      <el-table-column
        v-for="column in columns"
        :label="column.label"
        :key="column.dataField"
        :prop="column.dataField"
        :sortable="column.sortable"
        :align="column.columnAlign"
        :width="column.width"
        :min-width="column.minWidth"
        :class-name="column.className"
      >
        <template slot-scope="{ row }">
          <span
            v-if="column.columnType === EnumColumnType.Link"
            class="link-type"
            @click="onClickTableRow(row, column)"
            >{{ row[column.dataField] | formatData(column.formatType) }}</span
          >
          <span v-else-if="column.columnType === EnumColumnType.DateTime">{{
            row[column.dataField] | formatData(column.formatType)
          }}</span>
          <base-tag
            v-else-if="column.columnType === EnumColumnType.Tag"
            :type="column.tagTypeFilter(row)"
          >
            {{ row[column.dataField] | formatData(column.formatType) }}
          </base-tag>
          <base-image
            v-else-if="column.columnType === EnumColumnType.Image"
            class="c-pointer image-in-row"
            :src="row[column.dataField]"
            @click="viewImage(row[column.dataField])"
            fit="contain"
          >
          </base-image>
          <span v-else>{{
            row[column.dataField] | formatData(column.formatType)
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        align="center"
        width="120"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row, $index }">
          <el-dropdown split-button type="primary" @click="handleUpdate(row)">
            Edit
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-if="row.status != 'deleted'">
                <span @click="handleDelete(row, $index)"> Delete </span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="pagination && total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="doQuery"
    />
  </div>
</template>

<script>
import waves from "@/directive/waves";
import Pagination from "@/components/Pagination";
import TableStore from "@/common/TableStore";
import { EnumColumnType, EnumFormatType } from "@/common/enum";
import ImageViewer from "@/components/image-viewer/ImageViewer";

export default {
  name: "TableViewer",
  props: {
    store: {
      type: Object,
    },
    columns: {
      type: Array,
    },
    pagination: {
      type: Boolean,
      default: false,
    },
    autoLoad: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Pagination,
  },
  directives: { waves },
  data() {
    this.EnumColumnType = EnumColumnType;
    this.EnumFormatType = EnumFormatType;
    return {
      list: [], // list for render data
      tableKey: 0, // tableKey for render table
      total: 0,
      listLoading: true,
      listQuery: {},
    };
  },
  created() {
    if (this.autoLoad) {
      this.doQuery();
    }
  },
  methods: {
    async doQuery() {
      try {
        this.listLoading = true;
        await this.store.load();
        this.list = this.store.getData();
        this.total = this.store.getCount();
        this.listLoading = false;
      } catch (e) {
        this.listLoading = false;
      }
    },
    onClickTableRow(row, column) {
      this.$emit("click", row, column);
    },
    viewImage(url) {
      let options = {
        propsData: {
          url,
        },
      };
      ImageViewer.show(options);
    },
    //#region filter
    handleFilter() {
      this.listQuery.page = 1;
      this.doQuery();
    },
    //#endregion filter
    //#region sort
    sortChange(data) {
      const { prop, order } = data;
      if (prop === "id") {
        this.sortByID(order);
      }
    },
    sortByID(order) {
      if (order === "ascending") {
        this.listQuery.sort = "+id";
      } else {
        this.listQuery.sort = "-id";
      }
      this.handleFilter();
    },
    getSortClass: function (key) {
      const sort = this.listQuery.sort;
      return sort === `+${key}` ? "ascending" : "descending";
    },
    //#region sort
  },
};
</script>

<style lang="scss" scoped>
.image-in-row {
  width: 100px;
  height: 100px;
}
</style>