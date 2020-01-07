import React, { useEffect } from 'react';
import { Card, Icon, Row, Col, Divider, Tag, Timeline, Collapse, Avatar, Carousel } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ReactEcharts from 'echarts-for-react'
import { connect } from 'dva'
import logo from '../../assets/welcome.JPG';
import styles from './welcome.less'

const Welcome = props => {
  const { iconInfo, dispatch } = props
  const IconFont = Icon.createFromIconfontCN({ // iconfront 字体导入
    scriptUrl: '//at.alicdn.com/t/font_1538571_85b1kn6i8hv.js',
  })

  useEffect(() => {
    dispatch({
      type: 'welcome/fetchIconInfo',
    })
  }, [])


  return (
  <PageHeaderWrapper title="ND学习时间" subTitle="我又不是个薯憨憨，当然会选择做前端">
    {/* <img alt="welcome" width={1150} src={logo} className={styles.imgBlur} /> */}
    <Card >
      <Row gutter={24}>
        <Col span={8} >
          <Card bodyStyle={{ padding: 18 }} bordered={false}>
            <div style={{ textAlign: 'center' }}>
              <Avatar size="large" icon="user" className={styles.customAvatar}></Avatar>
              <p className={styles.firstTitle}> ND </p>
              <p className={styles.contentTxt}> 艰苦朴素，求真务实 </p>
              <p className={styles.contentTxt} style={{ marginBottom: 10 }}>
                男<Divider type="vertical" />
                24岁<Divider type="vertical" />
                硕士<Divider type="vertical" />
                中共党员
              </p>
            </div>
            <Divider style={{ margin: 0 }} dashed/>
            <Row gutter={24} style={{ margin: '10px 0' }}>
              <Col style={{ margin: '0 0 3px 0' }}>
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
              <Col style={{ margin: '3px 0' }}>
                <IconFont type="icon-_youxiang_fill" /> &nbsp;18202724242
              </Col>
              <Divider dashed style={{ margin: '10px 0' }}/>
              <p style={{ textAlign: 'center', fontSize: 20, color: '#FF8C00', margin: '40px 0' }}>求职意向：前端开发</p>
              <Divider dashed style={{ margin: '10px 0' }}/>
              <Col style={{ margin: '3px 0' }}>
                <p className={styles.secondTitle} style={{ textAlign: 'center' }}>前端技能</p>
                本人熟练掌握 HTML5、CSS3、
                JavaScript 前端开发技术；了解 Vue 及其
                相关组件；有使用 React 的开发经验；了
                解 ES6 规范、HTTP 协议；有使用版本控
                制工具 Git 的经验； 熟悉 Chrome 浏览器
                调试工具；有1年以上 ASP.NET MVC 项目开发经验
              </Col>
              {/* <Col style={{ margin: '3px 0' }}>
                <Tag color="purple">前端开发</Tag>
                <Tag color="magenta">React</Tag>
                <Tag color="red">Antd</Tag>
                <Tag color="volcano">JavaScript</Tag>
              </Col>
              <Col style={{ margin: '6px 0' }}>
                <Tag color="gold">git</Tag>
                <Tag color="geekblue">散装Ps、Pr</Tag>
                <Tag color="blue">业余Vlog</Tag>
                <Tag color="cyan">足球小将</Tag>
              </Col> */}
              <Divider dashed style={{ margin: '10px 0' }}/>
              <p className={styles.secondTitle} style={{ textAlign: 'center', margin: 0 }}>校园经历</p>
              <Collapse bordered={false} style={{ border: 0 }} className={styles.customCollapse} >
                <Collapse.Panel header="2013 中国地质大学(武汉)地理信息科学" key="1" style={{ border: 0 }}>
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
        <Col span={16}>
          <Card bordered={false}>
            <p className={styles.secondTitle}>教育背景</p>
            <p className={styles.thirdTitle}>2013.09-2017.06 中国地质大学(武汉) 地理信息科学</p>
            <span>主修C++、地理信息系统原理、地图可视化、WebGIS、地理信息工程等相关课程，通过英语四六级考试，无挂科记录。</span>
            <p className={styles.thirdTitle}>2017.09-至今 中国海洋大学 测绘工程</p>
            <span>主要研究方向为WebGIS与出租车轨迹数据信息提取，在中国海洋大学学报自然科学版发表题为《基于聚类算法的出租车载客点时空分布特征探究》一文</span>
          </Card>
          <Card bordered={false}>
            <p className={styles.secondTitle}>实习经历</p>
            <p className={styles.thirdTitle}>2019.11.01-至今 小米 大数据-技术平台部 前端开发实习生</p>
            <span>
              实习内容：基于React、UmiJS、DvaJS、Ant Design的技术栈 ，涉及了3个 BS
              系统中多个页面的开发及bug调试；其中独自梳理需求逻辑并实现了4个页面，与后端完成联调并最终上线；尝试封装了表单验证组件、图表（折线图）组件，优化了代码结构提升开发效率。
            </span>
          </Card>
          <Card bordered={false}>
            <p className={styles.secondTitle}>项目经历</p>
            <p className={styles.thirdTitle}>2019.06-2019.09 vue demo APP</p>
            <span>
              项目描述：该demo APP主要以实践vue代码为主，设计编写了旅行游记、图片
              分享、留言评论、闲置物品、购物车五个功能模块。负责内容：利用webpack手
              动构建vue项目，使用.vue组件模板文件创建子功能模块，结合vue-router实现
              页面路由匹配跳转、vuex实现多组件间共享购物车数据，结合Mint-UI优化界面
              显示效果，并利用git进行代码版本管理。项目技术：vue、webpack、git、Min
              t-UI
            </span>
            <p className={styles.thirdTitle}>2018.08-2019.03 海大校园公共服务系统</p>
            <span>
            项目描述：该项目采用了ASP.NET Core框架与前后端分离的MVC开发模式，后
            端利用C#语言开发、SQL Server数据库进行数据存储，结合前端开源地图类库，
            将地图影像与建筑、管线、维修、基建信息相结合，实现了对数据展示、定位、
            查询、编辑、统计与分析的功能。负责内容：在本项目中负责项目的启动、分析
            、实施、部署及测试，完成了项目五大模块的开发并进行着持续维护迭代。
            项目技术：C#、JavaScript 、JQuery、OpenLayers、SQL Server
            </span>
            <p className={styles.thirdTitle}>2017.11-2018.03 植物物候观测系统</p>
            <span>
              项目描述：该项目利用分布在全国多个观测站点采集到的植物物候数据，分析全
              国范围内环境变量对植物生长的影响程度。负责内容：在本项目中负责前端站点
              模块、个人足迹模块的设计与开发，实现了Web端仿iOS地图相册功能，与后端
              数据接口对接后完成了对近50年来全国44个观测站点的近50种植物物候数据的可
              视化。项目技术：C#、JavaScript 、Bootstrap、高德地图JS API 、ECharts
            </span>
          </Card>
          <Card bordered={false}>
            <Carousel autoplay style={{ height: 220 }}>
              <div>
                {iconInfo && iconInfo.data ? iconInfo.data.map(item =>
                  <span key={item.key}>
                    <Avatar size="large" style={{ backgroundColor: '#FFF' }} icon={<IconFont type={item.type} />} key={item.key}/>
                    <Tag>{item.info}</Tag>
                  </span>) : null
                }
              </div>
            </Carousel>
          </Card>
        </Col>
      </Row>
    </Card>

  </PageHeaderWrapper>)
}

export default connect(({ welcome }) => ({
  iconInfo: welcome.iconInfo,
}))(Welcome)
