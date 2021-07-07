(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35903fcd"],{"000b":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("layout-list",[e("template",{slot:"utility"},[e("div",{staticClass:"row select-stock"},[e("div",{staticClass:"param-label"},[a._v("Choose a stock symbol")]),e("el-select",{attrs:{multiple:"",filterable:"",placeholder:"Please select"},model:{value:a.symbol,callback:function(t){a.symbol=t},expression:"symbol"}},a._l(a.listStock,(function(a){return e("el-option",{key:a.id,attrs:{label:a.symbol,value:a.symbol}})})),1)],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Choose a period")]),e("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date","picker-options":a.pickerOptions},model:{value:a.daterange,callback:function(t){a.daterange=t},expression:"daterange"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Stop loss ATR factor")]),e("base-input-number",{model:{value:a.strategy_params.atr_stop_loss,callback:function(t){a.$set(a.strategy_params,"atr_stop_loss",t)},expression:"strategy_params.atr_stop_loss"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Scale out ATR factor")]),e("base-input-number",{model:{value:a.strategy_params.atr_scale_out,callback:function(t){a.$set(a.strategy_params,"atr_scale_out",t)},expression:"strategy_params.atr_scale_out"}})],1),e("div",{staticClass:"row select-strategy"},[e("div",{staticClass:"param-label"},[a._v("Choose a strategy")]),e("el-select",{attrs:{filterable:"","value-key":"id",placeholder:"Please select"},on:{change:a.onSelectStrategy},model:{value:a.strategy,callback:function(t){a.strategy=t},expression:"strategy"}},a._l(a.listStrategy,(function(a){return e("el-option",{key:a.id,attrs:{label:a.label,value:a}})})),1)],1),e("div",{staticClass:"row strategy-description"},[a._v(" "+a._s(a.strategy.description)+" ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Choose strategy parameters")]),"RSIStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Period")]),e("base-input-number",{model:{value:a.strategy_params.period,callback:function(t){a.$set(a.strategy_params,"period",t)},expression:"strategy_params.period"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Buy when RSI at")]),e("base-input-number",{model:{value:a.strategy_params.upper,callback:function(t){a.$set(a.strategy_params,"upper",t)},expression:"strategy_params.upper"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Sell when RSI at")]),e("base-input-number",{model:{value:a.strategy_params.lower,callback:function(t){a.$set(a.strategy_params,"lower",t)},expression:"strategy_params.lower"}})],1)]):a._e(),"WilliamsRStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Period")]),e("base-input-number",{model:{value:a.strategy_params.period,callback:function(t){a.$set(a.strategy_params,"period",t)},expression:"strategy_params.period"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Buy when WilliamsRStrategy at")]),e("base-input-number",{model:{value:a.strategy_params.upper,callback:function(t){a.$set(a.strategy_params,"upper",t)},expression:"strategy_params.upper"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Sell when WilliamsRStrategy at")]),e("base-input-number",{model:{value:a.strategy_params.lower,callback:function(t){a.$set(a.strategy_params,"lower",t)},expression:"strategy_params.lower"}})],1)]):a._e(),"RateOfChangeStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Period")]),e("base-input-number",{model:{value:a.strategy_params.period,callback:function(t){a.$set(a.strategy_params,"period",t)},expression:"strategy_params.period"}})],1)]):a._e(),"EnvelopeStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Percentage")]),e("base-input-number",{model:{value:a.strategy_params.perc,callback:function(t){a.$set(a.strategy_params,"perc",t)},expression:"strategy_params.perc"}})],1)]):a._e(),"UltimateOscillatorStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Fast Period")]),e("base-input-number",{model:{value:a.strategy_params.p1,callback:function(t){a.$set(a.strategy_params,"p1",t)},expression:"strategy_params.p1"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Middle Period")]),e("base-input-number",{model:{value:a.strategy_params.p2,callback:function(t){a.$set(a.strategy_params,"p2",t)},expression:"strategy_params.p2"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Slow Period")]),e("base-input-number",{model:{value:a.strategy_params.p3,callback:function(t){a.$set(a.strategy_params,"p3",t)},expression:"strategy_params.p3"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Buy when UltimateOscillator at")]),e("base-input-number",{model:{value:a.strategy_params.upper,callback:function(t){a.$set(a.strategy_params,"upper",t)},expression:"strategy_params.upper"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Sell when UltimateOscillator at")]),e("base-input-number",{model:{value:a.strategy_params.lower,callback:function(t){a.$set(a.strategy_params,"lower",t)},expression:"strategy_params.lower"}})],1)]):a._e(),"CCIStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Period")]),e("base-input-number",{model:{value:a.strategy_params.period,callback:function(t){a.$set(a.strategy_params,"period",t)},expression:"strategy_params.period"}})],1)]):a._e(),"TrixStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Period")]),e("base-input-number",{model:{value:a.strategy_params.period,callback:function(t){a.$set(a.strategy_params,"period",t)},expression:"strategy_params.period"}})],1)]):a._e(),"VortexStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Period")]),e("base-input-number",{model:{value:a.strategy_params.period,callback:function(t){a.$set(a.strategy_params,"period",t)},expression:"strategy_params.period"}})],1)]):a._e(),"BollingerBandsAndRSIStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Bollinger Bands Period")]),e("base-input-number",{model:{value:a.strategy_params.bbband_period,callback:function(t){a.$set(a.strategy_params,"bbband_period",t)},expression:"strategy_params.bbband_period"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Bollinger Bands Devfactor")]),e("base-input-number",{model:{value:a.strategy_params.devfactor,callback:function(t){a.$set(a.strategy_params,"devfactor",t)},expression:"strategy_params.devfactor"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("RSI Period")]),e("base-input-number",{model:{value:a.strategy_params.rsi_period,callback:function(t){a.$set(a.strategy_params,"rsi_period",t)},expression:"strategy_params.rsi_period"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Buy when RSI overbought at")]),e("base-input-number",{model:{value:a.strategy_params.upper,callback:function(t){a.$set(a.strategy_params,"upper",t)},expression:"strategy_params.upper"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Sell when RSI oversold at")]),e("base-input-number",{model:{value:a.strategy_params.lower,callback:function(t){a.$set(a.strategy_params,"lower",t)},expression:"strategy_params.lower"}})],1)]):a._e(),"BollingerBandsSidewayStrategy"===a.strategy.id||"BollingerBandsStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Bollinger Bands Period")]),e("base-input-number",{model:{value:a.strategy_params.period,callback:function(t){a.$set(a.strategy_params,"period",t)},expression:"strategy_params.period"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Bollinger Bands Devfactor")]),e("base-input-number",{model:{value:a.strategy_params.devfactor,callback:function(t){a.$set(a.strategy_params,"devfactor",t)},expression:"strategy_params.devfactor"}})],1)]):a._e(),"MACDStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Fast EMA Period")]),e("base-input-number",{model:{value:a.strategy_params.period_me1,callback:function(t){a.$set(a.strategy_params,"period_me1",t)},expression:"strategy_params.period_me1"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Slow EMA Period")]),e("base-input-number",{model:{value:a.strategy_params.period_me2,callback:function(t){a.$set(a.strategy_params,"period_me2",t)},expression:"strategy_params.period_me2"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Signal factor")]),e("base-input-number",{model:{value:a.strategy_params.period_signal,callback:function(t){a.$set(a.strategy_params,"period_signal",t)},expression:"strategy_params.period_signal"}})],1)]):a._e(),"MaCrossoverStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Fast EMA period")]),e("base-input-number",{model:{value:a.strategy_params.pfast,callback:function(t){a.$set(a.strategy_params,"pfast",t)},expression:"strategy_params.pfast"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Slow EMA period")]),e("base-input-number",{model:{value:a.strategy_params.pslow,callback:function(t){a.$set(a.strategy_params,"pslow",t)},expression:"strategy_params.pslow"}})],1)]):a._e(),"AroonUpAndDownStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Period")]),e("base-input-number",{model:{value:a.strategy_params.period,callback:function(t){a.$set(a.strategy_params,"period",t)},expression:"strategy_params.period"}})],1)]):a._e(),"TRIXStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Period")]),e("base-input-number",{model:{value:a.strategy_params.period,callback:function(t){a.$set(a.strategy_params,"period",t)},expression:"strategy_params.period"}})],1)]):a._e(),"ADXDMICrossStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Period")]),e("base-input-number",{model:{value:a.strategy_params.period,callback:function(t){a.$set(a.strategy_params,"period",t)},expression:"strategy_params.period"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("ADX strong trend level")]),e("base-input-number",{model:{value:a.strategy_params.adx_strong_trend_level,callback:function(t){a.$set(a.strategy_params,"adx_strong_trend_level",t)},expression:"strategy_params.adx_strong_trend_level"}})],1)]):a._e(),"PSARStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Period")]),e("base-input-number",{model:{value:a.strategy_params.period,callback:function(t){a.$set(a.strategy_params,"period",t)},expression:"strategy_params.period"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Increment")]),e("base-input-number",{model:{value:a.strategy_params.af,callback:function(t){a.$set(a.strategy_params,"af",t)},expression:"strategy_params.af"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Max value")]),e("base-input-number",{model:{value:a.strategy_params.afmax,callback:function(t){a.$set(a.strategy_params,"afmax",t)},expression:"strategy_params.afmax"}})],1)]):a._e(),"JapaneseCandlestickStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Buy pattern")]),e("base-input",{model:{value:a.strategy_params.buy_pattern,callback:function(t){a.$set(a.strategy_params,"buy_pattern",t)},expression:"strategy_params.buy_pattern"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Sell pattern")]),e("base-input",{model:{value:a.strategy_params.sell_pattern,callback:function(t){a.$set(a.strategy_params,"sell_pattern",t)},expression:"strategy_params.sell_pattern"}})],1)]):a._e(),"MassIndexStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Fast period")]),e("base-input-number",{model:{value:a.strategy_params.fast_period,callback:function(t){a.$set(a.strategy_params,"fast_period",t)},expression:"strategy_params.fast_period"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Slow period")]),e("base-input-number",{model:{value:a.strategy_params.slow_period,callback:function(t){a.$set(a.strategy_params,"slow_period",t)},expression:"strategy_params.slow_period"}})],1)]):a._e(),"KSTOscillatorStrategy"===a.strategy.id?e("div",{staticClass:"stategy-parameters"},[e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Fast period")]),e("base-input-number",{model:{value:a.strategy_params.fast_period,callback:function(t){a.$set(a.strategy_params,"fast_period",t)},expression:"strategy_params.fast_period"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"param-label"},[a._v("Slow period")]),e("base-input-number",{model:{value:a.strategy_params.slow_period,callback:function(t){a.$set(a.strategy_params,"slow_period",t)},expression:"strategy_params.slow_period"}})],1)]):a._e()]),e("div",{staticClass:"row horizontal-center"},[e("base-button",{attrs:{loading:a.loading},on:{click:a.showResult}},[a._v("Show Result")])],1),a.hasData?e("base-button",{staticClass:"export-result",attrs:{type:"primary",loading:a.loadingExportResult},on:{click:a.exportResult}},[a._v("Export Result")]):a._e()],1),e("template",{slot:"table"},[a.hasData?e("div",a._l(a.results,(function(t,s){return e("div",{key:t.symbol,staticClass:"result-item"},[e("div",{staticClass:"title text-center bold mb-1",staticStyle:{"font-size":"20px"}},[a._v(" "+a._s(t.title)+" ")]),e("div",{staticClass:"title text-center italic mb-1"},[a._v(" Total trades: "+a._s(a._f("formatData")(t.total_trades,a.EnumFormatType.Number))+" ")]),e("div",{staticClass:"title text-center italic mb-1"},[a._v(" Total wins: "+a._s(t.total_won||0)+" ")]),e("div",{staticClass:"title text-center italic mb-1"},[a._v(" Total losses: "+a._s(t.total_lost||0)+" ")]),e("div",{staticClass:"title text-center italic mb-1"},[a._v(" Win rate: "+a._s(t.win_rate||0)+"% ")]),e("div",{staticClass:"table-result"},[e("table-viewer",{ref:"tableResult"+s,refInFor:!0,attrs:{pagination:!1,data:t.data,columns:a.columnsBacktestResult}})],1)])})),0):a._e()])],2)},r=[],i=(e("99af"),e("4160"),e("d81d"),e("159b"),e("5530")),l=e("b85c"),n=(e("96cf"),e("1da1")),o=e("17df"),c=e("af64"),p=e("d4ec"),d=e("257e"),m=e("262e"),u=e("2caf"),g=e("ade3"),y=e("8eb9"),b=function(a){Object(m["a"])(e,a);var t=Object(u["a"])(e);function e(){var a;Object(p["a"])(this,e);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return a=t.call.apply(t,[this].concat(r)),Object(g["a"])(Object(d["a"])(a),"prefix","/backtest"),a}return e}(y["a"]),_=e("b34c"),v=e("d5a8"),f=e("1146"),h=e.n(f),w={name:"Backtest",components:{LayoutList:o["a"]},created:function(){var a=this;Object(c["a"])().then((function(t){t&&t.success&&(a.listStock=t.data)}))},data:function(){return this.EnumFormatType=v["b"],this.api=this.getApi(),this.columnsBacktestResult=_["a"],this.listStrategy=[{id:"RSIStrategy",label:"RSI Strategy",description:"RSI Strategy will execute a buy transaction when RSI goes oversold and a sell transaction when RSI goes overbought"},{id:"BollingerBandsStrategy",label:"Bollinger Bands Strategy",description:"Bollinger Bands Strategy will execute a buy transaction when price closes below the bottom band and a sell transaction when price close above the top band"},{id:"MACDStrategy",label:"MACD Strategy",description:"MACD Strategy will execute a buy transaction when histogram goes from negative to positive and a sell transaction when histogram goes from positive to negative"},{id:"MaCrossoverStrategy",label:"Moving Average Crossover Strategy",description:"Moving Average Crossover Strategy will execute a buy transaction when fast EMA goes above slow EMA and a sell transaction when fast EMA goes below slow EMA"},{id:"ADXDMICrossStrategy",label:"ADX-DMI Cross Strategy",description:"ADX-DMI Cross Strategy will execute a buy transaction when DMI+ goes above DMI- and a sell transaction when DMI+ goes below DMI- and both with ADX is above strong trend level"},{id:"PSARStrategy",label:"Parabolic SAR Strategy",description:"Parabolic SAR Strategy will execute a buy transaction when the PSAR dot goes below price and a sell transaction when the PSAR dot goes above price"},{id:"AroonUpAndDownStrategy",label:"Aroon Up And Down Strategy",description:"Aroon Up And Down Strategy will execute a buy transaction when Aroon Up goes above Aroon Down and a sell transaction when Aroon Up goes below Aroon Down"},{id:"CCIStrategy",label:"Commodity Channel Index Strategy"},{id:"TrixStrategy",label:"Trix Strategy",description:"Trix Strategy will execute a buy transaction when TRIX goes above zero line and a sell transaction when TRIX goes below zero line"},{id:"VortexStrategy",label:"Vortex Strategy",description:"Vortex Strategy will execute a buy transaction when VI+ crosses above VI- and a sell transaction when VI+ crosses below VI-"},{id:"UltimateOscillatorStrategy",label:"Ultimate Oscillator Strategy",description:"Ultimate Oscillator Strategy will execute a buy transaction when Ultimate Oscillator goes oversold and a sell transaction when Ultimate Oscillator goes overbought"},{id:"EnvelopeStrategy",label:"Envelope Strategy",description:"Envelope Strategy will execute a buy transaction when he price moved below the lower range and a sell transaction when when the price moved beyond the upper range"},{id:"RateOfChangeStrategy",label:"Rate Of Change Strategy",description:"Rate Of Change Strategy will execute a buy transaction when Rate Of Change goes above zero line and a sell transaction when Rate Of Change goes below zero line"},{id:"WilliamsRStrategy",label:"Williams %R Strategy",description:"Williams %R Strategy will execute a buy transaction when Williams %R goes oversold and a sell transaction when Williams %R goes overbought"}],{loadingExportResult:!1,loading:!1,hasData:!1,listStock:[],strategy:{},strategy_params:{atr_stop_loss:1.5,atr_scale_out:1},symbol:["HPG","VIC"],pickerOptions:{shortcuts:[{text:"Last week",onClick:function(a){var t=new Date,e=new Date;e.setTime(e.getTime()-6048e5),a.$emit("pick",[e,t])}},{text:"Last month",onClick:function(a){var t=new Date,e=new Date;e.setTime(e.getTime()-2592e6),a.$emit("pick",[e,t])}},{text:"Last 3 months",onClick:function(a){var t=new Date,e=new Date;e.setTime(e.getTime()-7776e6),a.$emit("pick",[e,t])}}]},daterange:[new Date("2021-02-01"),new Date("2021-07-04")],results:[]}},methods:{getApi:function(){return new b},onSelectStrategy:function(a){switch(this.strategy_params={},a.id){case"RSIStrategy":this.strategy_params={period:14,upper:70,lower:30};break;case"WilliamsRStrategy":this.strategy_params={period:14,upper:-20,lower:-80};break;case"RateOfChangeStrategy":this.strategy_params={period:9};break;case"EnvelopeStrategy":this.strategy_params={perc:10};break;case"UltimateOscillatorStrategy":this.strategy_params={p1:7,p2:14,p3:28,upper:70,lower:30};break;case"CCIStrategy":this.strategy_params={period:14};break;case"TrixStrategy":this.strategy_params={period:18};break;case"VortexStrategy":this.strategy_params={period:14};break;case"BollingerBandsAndRSIStrategy":this.strategy_params={bbband_period:20,devfactor:2,rsi_period:14,upper:70,lower:30};break;case"BollingerBandsSidewayStrategy":this.strategy_params={period:20,devfactor:2};break;case"BollingerBandsStrategy":this.strategy_params={period:20,devfactor:2};break;case"MACDStrategy":this.strategy_params={period_me1:12,period_me2:26,period_signal:9};break;case"MaCrossoverStrategy":this.strategy_params={pfast:30,pslow:50};break;case"ADXDMICrossStrategy":this.strategy_params={period:14,adx_strong_trend_level:25};break;case"PSARStrategy":this.strategy_params={period:2,af:.02,afmax:.2};break;case"AroonUpAndDownStrategy":this.strategy_params={period:14};break}this.strategy_params.atr_stop_loss=1.5,this.strategy_params.atr_scale_out=1},showResult:function(){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var e,s,r,i,l,n,o,c,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a.loading=!0,a.hasData=!1,e=a,s=a.symbol,r=a.strategy.id,i=function(a){return a&&a instanceof Date?a.getUTCFullYear()+"/"+(a.getUTCMonth()+1)+"/"+a.getUTCDate():""},l=i(a.daterange[0]),n=i(a.daterange[1]),!s||!r){t.next=10;break}return o="",c={symbol:s,from_date:l,to_date:n,strategy:r,strategy_params:a.strategy_params},t.next=8,a.api.request(o,"post",c);case 8:p=t.sent,p&&p.success&&(a.results=a.prepareResults(p.data),e.hasData=!0);case 10:a.loading=!1;case 11:case"end":return t.stop()}}),t)})))()},prepareResults:function(a){var t,e=[],s=Object(l["a"])(a);try{for(s.s();!(t=s.n()).done;){var r=t.value,n=Object(i["a"])({},r);n.title=this.buildBacktestTitle(r),n.data=this.prepareDisplayData(r.result),e.push(n)}}catch(o){s.e(o)}finally{s.f()}return e},buildBacktestTitle:function(a){var t=this.$utility.formatDate(this.daterange[0]),e=this.$utility.formatDate(this.daterange[1]);return"Backtest result for ".concat(this.strategy.label," of ").concat(a.symbol," symbol from ").concat(t," to ").concat(e)},prepareDisplayData:function(a){var t=this;return(a||[]).map((function(a){return{transaction_date:t.$utility.formatDate(a.transaction_date),transaction_type:a.transaction_type,description:t.getDescription(a),style:t.getRowStyle(a)}}))},getRowStyle:function(a){switch(a.transaction_type){case"SCALE OUT CREATE":return"color: green;";case"STOP LOSS CREATE":return"color: red;"}},getDescription:function(a){var t="";switch(a.transaction_type){case"BUY CREATE":case"SELL CREATE":t="Price close at ".concat(this.$utility.toThousandFilter(a.price),". ATR stop loss level is ").concat(this.$utility.toThousandFilter(Math.round(a.stop_loss_level)),". ATR scale out level is ").concat(this.$utility.toThousandFilter(Math.round(a.scale_out_level)),".");break;case"SCALE OUT CREATE":case"STOP LOSS CREATE":t="Price close at ".concat(this.$utility.toThousandFilter(a.price));break}return t},exportResult:function(){this.loadingExportResult=!0;for(var a=h.a.utils.book_new(),t=["transaction_date","transaction_type","description"],e=0,s=this.results.length;e<s;e++){var r=this.results[e],i=r.symbol;r.title;r.data.forEach((function(a){return delete a.style}));var l=r.data,n=h.a.utils.json_to_sheet(l,{header:t});h.a.utils.book_append_sheet(a,n,i)}h.a.writeFile(a,"backtest_".concat(new Date,".xlsx")),this.loadingExportResult=!1}}},C=w,S=(e("3e7b"),e("2877")),x=Object(S["a"])(C,s,r,!1,null,"dacf7708",null);t["default"]=x.exports},1:function(a,t){},2:function(a,t){},3:function(a,t){},"3e7b":function(a,t,e){"use strict";var s=e("558b"),r=e.n(s);r.a},"558b":function(a,t,e){},"8eb9":function(a,t,e){"use strict";e.d(t,"a",(function(){return n}));e("99af");var s=e("d4ec"),r=e("bee2"),i=e("ade3"),l=e("e32c"),n=function(){function a(){Object(s["a"])(this,a),Object(i["a"])(this,"prefix",null),Object(i["a"])(this,"controller",null),this.service=l["a"]}return Object(r["a"])(a,[{key:"getUrl",value:function(){return this.prefix}},{key:"request",value:function(a,t,e){return this.service.request({url:this.getUrl()+a,method:t,data:e})}},{key:"getAll",value:function(){return this.service.request({url:this.getUrl(),method:"get"})}},{key:"getPaging",value:function(a){}},{key:"getById",value:function(a){var t=this.getFetchUrl(a);return this.service.request({url:t,method:"get"})}},{key:"getFetchUrl",value:function(a){return"".concat(this.getUrl(),"/").concat(a)}},{key:"post",value:function(a){return this.service.request({url:this.getUrl(),method:"post",data:a})}},{key:"put",value:function(a){var t=this.getPayloadId(a),e=this.getPutUrl(t);return this.service.request({url:e,method:"put",data:a})}},{key:"getPutUrl",value:function(a){return"".concat(this.getUrl(),"/").concat(a)}},{key:"getPayloadId",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.getIdProperty instanceof Function?a.getIdProperty():a["id"]}},{key:"delete",value:function(a){var t=this.getPayloadId(a),e=this.getDeleteUrl(t);return this.service.request({url:e,method:"delete"})}},{key:"getDeleteUrl",value:function(a){return"".concat(this.getUrl(),"/").concat(a)}}]),a}()},af64:function(a,t,e){"use strict";e.d(t,"a",(function(){return p}));e("fce8"),e("99af");var s=e("d4ec"),r=e("257e"),i=e("262e"),l=e("2caf"),n=e("ade3"),o=e("8eb9"),c=function(a){Object(i["a"])(e,a);var t=Object(l["a"])(e);function e(){var a;Object(s["a"])(this,e);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return a=t.call.apply(t,[this].concat(l)),Object(n["a"])(Object(r["a"])(a),"prefix","/stock"),a}return e}(o["a"]);function p(){return(new c).request("?paging_filter=0&order_by=symbol","get")}},b34c:function(a,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return i})),e.d(t,"b",(function(){return l})),e.d(t,"e",(function(){return n})),e.d(t,"a",(function(){return o}));var s=e("d5a8"),r=[{dataField:"transaction_date",label:"Date",sortable:"custom",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].DateTime,formatType:s["b"].DateTime},{dataField:"symbol",label:"Symbol",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Link,formatType:s["b"].Text},{dataField:"transaction_type",label:"Type",columnAlign:"center",dataAlign:"center",width:"80",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"entry",label:"Entry price",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"exit",label:"Exit price",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"pnl",label:"PnL",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].SignedTag,formatType:s["b"].AbsPercentage},{dataField:"comments",label:"Comments",columnAlign:"center",dataAlign:"center",minWidth:"200",columnType:s["a"].Text,formatType:s["b"].Text}],i=[{dataField:"created_at",label:"Date",sortable:"custom",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].DateTime,formatType:s["b"].DateTime},{dataField:"description",label:"Description",columnAlign:"center",dataAlign:"center",minWidth:"300",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"gmail",label:"Gmail",columnAlign:"center",dataAlign:"center",width:"300",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"send_gmail",label:"Send Gmail",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Boolean,formatType:s["b"].Text}],l=(s["a"].Link,s["b"].Text,s["a"].SignedTag,s["b"].AbsPercentage,[{dataField:"stock_date",label:"Date",sortable:"custom",columnAlign:"center",dataAlign:"center",width:"120",columnType:s["a"].DateTime,formatType:s["b"].DateTime},{dataField:"symbol",label:"Symbol",columnAlign:"center",dataAlign:"center",width:"120",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"open_price",label:"Open",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"high_price",label:"High",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"low_price",label:"Low",columnAlign:"center",dataAlign:"center",width:"100",columnType:s["a"].Number,formatType:s["b"].Number},{dataField:"close_price",label:"Close",columnAlign:"center",dataAlign:"center",minWidth:"100",columnType:s["a"].Number,formatType:s["b"].Number}]),n=[{dataField:"symbol",label:"Symbol",columnAlign:"center",dataAlign:"center",minWidth:"120",columnType:s["a"].Link,formatType:s["b"].Text}],o=[{dataField:"transaction_date",label:"Transaction Date",columnAlign:"center",dataAlign:"center",width:"150",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"transaction_type",label:"Transaction Type",columnAlign:"center",dataAlign:"center",width:"250",columnType:s["a"].Text,formatType:s["b"].Text},{dataField:"description",label:"Description",columnAlign:"center",dataAlign:"center",minWidth:"200",columnType:s["a"].Text,formatType:s["b"].Text}]}}]);