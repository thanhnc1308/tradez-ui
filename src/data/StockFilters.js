export const listOperation = [
  {
    key: "less",
    label: "Less",
    value: "less"
  },
  {
    key: "eless",
    label: "Less than or equal",
    value: "eless"
  },
  {
    key: "greater",
    label: "Greater",
    value: "greater"
  },
  {
    key: "egreater",
    label: "Greater than or equal",
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
    type: "ema20",
    label: "Exponential Moving Average (20)"
  },
  {
    type: "ema34",
    label: "Exponential Moving Average (34)"
  },
  {
    type: "ema50",
    label: "Exponential Moving Average (50)"
  },
  {
    type: "ema89",
    label: "Exponential Moving Average (89)"
  },
  {
    type: "ema200",
    label: "Exponential Moving Average (200)"
  }
];

export const listInputLOHLCAndSMA = [
  ...listInputLOHLC,
  {
    type: "sma20",
    label: "Simple Moving Average (20)"
  },
  {
    type: "sma50",
    label: "Simple Moving Average (50)"
  },
  {
    type: "sma200",
    label: "Simple Moving Average (200)"
  }
];

export const listPattern = [
  {
    "type": "any",
    "label": "Any"
  },
  {
    "type": "doji",
    "label": "Doji"
  },
  {
    "type": "b_engulfing",
    "label": "Bullish Engulfing"
  }
]

export const listFilters = [
  {
    type: "bb_20_lower",
    label: "Bollinger Lower Band (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC",
      typeValue: "input",
      list: listInputLOHLC,
      defaultValue: 0,
      value: 0
    }
  },
  {
    type: "bb_20_upper",
    label: "Bollinger Upper Band (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC",
      typeValue: "input",
      list: listInputLOHLC,
      defaultValue: 0,
      value: 0
    }
  },
  {
    type: "ema20",
    label: "Exponential Moving Average (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_EMA",
      typeValue: "input",
      list: listInputLOHLCAndEMA,
      defaultValue: 0,
      value: 0
    }
  },
  {
    type: "sma20",
    label: "Simple Moving Average (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_EMA",
      typeValue: "input",
      list: listInputLOHLCAndSMA,
      defaultValue: 0,
      value: 0
    }
  },
  {
    type: "rsi14",
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
    type: "rsi7",
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
    type: "rsi10",
    label: "Relative Vigor Index (10)",
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
    type: "obv",
    label: "On Balance Volume",
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
    type: "adx14",
    label: "Average Directional Index (14)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 0,
      value: 0
    }
  },
  {
    type: "atr14",
    label: "Average True Range (14)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 0,
      value: 0
    }
  },
  {
    type: "awesome_oscillator",
    label: "Awesome Oscillator",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 0,
      value: 0
    }
  },
  {
    type: "cci20",
    label: "Commodity Channel Index (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 0,
      value: 0
    }
  },
  {
    type: "cmf20",
    label: "Chaikin Money Flow (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 0,
      value: 0
    }
  },
  {
    type: "mfi14",
    label: "Money Flow Index (14)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 0,
      value: 0
    }
  },
  {
    type: "parabolic_sar",
    label: "Parabolic SAR",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC",
      typeValue: "input",
      list: listInputLOHLC,
      defaultValue: 0,
      value: 0
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
    type: "macd_level_12_26",
    label: "MACD Level (12, 26)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_MACD_Signal",
      typeValue: "input",
      list: listInputLOHLCAndEMA,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "macd_signal_12_26",
    label: "MACD Signal (12, 26)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_MACD_Level",
      typeValue: "input",
      list: listInputLOHLCAndEMA,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "stochastic_k_14_3_3",
    label: "Stochastic %K (14, 3, 3)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_Stock_D",
      typeValue: "input",
      list: listInputLOHLCAndEMA,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "stochastic_d_14_3_3",
    label: "Stochastic %D (14, 3, 3)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "Input_LOHLC_Stock_K",
      typeValue: "input",
      list: listInputLOHLCAndEMA,
      defaultValue: 30,
      value: 30
    }
  },
  {
    type: "williams_percent_range_14",
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