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
  // {
  //   key: "crosses",
  //   label: "Crosses",
  //   value: "crosses"
  // },
  // {
  //   key: "crosses_above",
  //   label: "Crosses Up",
  //   value: "crosses_above"
  // },
  // {
  //   key: "crosses_below",
  //   label: "Crosses Down",
  //   value: "crosses_below"
  // },
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

export const listSingleCandle = [
  {
    "type": "doji",
    "label": "Doji"
  },
  {
    "type": "bullish_marubozu",
    "label": "Bullish marubozu"
  },
  {
    "type": "bearish_marubozu",
    "label": "Bearish marubozu"
  },
  {
    "type": "hammer",
    "label": "Hammer"
  },
  {
    "type": "inverted_hammer",
    "label": "Inverted hammer"
  },
  {
    "type": "gravestone_doji",
    "label": "Gravestone doji"
  },
  {
    "type": "dragonfly_doji",
    "label": "Dragonfly doji"
  }
]

export const listDoubleCandles = [
  {
    "type": "bullish_shooting_star",
    "label": "Bullish shooting star"
  },
  {
    "type": "bearish_shooting_star",
    "label": "Bearish shooting star"
  },
  {
    "type": "bullish_high_harami",
    "label": "Bullish high harami"
  },
  {
    "type": "bearish_high_harami",
    "label": "Bearish high harami"
  },
  {
    "type": "bullish_engulfing",
    "label": "Bullish engulfing"
  },
  {
    "type": "bearish_engulfing",
    "label": "Bearish engulfing"
  },
  {
    "type": "bullish_piercing_line",
    "label": "Bullish piercing line"
  },
  {
    "type": "bearish_piercing_line",
    "label": "Bearish piercing line"
  },
  {
    "type": "bullish_hanging_man",
    "label": "Bullish hanging man"
  },
  {
    "type": "bearish_hanging_man",
    "label": "Bearish hanging man"
  },
  {
    "type": "dark_cloud_cover",
    "label": "Dark cloud cover"
  },
  {
    "type": "doji_star",
    "label": "Doji star"
  },
]

export const listTripleCandles = [
  {
    "type": "evening_star",
    "label": "Evening star"
  },
  {
    "type": "morning_star",
    "label": "Morning star"
  },
  {
    "type": "bullish_high_reversal",
    "label": "Bullish high reversal"
  },
  {
    "type": "bearish_high_reversal",
    "label": "Bearish high reversal"
  },
]

export const listFilters = [
  {
    type: "bollinger20_lband_indicator",
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
    type: "bollinger20_hband_indicator",
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
  // {
  //   type: "rvi10",
  //   label: "Relative Vigor Index (10)",
  //   operation: {
  //     type: "combo",
  //     list: listOperation,
  //     defaultOperation: "less",
  //     value: "less"
  //   },
  //   value: {
  //     type: "input",
  //     defaultValue: 30,
  //     value: 30
  //   }
  // },
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
    type: "psar_up_indicator",
    label: "Parabolic SAR Up Indicator",
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
    type: "psar_down_indicator",
    label: "Parabolic SAR Down Indicator",
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
    type: "single_candle",
    label: "Single candle",
    operation: {
      type: "const",
      value: "equals"
    },
    value: {
      type: "comboFilter",
      list: listSingleCandle,
      defaultValue: "Any",
      value: "Any"
    }
  },
  {
    type: "double_candles",
    label: "Double candles",
    operation: {
      type: "const",
      value: "equals"
    },
    value: {
      type: "comboFilter",
      list: listDoubleCandles,
      defaultValue: "Any",
      value: "Any"
    }
  },
  {
    type: "triple_candles",
    label: "Triple candles",
    operation: {
      type: "const",
      value: "equals"
    },
    value: {
      type: "comboFilter",
      list: listTripleCandles,
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
  },
  {
    type: "aroon_up_14",
    label: "Aroon Up (14)",
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
    type: "aroon_down_14",
    label: "Aroon Down (14)",
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
    type: "keltner20_channel_hband_indicator",
    label: "Keltner Channel High Band (20)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 1,
      value: 1
    }
  },
  {
    type: "keltner20_channel_lband_indicator",
    label: "Keltner Channel Low Band (14)",
    operation: {
      type: "combo",
      list: listOperation,
      defaultOperation: "less",
      value: "less"
    },
    value: {
      type: "input",
      defaultValue: 1,
      value: 1
    }
  }
];
