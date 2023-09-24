import React from 'react';
import ReactECharts from 'echarts-for-react';  // or var ReactECharts = require('echarts-for-react');

<ReactECharts
    option={this.getOption()}
    notMerge={true}
    lazyUpdate={true}
    theme={"theme_name"}
    onChartReady={this.onChartReadyCallback}
    onEvents={EventsDict}
    opts={ }
/>