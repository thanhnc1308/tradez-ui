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
        v-for="column in columnsx"
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
            @dblclick="onDblClickTableRow(row, column)"
            @click="onClickTableRow(row, column)"
            >{{ row[column.dataField] | formatData(column.formatType) }}</span
          >
          <span
            @dblclick="onDblClickTableRow(row, column)"
            v-else-if="column.columnType === EnumColumnType.DateTime"
            >{{ row[column.dataField] | formatData(column.formatType) }}</span
          >
          <base-tag
            @dblclick="onDblClickTableRow(row, column)"
            v-else-if="column.columnType === EnumColumnType.Tag"
            :type="column.tagTypeFilter(row)"
          >
            {{ row[column.dataField] | formatData(column.formatType) }}
          </base-tag>
          <base-tag
            @dblclick="onDblClickTableRow(row, column)"
            v-else-if="column.columnType === EnumColumnType.SignedTag"
            :type="row[column.dataField] >= 0 ? 'success' : 'danger'"
          >
            {{ row[column.dataField] | formatData(column.formatType) }}
          </base-tag>
          <base-image
            v-else-if="column.columnType === EnumColumnType.Image && row[column.dataField]"
            class="c-pointer image-in-row"
            :src="row[column.dataField]"
            @click="viewImage(row[column.dataField])"
            fit="contain"
          >
          </base-image>
          <span @dblclick="onDblClickTableRow(row, column)" v-else>{{
            row[column.dataField] | formatData(column.formatType)
          }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="Actions"
        v-if="hasActionColumn"
        align="center"
        width="120"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <slot :row="row" name="actions"></slot>
          <!-- <el-dropdown split-button type="primary" @click="handleUpdate(row)">
            Edit
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-if="row.status != 'deleted'">
                <span @click="handleDelete(row, $index)"> Delete </span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
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
import Pagination from "@/components/Pagination/Pagination";
import TableStore from "@/common/TableStore";
import { EnumColumnType, EnumFormatType } from "@/common/enum";
import ImageViewer from "@/components/image-viewer/ImageViewer";

export default {
  name: "TableViewer",
  props: {
    store: {
      type: TableStore,
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
    hasActionColumn: {
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
      listLoading: false,
      listQuery: {},
      columnsx: []
    };
  },
  created() {
    this.doQueryCount = 0;
    if (this.autoLoad) {
      this.doQuery();
    }
    this.columnsx = this.columns;
  },
  methods: {
    async doQuery(options={}) {
      try {
        console.log('do query count ' + this.doQueryCount++);
        this.listLoading = true;
        let opts = {};
        if (this.pagination) {
          opts = {
            ...options,
            page: options.page || 1,
            per_page: options.limit || 20,
          }
        } else {
          opts = {...options}
        }
        await this.store.load(opts);
        this.list = this.store.getData();
        this.total = this.store.total;
        this.listLoading = false;
      } catch (e) {
        this.listLoading = false;
      }
    },
    onClickTableRow(row, column) {
      this.$emit("click", row, column);
    },
    onDblClickTableRow(row, column) {
      this.$emit("dblclick", row, column);
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