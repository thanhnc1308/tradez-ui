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
            @click="onClickTableRow(row)"
            >{{ row[column.dataField] | formatData(column.formatType) }}</span
          >
          <span v-else-if="column.columnType === EnumColumnType.DateTime">{{
            row[column.dataField]
              | formatData(column.formatType)
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
            @click="onClickTableRow(row)"
            fit="contain"
          >
          </base-image>
          <span v-else>{{
            row[column.dataField]
              | formatData(column.formatType)
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
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import waves from "@/directive/waves";
import Pagination from "@/components/Pagination";
import { EnumColumnType, EnumFormatType } from "@/common/enum";
import {
  fetchList,
  createArticle,
  updateArticle,
} from "@/api/article";

export default {
  name: "TableViewer",
  props: {
      data: {
          type: Array
      },
      columns: {
          type: Array
      }
  },
  components: {
    Pagination,
  },
  directives: { waves },
  data() {
    this.EnumColumnType = EnumColumnType;
    this.EnumFormatType = EnumFormatType;
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id",
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      const data = [
        {
          date: new Date(),
          symbol: "RAL",
          type: "Buy",
          entry: 100000,
          exit: 120000,
          pnl: 20,
          status: 1,
          screenshot:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          comment: "this is a comment",
        },
      ];
      fetchList(this.listQuery).then((response) => {
        this.list = data;
        this.total = data.length;
        this.listLoading = false;
      });
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
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
  },
};
</script>

<style lang="scss" scoped>
.image-in-row {
  width: 100px;
  height: 100px;
}
</style>