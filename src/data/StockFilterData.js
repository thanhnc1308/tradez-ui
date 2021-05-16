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
  },
  {
    "type": "bearish_hammer_stick",
    "label": "Bearish Hammer Stick"
  },
  {
    "type": "bearish_inverted_hammer_stick",
    "label": "Bearish Inverted Hammer Stick"
  },
  {
    "type": "bullish_inverted_hammer_stick",
    "label": "Bullish Inverted Hammer Stick"
  },
  {
    "type": "bearish_spinning_top",
    "label": "Bearish Spinning Top"
  },
  {
    "type": "bullish_spinning_top",
    "label": "Bullish Spinning Top"
  },
  {
    "type": "bullish_hammer_stick",
    "label": "Bullish Hammer Stick"
  }
]

export const listDoubleCandles = [
  {
    "type": "bullish_harami",
    "label": "Bullish harami"
  },
  {
    "type": "bearish_harami",
    "label": "Bearish harami"
  },
  {
    "type": "dark_cloud_cover",
    "label": "Dark cloud cover"
  },
  {
    "type": "doji_star",
    "label": "Doji star"
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
    "type": "piercing_pattern",
    "label": "Piercing Pattern"
  },
  {
    "type": "rain_drop",
    "label": "Rain Drop"
  },
  {
    "type": "rain_drop_doji",
    "label": "Rain Drop Doji"
  },
  {
    "type": "star",
    "label": "Star"
  },
  {
    "type": "shooting_star",
    "label": "Shooting star"
  },
  {
    "type": "bearish_harami_cross",
    "label": "Bearish Harami Cross"
  },
  {
    "type": "bullish_harami_cross",
    "label": "Bullish Harami Cross"
  },
  {
    "type": "inside_bar",
    "label": "Inside Bar"
  },
  {
    "type": "outside_bar",
    "label": "Outside Bar"
  },
]

export const listTripleCandles = [
  {
    "type": "hanging_man",
    "label": "Hanging Man"
  },
  {
    "type": "morning_star",
    "label": "Morning star"
  },
  {
    "type": "morning_star_doji",
    "label": "Morning star doji"
  },
  {
    "type": "abandoned_baby",
    "label": "Abandoned Baby"
  },
  {
    "type": "evening_star",
    "label": "Evening star"
  },
  {
    "type": "evening_star_doji",
    "label": "Evening star doji"
  },
  {
    "type": "downside_tasuki_gap",
    "label": "Downside Tasuki Gap"
  },
  {
    "type": "three_black_crows",
    "label": "Three Black Crows"
  },
  {
    "type": "three_white_soldiers",
    "label": "Three White Soldiers"
  },
  {
    "type": "three_outside_down",
    "label": "Three Outside Down"
  },
  {
    "type": "three_outside_up",
    "label": "Three Outside Up"
  },
  {
    "type": "three_inside_up",
    "label": "Three Inside Up"
  },
  {
    "type": "three_inside_down",
    "label": "Three Inside Down"
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
      value: "ilike"
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
      value: "ilike"
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
      value: "ilike"
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
