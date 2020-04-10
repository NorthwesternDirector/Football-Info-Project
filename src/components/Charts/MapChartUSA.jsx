import React from 'react'
import ReactEcharts from 'echarts-for-react'
import 'echarts/map/js/usa'
import { defaultRenderLogo } from '@ant-design/pro-layout/lib/SiderMenu/SiderMenu'

const MapChartUSA = ({
  chartHeight = 450,
}) => {
  const option = {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter (params) {
          let value = (`${params.value}`).split('.');
          value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
          return `${params.seriesName}<br/>${params.name}: ${value}`;
      },
    },
    visualMap: {
      left: 'right',
      bottom: 0,
      min: 0,
      max: 60000,
      inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
      },
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
    },
    series: [
      {
        name: 'USA 确诊人数',
        type: 'map',
        map: '美国', // map/mapType都可，名称由封装地图文件设置
        roam: false,
        emphasis: {
          label: {
            show: true,
          },
        },
        // 文本位置修正
        textFixed: {
          Alaska: [20, -20],
        },
        layoutCenter: ['44%', '60%'],
        layoutSize: chartHeight,
        data: [
          { name: 'Alabama', value: 2838 },
          { name: 'Alaska', value: 235 },
          { name: 'Arizona', value: 3018 },
          { name: 'Arkansas', value: 1146 },
          { name: 'California', value: 20212 },
          { name: 'Colorado', value: 6202 },
          { name: 'Connecticut', value: 9784 },
          { name: 'Delaware', value: 1209 },
          { name: 'District of Columbia', value: 1523 },
          { name: 'Florida', value: 16826 },
          { name: 'Georgia', value: 10885 },
          { name: 'Hawaii', value: 442 },
          { name: 'Idaho', value: 1353 },
          { name: 'Illinois', value: 16422 },
          { name: 'Indiana', value: 6351 },
          { name: 'Iowa', value: 1270 },
          { name: 'Kansas', value: 1106 },
          { name: 'Kentucky', value: 1452 },
          { name: 'Louisiana', value: 18283 },
          { name: 'Maine', value: 560 },
          { name: 'Maryland', value: 6185 },
          { name: 'Massachusetts', value: 18941 },
          { name: 'Michigan', value: 21504 },
          { name: 'Minnesota', value: 1242 },
          { name: 'Mississippi', value: 2260 },
          { name: 'Missouri', value: 3539 },
          { name: 'Montana', value: 354 },
          { name: 'Nebraska', value: 567 },
          { name: 'Nevada', value: 2456 },
          { name: 'New Hampshire', value: 819 },
          { name: 'New Jersey', value: 51027 },
          { name: 'New Mexico', value: 989 },
          { name: 'New York', value: 161504 },
          { name: 'North Carolina', value: 3823 },
          { name: 'North Dakota', value: 269 },
          { name: 'Ohio', value: 5512 },
          { name: 'Oklahoma', value: 1684 },
          { name: 'Oregon', value: 1321 },
          { name: 'Pennsylvania', value: 18546 },
          { name: 'Rhode Island', value: 1727 },
          { name: 'South Carolina', value: 2792 },
          { name: 'South Dakota', value: 447 },
          { name: 'Tennessee', value: 4634 },
          { name: 'Texas', value: 11426 },
          { name: 'Utah', value: 1976 },
          { name: 'Vermont', value: 628 },
          { name: 'Virginia', value: 4042 },
          { name: 'Washington', value: 9740 },
          { name: 'West Virginia', value: 523 },
          { name: 'Wisconsin', value: 2885 },
          { name: 'Wyoming', value: 239 },
          { name: 'Puerto Rico', value: 0 },
        ],
      },
    ],
};
  return <ReactEcharts option={option} style={{ height: chartHeight }}></ReactEcharts>
}
export default MapChartUSA
