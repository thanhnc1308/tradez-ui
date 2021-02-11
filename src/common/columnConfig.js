import { EnumColumnType, EnumFormatType } from "@/common/enum";

export const columnsJournal = [
  {
    dataField: "date",
    label: "Date",
    sortable: "custom",
    columnAlign: "center",
    dataAlign: "center",
    width: "120",
    columnType: EnumColumnType.DateTime,
    formatType: EnumFormatType.DateTime
  },
  {
    dataField: "symbol",
    label: "Symbol",
    columnAlign: "center",
    dataAlign: "center",
    width: "120",
    columnType: EnumColumnType.Link,
    formatType: EnumFormatType.Text
  },
  {
    dataField: "type",
    label: "Type",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.Text,
    formatType: EnumFormatType.Text
  },
  {
    dataField: "entry",
    label: "Entry",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.Number,
    formatType: EnumFormatType.Number
  },
  {
    dataField: "exit",
    label: "Exit",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.Number,
    formatType: EnumFormatType.Number
  },
  {
    dataField: "pnl",
    label: "PnL",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    tagTypeFilter: function(data) {
      if (data.status === "win") {
        return "success";
      } else {
        return "danger";
      }
    },
    columnType: EnumColumnType.Tag,
    formatType: EnumFormatType.Percentage
  },
  {
    dataField: "screenshot",
    label: "Screenshot",
    columnAlign: "center",
    dataAlign: "center",
    width: "150",
    columnType: EnumColumnType.Image
  },
  {
    dataField: "comment",
    label: "Comment",
    columnAlign: "center",
    dataAlign: "center",
    minWidth: "200",
    columnType: EnumColumnType.Text,
    formatType: EnumFormatType.Text
  }
];
