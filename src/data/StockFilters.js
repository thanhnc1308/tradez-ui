export const listFilters = [
  {
    type: "BB.lower",
    label: "Bollinger Lower Band (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC",
      list: listInputLOHLC,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "BB.upper",
    label: "Bollinger Upper Band (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC",
      list: listInputLOHLC,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "EMA20",
    label: "Exponential Moving Average (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_EMA",
      list: listInputLOHLCAndEMA,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "SMA20",
    label: "Simple Moving Average (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_EMA",
      list: listInputLOHLCAndSMA,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "RSI14",
    label: "Relative Strength Index (14)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "RSI7",
    label: "Relative Strength Index (7)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "ADX14",
    label: "Average Directional Index (14)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "ATR14",
    label: "Average True Range (14)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "AO",
    label: "Awesome Oscillator",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "CCI20",
    label: "Commodity Channel Index (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "CMF20",
    label: "Chaikin Money Flow (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "MFI14",
    label: "Money Flow Index (14)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "P.SAR",
    label: "Parabolic SAR",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC",
      list: listInputLOHLC,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "pattern",
    label: "Pattern",
    operation: {
      type: "const",
      value: "equal"
    },
    value: {
      type: "comboFilter",
      list: listPattern,
      defaultValue: "Any",
      value: "Any"
    }
  },
  {
    type: "MACD.macd",
    label: "MACD Level (12, 26)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_MACD_Signal",
      list: listInputLOHLCAndEMA,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "MACD.signal",
    label: "MACD Signal (12, 26)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_MACD_Level",
      list: listInputLOHLCAndEMA,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "Stoch.K",
    label: "Stochastic %K (14, 3, 3)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_Stock_D",
      list: listInputLOHLCAndEMA,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "Stoch.D",
    label: "Stochastic %D (14, 3, 3)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_Stock_K",
      list: listInputLOHLCAndEMA,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "W.R",
    label: "Williams Percent Range (14)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 30,
      value: 30
    }
  }
];

export const listOperation = [
  {
    key: "less",
    label: "Less",
    value: "less"
  },
  {
    key: "eless",
    label: "Less",
    value: "eless"
  },
  {
    key: "greater",
    label: "Less",
    value: "greater"
  },
  {
    key: "egreater",
    label: "Less",
    value: "egreater"
  },
  {
    key: "crosses",
    label: "Crosses",
    value: "crosses"
  },
  {
    key: "crosses_above",
    label: "Crosses Up",
    value: "crosses_above"
  },
  {
    key: "crosses_below",
    label: "Crosses Down",
    value: "crosses_below"
  },
  {
    key: "in_range",
    label: "Between",
    value: "in_range"
  },
  {
    key: "not_in_range",
    label: "Outside",
    value: "not_in_range"
  },
  {
    key: "equal",
    label: "Equal",
    value: "equal"
  },
  {
    key: "nequal",
    label: "Not Equal",
    value: "nequal"
  }
];

export const listInputLOHLC = [
  {
    type: "input",
    label: "Value"
  },
  {
    type: "last",
    label: "Last"
  },
  {
    type: "open",
    label: "Open"
  },
  {
    type: "high",
    label: "High"
  },
  {
    type: "low",
    label: "Low"
  },
  {
    type: "close",
    label: "Close"
  }
];

export const listInputLOHLCAndEMA = [
  ...listInputLOHLC,
  {
    type: "ema34",
    label: "Exponential Moving Average (34)"
  }
];

export const listInputLOHLCAndSMA = [
  ...listInputLOHLC,
  {
    type: "sma34",
    label: "Simple Moving Average (34)"
  }
];

export const listPattern = [
  {
    "type": "doji",
    "label": "Doji"
  },
  {
    "type": "b_engulfing",
    "label": "Bullish Engulfing"
  }
]