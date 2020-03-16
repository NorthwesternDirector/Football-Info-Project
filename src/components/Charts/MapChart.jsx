import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { defaultRenderLogo } from '@ant-design/pro-layout/lib/SiderMenu/SiderMenu'

const MapChart = ({
  chartHeight = 400,
}) => {
  const option = {
    title: {
        subtext: '全国确诊人数分布',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    visualMap: {
        min: 0,
        max: 4000,
        left: 'left',
        top: '80',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
    },
    series: [
      {
        name: '确诊人数',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            normal: {
                show: true,
            },
            emphasis: {
                show: true,
            },
        },
        layoutCenter: ['52%', '50%'],
        layoutSize: chartHeight,
        data: [
          { name: '湖北', value: 67466 },
          { name: '广东', value: 1350 },
          { name: '河南', value: 1272 },
          { name: '浙江', value: 1213 },
          { name: '湖南', value: 1018 },
          { name: '安徽', value: 990 },
          { name: '江西', value: 935 },
          { name: '山东', value: 758 },
          { name: '江苏', value: 631 },
          { name: '重庆', value: 575 },
          { name: '四川', value: 538 },
          { name: '黑龙江', value: 480 },
          { name: '北京', value: 399 },
          { name: '上海', value: 335 },
          { name: '河北', value: 311 },
          { name: '福建', value: 293 },
          { name: '广西', value: 252 },
          { name: '陕西', value: 245 },
          { name: '云南', value: 174 },
          { name: '海南', value: 168 },
          { name: '贵州', value: 146 },
          { name: '天津', value: 135 },
          { name: '山西', value: 132 },
          { name: '辽宁', value: 121 },
          { name: '吉林', value: 93 },
          { name: '甘肃', value: 91 },
          { name: '香港', value: 79 },
          { name: '新疆', value: 76 },
          { name: '内蒙古', value: 75 },
          { name: '宁夏', value: 71 },
          { name: '台湾', value: 30 },
          { name: '青海', value: 18 },
          { name: '澳门', value: 10 },
          { name: '西藏', value: 1 },
        ],
      },
    ],
  }
  return <ReactEcharts option={option} style={{ height: chartHeight }}></ReactEcharts>
}
export default MapChart
