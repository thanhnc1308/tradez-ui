import { EnumColumnType, EnumFormatType } from "@/common/enum";

export const columnsJournal = [
  {
    dataField: "journal_date",
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
    dataField: "transaction_type",
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
    // tagTypeFilter: function(data) {
    //   if (data.status === "win") {
    //     return "success";
    //   } else {
    //     return "danger";
    //   }
    // },
    columnType: EnumColumnType.SignedTag,
    formatType: EnumFormatType.AbsPercentage
  },
  {
    dataField: "screenshot",
    label: "Screenshot",
    columnAlign: "center",
    dataAlign: "center",
    width: "150",
    columnType: EnumColumnType.Image,
    formatType: EnumFormatType.Text
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


export const columnsStockPrice = [
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
    dataField: "volatile",
    label: "Volatile",
    columnAlign: "center",
    dataAlign: "center",
    minWidth: "200",
    // tagTypeFilter: function(data) {
    //   if (data.status === "up") {
    //     return "success";
    //   } else {
    //     return "danger";
    //   }
    // },
    columnType: EnumColumnType.SignedTag,
    formatType: EnumFormatType.AbsPercentage
  }
];

export const columnsHistoricalPrice = [
  {
    dataField: "stock_date",
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
    columnType: EnumColumnType.Text,
    formatType: EnumFormatType.Text
  },
  {
    dataField: "open_price",
    label: "Open",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.Number,
    formatType: EnumFormatType.Number
  },
  {
    dataField: "high_price",
    label: "High",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.Number,
    formatType: EnumFormatType.Number
  },
  {
    dataField: "low_price",
    label: "Low",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.Number,
    formatType: EnumFormatType.Number
  },
  {
    dataField: "close_price",
    label: "Close",
    columnAlign: "center",
    dataAlign: "center",
    minWidth: "100",
    columnType: EnumColumnType.Number,
    formatType: EnumFormatType.Number
  },
];
