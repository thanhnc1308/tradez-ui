import { EnumColumnType, EnumFormatType } from "@/common/enum";

export const columnsJournal = [
  {
    dataField: "transaction_date",
    label: "Date",
    sortable: "custom",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.DateTime,
    formatType: EnumFormatType.DateTime
  },
  {
    dataField: "symbol",
    label: "Symbol",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.Link,
    formatType: EnumFormatType.Text
  },
  {
    dataField: "transaction_type",
    label: "Type",
    columnAlign: "center",
    dataAlign: "center",
    width: "80",
    columnType: EnumColumnType.Text,
    formatType: EnumFormatType.Text
  },
  {
    dataField: "quantity",
    label: "Quantity",
    columnAlign: "center",
    dataAlign: "center",
    width: "80",
    columnType: EnumColumnType.Number,
    formatType: EnumFormatType.Number
  },
  {
    dataField: "entry",
    label: "Entry price",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.Number,
    formatType: EnumFormatType.Number
  },
  {
    dataField: "exit",
    label: "Exit price",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.Number,
    formatType: EnumFormatType.Number
  },
  {
    dataField: "total_value",
    label: "Total value",
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
    dataField: "comments",
    label: "Comments",
    columnAlign: "center",
    dataAlign: "center",
    minWidth: "200",
    columnType: EnumColumnType.Text,
    formatType: EnumFormatType.Text
  }
];

export const columnsNotification = [
  {
    dataField: "created_date",
    label: "Date",
    sortable: "custom",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.DateTime,
    formatType: EnumFormatType.DateTime
  },
  {
    dataField: "description",
    label: "Description",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.Text,
    formatType: EnumFormatType.Text
  },
  {
    dataField: "gmail",
    label: "Gmail",
    columnAlign: "center",
    dataAlign: "center",
    width: "100",
    columnType: EnumColumnType.Text,
    formatType: EnumFormatType.Text
  },
  {
    dataField: "send_gmail",
    label: "Send Gmail",
    columnAlign: "center",
    dataAlign: "center",
    minWidth: "100",
    columnType: EnumColumnType.Boolean,
    formatType: EnumFormatType.Text
  },
  {
    dataField: "tg_chat_id",
    label: "Telegram Chat",
    columnAlign: "center",
    dataAlign: "center",
    minWidth: "100",
    columnType: EnumColumnType.Text,
    formatType: EnumFormatType.Text
  },
  {
    dataField: "send_telegram",
    label: "Send Telegram",
    columnAlign: "center",
    dataAlign: "center",
    minWidth: "100",
    columnType: EnumColumnType.Boolean,
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
  }
];

export const columnsStockScreener = [
  {
    dataField: "symbol",
    label: "Symbol",
    columnAlign: "center",
    dataAlign: "center",
    minWidth: "120",
    columnType: EnumColumnType.Link,
    formatType: EnumFormatType.Text
  }
];
