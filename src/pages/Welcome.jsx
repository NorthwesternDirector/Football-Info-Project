import React from 'react';
import { Card, Icon, Row, Col, Divider, Tag, Timeline, Collapse } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import logo from '../assets/welcome.JPG';

export default () => {
  const IconFont = Icon.createFromIconfontCN({ // iconfront 字体导入
    scriptUrl: '//at.alicdn.com/t/font_1538571_hi4e0viilxc.js',
  })
  return (
  <PageHeaderWrapper title="ND学习时间" subTitle="我又不是个薯憨憨，当然会选择做前端">
    <Row gutter={24}>
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
              <IconFont type="icon-daxue" /> &nbsp;中国海洋大学-信息学院-测绘工程专业
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
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card bodyStyle={{ padding: '10px 0' }}>
          <Collapse bordered={false} style={{ border: 0 }}>
            <Collapse.Panel header="2013 中国地质大学（武汉）地理信息科学" key="1" style={{ border: 0 }}>
              <Timeline style={{ marginLeft: '25px' }}>
              <Timeline.Item dot={<IconFont type="icon-aixin" />}> 脱离单生狗 2015-04-25</Timeline.Item>
                <Timeline.Item dot={<IconFont type="icon-xuesheng" />}> 院足球队队长 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<IconFont type="icon-xuesheng" />}> 团学联副主席 2016-09-01</Timeline.Item>
                <Timeline.Item dot={<IconFont type="icon-zuqiu-copy" />}> 全国大学生七人制足球赛湖北省季军</Timeline.Item>
              </Timeline>
            </Collapse.Panel>
          </Collapse>
          <Collapse bordered={false} style={{ border: 0 }}>
            <Collapse.Panel header="2017 中国海洋大学 测绘工程" key="2" style={{ border: 0 }}>
              <Timeline style={{ marginLeft: '25px' }}>
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
        </Card>
      </Col>
    </Row>

  </PageHeaderWrapper>)
}
