import React, { useEffect, useRef } from 'react';
import { Card, Icon, Row, Col, Divider, Tag, Timeline, Collapse } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ReactEcharts from 'echarts-for-react'
import { useLocation } from 'react-router';
import logo from '../assets/welcome.JPG';
import styles from './welcome.less'

export default () => {
  const IconFont = Icon.createFromIconfontCN({ // iconfront 字体导入
    scriptUrl: '//at.alicdn.com/t/font_1538571_s85tihku19j.js',
  })

  const animals = [
    // bear
    {
    nodes: [
        { x: 249, y: 105, name: 's0' },
        { x: 285, y: 136, name: 's1' },
        { x: 314, y: 122, name: 's2' },
        { x: 283, y: 66, name: 's3' },
        { x: 338, y: 10, name: 's4' },
        { x: 394, y: 2, name: 's5' },
        { x: 366, y: 77, name: 's6' },
        { x: 392, y: 122, name: 's7' },
        { x: 511, y: 52, name: 's8' },
        { x: 488, y: 90, name: 's9' },
        { x: 599, y: 125, name: 's10' },
        { x: 477, y: 130, name: 's11' },
        { x: 506, y: 59, name: 's12' },
        { x: 591, y: 127, name: 's13' },
        { x: 623, y: 201, name: 's14' },
        { x: 617, y: 200, name: 's15' },
        { x: 612, y: 317, name: 's16' },
        { x: 614, y: 296, name: 's17' },
        { x: 632, y: 362, name: 's18' },
        { x: 614, y: 528, name: 's19' },
        { x: 616, y: 667, name: 's20' },
        { x: 570, y: 668, name: 's21' },
        { x: 587, y: 610, name: 's22' },
        { x: 522, y: 478, name: 's23' },
        { x: 536, y: 508, name: 's24' },
        { x: 443, y: 568, name: 's25' },
        { x: 468, y: 652, name: 's26' },
        { x: 412, y: 655, name: 's27' },
        { x: 411, y: 463, name: 's28' },
        { x: 439, y: 350, name: 's29' },
        { x: 548, y: 369, name: 's30' },
        { x: 455, y: 446, name: 's31' },
        { x: 485, y: 421, name: 's32' },
        { x: 477, y: 408, name: 's33' },
        { x: 530, y: 315, name: 's34' },
        { x: 430, y: 309, name: 's35' },
        { x: 370, y: 336, name: 's36' },
        { x: 353, y: 405, name: 's37' },
        { x: 325, y: 336, name: 's38' },
        { x: 385, y: 278, name: 's39' },
        { x: 408, y: 205, name: 's40' },
        { x: 454, y: 207, name: 's41' },
        { x: 437, y: 149, name: 's42' },
        { x: 405, y: 140, name: 's43' },
    ],
    links: [
        { source: 's0', target: 's1' },
        { source: 's0', target: 's2' },
        { source: 's0', target: 's3' },
        { source: 's1', target: 's2' },
        { source: 's2', target: 's3' },
        { source: 's2', target: 's6' },
        { source: 's2', target: 's7' },
        { source: 's3', target: 's6' },
        { source: 's3', target: 's4' },
        { source: 's4', target: 's5' },
        { source: 's4', target: 's6' },
        { source: 's5', target: 's6' },
        { source: 's5', target: 's8' },
        { source: 's5', target: 's9' },
        { source: 's6', target: 's7' },
        { source: 's6', target: 's9' },
        { source: 's7', target: 's9' },
        { source: 's8', target: 's9' },
        { source: 's9', target: 's11' },
        { source: 's10', target: 's11' },
        { source: 's10', target: 's12' },
        { source: 's11', target: 's42' },
        { source: 's11', target: 's14' },
        { source: 's11', target: 's16' },
        { source: 's11', target: 's34' },
        { source: 's11', target: 's41' },
        { source: 's11', target: 's42' },
        { source: 's13', target: 's14' },
        { source: 's15', target: 's16' },
        { source: 's16', target: 's34' },
        { source: 's16', target: 's31' },
        { source: 's17', target: 's18' },
        { source: 's18', target: 's19' },
        { source: 's18', target: 's23' },
        { source: 's19', target: 's20' },
        { source: 's19', target: 's21' },
        { source: 's19', target: 's23' },
        { source: 's20', target: 's21' },
        { source: 's23', target: 's22' },
        { source: 's23', target: 's25' },
        { source: 's23', target: 's30' },
        { source: 's23', target: 's32' },
        { source: 's24', target: 's25' },
        { source: 's26', target: 's27' },
        { source: 's26', target: 's28' },
        { source: 's27', target: 's28' },
        { source: 's28', target: 's29' },
        { source: 's29', target: 's33' },
        { source: 's29', target: 's34' },
        { source: 's29', target: 's7' },
        { source: 's31', target: 's34' },
        { source: 's34', target: 's7' },
        { source: 's35', target: 's36' },
        { source: 's36', target: 's40' },
        { source: 's36', target: 's37' },
        { source: 's37', target: 's38' },
        { source: 's38', target: 's39' },
        { source: 's41', target: 's42' },
        { source: 's42', target: 's43' },
    ],
    },
    // oryx,
    {
    nodes: [
        { x: 381, y: 36, name: 's0' },
        { x: 502, y: 15, name: 's1' },
        { x: 536, y: 23, name: 's2' },
        { x: 683, y: 37, name: 's3' },
        { x: 691, y: 57, name: 's4' },
        { x: 752, y: 129, name: 's5' },
        { x: 788, y: 97, name: 's6' },
        { x: 733, y: 147, name: 's7' },
        { x: 704, y: 110, name: 's8' },
        { x: 711, y: 151, name: 's9' },
        { x: 701, y: 152, name: 's10' },
        { x: 742, y: 147, name: 's11' },
        { x: 759, y: 144, name: 's12' },
        { x: 803, y: 185, name: 's13' },
        { x: 856, y: 231, name: 's14' },
        { x: 850, y: 259, name: 's15' },
        { x: 766, y: 217, name: 's16' },
        { x: 741, y: 237, name: 's17' },
        { x: 843, y: 256, name: 's18' },
        { x: 769, y: 242, name: 's19' },
        { x: 664, y: 421, name: 's20' },
        { x: 611, y: 245, name: 's21' },
        { x: 608, y: 440, name: 's22' },
        { x: 636, y: 431, name: 's23' },
        { x: 612, y: 605, name: 's24' },
        { x: 605, y: 530, name: 's25' },
        { x: 590, y: 608, name: 's26' },
        { x: 582, y: 493, name: 's27' },
        { x: 500, y: 363, name: 's28' },
        { x: 463, y: 245, name: 's29' },
        { x: 542, y: 221, name: 's30' },
        { x: 302, y: 225, name: 's31' },
        { x: 218, y: 296, name: 's32' },
        { x: 339, y: 400, name: 's33' },
        { x: 355, y: 381, name: 's34' },
        { x: 411, y: 468, name: 's35' },
        { x: 318, y: 418, name: 's36' },
        { x: 285, y: 607, name: 's37' },
        { x: 268, y: 477, name: 's38' },
        { x: 274, y: 452, name: 's39' },
        { x: 233, y: 605, name: 's40' },
        { x: 208, y: 505, name: 's41' },
        { x: 219, y: 388, name: 's42' },
        { x: 555, y: 451, name: 's43' },
        { x: 608, y: 390, name: 's44' },
    ],
    links: [
        { source: 's0', target: 's1' },
        { source: 's0', target: 's2' },
        { source: 's1', target: 's3' },
        { source: 's1', target: 's4' },
        { source: 's3', target: 's5' },
        { source: 's3', target: 's7' },
        { source: 's6', target: 's12' },
        { source: 's6', target: 's7' },
        { source: 's7', target: 's8' },
        { source: 's8', target: 's9' },
        { source: 's10', target: 's12' },
        { source: 's10', target: 's17' },
        { source: 's10', target: 's21' },
        { source: 's11', target: 's17' },
        { source: 's12', target: 's13' },
        { source: 's13', target: 's14' },
        { source: 's13', target: 's17' },
        { source: 's14', target: 's15' },
        { source: 's14', target: 's16' },
        { source: 's15', target: 's16' },
        { source: 's17', target: 's18' },
        { source: 's17', target: 's20' },
        { source: 's17', target: 's21' },
        { source: 's19', target: 's20' },
        { source: 's20', target: 's21' },
        { source: 's20', target: 's22' },
        { source: 's21', target: 's25' },
        { source: 's21', target: 's28' },
        { source: 's21', target: 's29' },
        { source: 's21', target: 's30' },
        { source: 's23', target: 's24' },
        { source: 's24', target: 's25' },
        { source: 's25', target: 's26' },
        { source: 's25', target: 's28' },
        { source: 's26', target: 's27' },
        { source: 's28', target: 's29' },
        { source: 's28', target: 's34' },
        { source: 's28', target: 's35' },
        { source: 's29', target: 's30' },
        { source: 's29', target: 's31' },
        { source: 's29', target: 's32' },
        { source: 's29', target: 's33' },
        { source: 's31', target: 's32' },
        { source: 's32', target: 's33' },
        { source: 's32', target: 's42' },
        { source: 's33', target: 's41' },
        { source: 's33', target: 's42' },
        { source: 's34', target: 's35' },
        { source: 's35', target: 's36' },
        { source: 's35', target: 's43' },
        { source: 's36', target: 's37' },
        { source: 's37', target: 's38' },
        { source: 's39', target: 's40' },
        { source: 's40', target: 's41' },
        { source: 's41', target: 's42' },
        { source: 's44', target: 's28' }],
      },
    ]

  const option = {
    series: [
      {
        name: 'animals',
        type: 'graph',
        data: animals[1].nodes,
        links: animals[1].links,
        lineStyle: {
            normal: {
                width: 2,
                curveness: 0,
                color: '#333',
            },
        },
        itemStyle: {
            normal: {
                color: '#555',
            },
        },
        silent: true,
        symbolSize: 4,
      },
    ],
    animationDuration: 1500,
    animationDurationUpdate: 1500,
  }

  const chartsRef = useRef()
  const index = { index: 0 }

  useEffect(() => {
    setInterval(() => {
      if (index[index] === 0) {
        option.series[0].data = animals[1].nodes
        option.series[0].links = animals[1].links
        setTimeout(() => {
          option.series[0].symbolSize = 4
          chartsRef.current.getEchartsInstance().setOption(option)
          index[index] = 1
      }, 1000)
      } else {
        option.series[0].data = animals[0].nodes
        option.series[0].links = [];
        chartsRef.current.getEchartsInstance().setOption(option)
        setTimeout(() => {
          option.series[0].links = animals[0].links
          option.series[0].symbolSize = 4
          chartsRef.current.getEchartsInstance().setOption(option)
          index[index] = 0
        }, 1000)
        // option.series[0].data = animals[0].nodes
        // option.series[0].links = animals[0].links
        // option.series[0].symbolSize = 4
        // chartsRef.current.getEchartsInstance().setOption(option)
      }
    }, 5000)
  }, [])


  return (
  <PageHeaderWrapper title="ND学习时间" subTitle="我又不是个薯憨憨，当然会选择做前端">
    <Row gutter={24}>
      <Col span={8}>
        <ReactEcharts theme="theme" option={option} style={{ height: '500px' }} ref={chartsRef}></ReactEcharts>
      </Col>
      <Col span={8}>
        <Card
        bodyStyle={{ padding: 0 }}
        cover={<img alt="welcome" src={logo}/>}
        >
          <Row gutter={24} style={{ margin: '10px 0' }}>
            <Col style={{ color: '#999', fontSize: '26px', textAlign: 'center' }}>
              <Icon type="smile" theme="twoTone" ></Icon>
            </Col>
            <Col style={{ color: '#999', fontSize: '16px', textAlign: 'center' }}>
              {'艰苦朴素，求真务实'}
            </Col>
            <Col style={{ margin: '15px 0 3px 0' }}>
              <IconFont type="icon-zhiwei2" /> &nbsp;前端开发
            </Col>
            <Col style={{ margin: '3px 0' }}>
              <IconFont type="icon-xiaomi" /> &nbsp;大数据部-技术平台部-web技术组实习生
            </Col>
            <Col style={{ margin: '3px 0' }}>
              <IconFont type="icon-daxue" /> &nbsp;中国海洋大学--测绘工程-硕士
            </Col>
            <Col style={{ margin: '3px 0' }}>
              <IconFont type="icon-daxue-copy" /> &nbsp;中国地质大学(武汉)-地理信息科学-本科
            </Col>
            <Col style={{ margin: '3px 0' }}>
              <IconFont type="icon-icon-test-copy" /> &nbsp;中国 山东·青岛
            </Col>
            <Col style={{ margin: '3px 0' }}>
              <IconFont type="icon-_youxiang_fill" /> &nbsp;fanshundee@126.com
            </Col>
            <Divider dashed style={{ margin: '10px' }}/>
            <Col style={{ margin: '3px 0' }}>
              <Tag color="purple">前端开发</Tag>
              <Tag color="magenta">React</Tag>
              <Tag color="red">Antd</Tag>
              <Tag color="volcano">JavaScript</Tag>
              <Tag color="orange">HTML</Tag>
            </Col>
            <Col style={{ margin: '3px 0' }}>
              <Tag color="gold">git</Tag>
              <Tag color="geekblue">散装Ps、Pr</Tag>
              <Tag color="blue">业余Vlog</Tag>
              <Tag color="cyan">足球小将</Tag>
            </Col>
            <Divider dashed style={{ margin: '10px' }}/>
            <Collapse bordered={false} style={{ border: 0 }} className={styles.customCollapse} >
              <Collapse.Panel header="2013 中国地质大学（武汉）地理信息科学" key="1" style={{ border: 0 }}>
                <Timeline style={{ marginLeft: '25px' }} className={ styles.customTimeline }>
                <Timeline.Item dot={<IconFont type="icon-aixin" />}> 脱离单生狗 2015-04-25</Timeline.Item>
                  <Timeline.Item dot={<IconFont type="icon-xuesheng" />}> 院足球队队长 2015-09-01</Timeline.Item>
                  <Timeline.Item dot={<IconFont type="icon-xuesheng" />}> 团学联副主席 2016-09-01</Timeline.Item>
                  <Timeline.Item dot={<IconFont type="icon-zuqiu-copy" />}> 全国大学生七人制足球赛湖北省季军</Timeline.Item>
                </Timeline>
              </Collapse.Panel>
            </Collapse>
            <Collapse bordered={false} style={{ border: 0 }} >
              <Collapse.Panel header="2017 中国海洋大学 测绘工程" key="1" style={{ border: 0 }}>
                <Timeline style={{ marginLeft: '25px' }} className={ styles.customTimeline }>
                <Timeline.Item dot={<IconFont type="icon-zuqiu-copy" />}> 17-18海大“校庆杯”足球赛冠军</Timeline.Item>
                  <Timeline.Item dot={<IconFont type="icon-gongzuo" />}> 植物物候观测系统web地图模块开发</Timeline.Item>
                  <Timeline.Item dot={<IconFont type="icon-xuesheng" />}> 校足球队队长 2018-07-01</Timeline.Item>
                  <Timeline.Item dot={<IconFont type="icon-gongzuo" />}> 校园公共服务系统开发</Timeline.Item>
                  <Timeline.Item dot={<IconFont type="icon-gongzuozheng" />}> 青勘院实习 2018-10-10</Timeline.Item>
                  <Timeline.Item dot={<IconFont type="icon-zuqiu-copy" />}> 18-19海大“校庆杯”足球赛冠军</Timeline.Item>
                  <Timeline.Item dot={<IconFont type="icon-gongzuo" />}> 档案馆web地图模块开发</Timeline.Item>
                  <Timeline.Item dot={<IconFont type="icon-lunwenfabiaoqingkuang" />}> 中国海洋大学学报（自然科学版）《基于聚类算法的出租车载客点时空分布特征研究》</Timeline.Item>
                  <Timeline.Item dot={<IconFont type="icon-gongzuozheng" /> } style={{ minHeight: '21' }}> 小米实习 2019-11-04</Timeline.Item>
                </Timeline>
              </Collapse.Panel>
            </Collapse>
          </Row>
        </Card>
      </Col>
    </Row>

  </PageHeaderWrapper>)
}
