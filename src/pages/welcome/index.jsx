import React, { useState, useEffect } from 'react';
import { Card, Icon, Row, Col, Divider, Tag, Timeline, Collapse, Avatar, Carousel, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva'
import styles from './welcome.less'
import Banner from '../../components/AnimationControls/Banner'
import img from '../../assets/logoImg.png'

const Welcome = props => {
  const { iconInfo, dispatch } = props
  const IconFont = Icon.createFromIconfontCN({ // iconfront 字体导入
    scriptUrl: '//at.alicdn.com/t/font_1538571_tvezw8urqh.js',
  })
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    dispatch({
      type: 'welcome/fetchIconInfo',
    })
  }, [])

  return (
  <PageHeaderWrapper title="ND学习时间" subTitle="我又不是个薯憨憨，当然会选择做前端">
    {/* <img alt="welcome" width={1150} src={logo} className={styles.imgBlur} /> */}
    <Avatar size="large" src={img} className={styles.customAvatar} onClick={() => setFlag(!flag)}/>
    <Banner flag={flag}></Banner>
    <Row style={{ height: 500 }}>
      <div className="haha" style={{ width: '3rem', height: '3rem', backgroundColor: '#CCC' }} data-x={140}>
        <IconFont type="icon-zhizhuxia" className={styles.customAnticon}/>
      </div>
      <div className="haha" style={{ width: '3rem', height: '3rem', backgroundColor: '#CCC' }} data-x={340}>
        <IconFont type="icon-fuchouzhelianmeng-meiguoduichang" className={styles.customAnticon}/>
      </div>
      <div className="haha" style={{ width: '3rem', height: '3rem', backgroundColor: '#CCC' }} data-x={540}>
        <IconFont type="icon-fuchouzhelianmeng-gangtiexia" className={styles.customAnticon}/>
      </div>
      <div className="haha" style={{ width: '3rem', height: '3rem', backgroundColor: '#CCC' }} data-x={740}>
        <IconFont type="icon-qiyiboshi" className={styles.customAnticon}/>
      </div>

    </Row>
    <Card >
      <Row gutter={24}>
        <Col span={8} >
          <Card bodyStyle={{ padding: 18 }} bordered={false}>
            <div style={{ textAlign: 'center' }}>
              <Avatar size="large" src={img} className={styles.customAvatar}></Avatar>
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
                <IconFont type="icon-xiaomi" /> &nbsp;大数据部-技术平台-web前端组实习生
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
                <IconFont type="icon-telephone" /> &nbsp;18202724242
              </Col>
              <Divider dashed style={{ margin: '10px 0' }}/>
              <p style={{ textAlign: 'center', fontSize: 20, color: '#FF8C00', margin: '40px 0' }}>求职意向：前端开发</p>
              <Divider dashed style={{ margin: '10px 0' }}/>
              <Col style={{ margin: '3px 0' }}>
                <p className={styles.secondTitle} style={{ textAlign: 'center' }}>
                  <Icon type="experiment" theme="twoTone" style={{ marginRight: 4 }}/>前端技能
                </p>
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
              <p className={styles.secondTitle} style={{ textAlign: 'center', margin: 0 }}>
                <Icon type="bank" theme="twoTone" style={{ marginRight: 4 }}/>校园经历
              </p>
              <Collapse bordered={false} style={{ border: 0 }} className={styles.customCollapse} >
                <Collapse.Panel header="2013 中国地质大学(武汉)地理信息科学" key="1" style={{ border: 0 }}>
                  <Timeline style={{ marginLeft: '25px' }} className={ styles.customTimeline }>
                    <Timeline.Item dot={<IconFont type="icon-xuesheng" />}> 院足球队队长 2015/09/01</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-jiangbei" />}> “地大英才” 体育之星，校级优秀个人 2015/12/01</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-zuqiu-copy" />}> 全国大学生七人制足球赛湖北省季军 2016/04/29</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-xuesheng" />}> 团学联副主席 2016/06/01</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-jiangbei" />}> 校级优秀毕业生 2017/06/01</Timeline.Item>
                  </Timeline>
                </Collapse.Panel>
              </Collapse>
              <Collapse bordered={false} style={{ border: 0 }} >
                <Collapse.Panel header="2017 中国海洋大学 测绘工程" key="1" style={{ border: 0 }}>
                  <Timeline style={{ marginLeft: '25px' }} className={ styles.customTimeline }>
                  <Timeline.Item dot={<IconFont type="icon-zuqiu-copy" />}> 17-18海大“校庆杯”足球赛冠军</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-gongzuo" />}> 植物物候观测系统web地图模块开发</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-xuesheng" />}> 校足球队队长 2018/7/1</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-gongzuo" />}> 校园公共服务系统开发</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-gongzuozheng" />}> 青勘院实习 2018/10/10-2019/3/1</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-zuqiu-copy" />}> 18-19海大“校庆杯”足球赛冠军</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-gongzuo" />}> 档案馆web地图模块开发</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-lunwenfabiaoqingkuang" />}> 中国海洋大学学报（自然科学版）《基于聚类算法的出租车载客点时空分布特征研究》</Timeline.Item>
                    <Timeline.Item dot={<IconFont type="icon-gongzuozheng" /> } style={{ minHeight: '21' }}> 小米实习 2019/11/4-2020/1/21</Timeline.Item>
                  </Timeline>
                </Collapse.Panel>
              </Collapse>
            </Row>
          </Card>
        </Col>
        <Col span={16}>
          <Card bordered={false}>
            <p className={styles.secondTitle}>
              <Icon type="thunderbolt" theme="twoTone" style={{ marginRight: 4 }}/>教育背景
            </p>
            <p className={styles.thirdTitle}>2013.09-2017.06 中国地质大学(武汉) 地理信息科学</p>
            <p>主修C++、地理信息系统原理、地图可视化、WebGIS、地理信息工程等相关课程，通过英语四六级考试，无挂科记录。</p>
            <p className={styles.thirdTitle}>2017.09-至今 中国海洋大学 测绘工程</p>
            <p>主要研究方向为WebGIS与出租车轨迹数据信息提取，在中国海洋大学学报自然科学版发表题为《基于聚类算法的出租车载客点时空分布特征探究》一文</p>
          </Card>
          <Card bordered={false}>
            <p className={styles.secondTitle}>
              <Icon type="tool" theme="twoTone" style={{ marginRight: 4 }}/>
              实习经历
            </p>
            <p className={styles.thirdTitle}>2019.11.01-至今 小米 大数据-技术平台部 前端开发实习生</p>
            <span>
              <p style={{ margin: 0 }}><b>实习内容：</b>基于React技术栈参与了3个中台系统的前端开发任务，涉及多个页面的开发、bug调试及UI调整；其中独自梳理需求逻辑并实现了4个全新的页面，与后端完成联调并最终测试上线；尝试封装了表单验证组件、图表（折线图）组件，优化代码结构提升开发效率。</p>
              <p style={{ margin: 0 }}><b>项目技术：</b><Tag>React</Tag><Tag>UmiJS</Tag><Tag>DvaJS</Tag><Tag>Ant Design</Tag><Tag>ECharts</Tag><Tag>Git</Tag></p>
            </span>
          </Card>
          <Card bordered={false}>
            <p className={styles.secondTitle}>
              <Icon type="pushpin" theme="twoTone" style={{ marginRight: 4 }}/>项目经历
            </p>
            <p className={styles.thirdTitle}>2019.06-2019.09 vue demo APP</p>
            <span>
              <p style={{ margin: 0 }}><b>项目描述：</b>该demo APP主要以实践vue代码为主，设计编写了旅行游记、图片分享、留言评论、闲置物品、购物车五个功能模块。</p>
              <p style={{ margin: 0 }}><b>负责内容：</b>利用webpack手动构建vue项目，使用.vue组件模板文件创建子功能模块，结合vue-router实现页面路由匹配跳转、vuex实现多组件间共享购物车数据，结合Mint-UI优化界面显示效果，并利用git进行代码版本管理。</p>
              <p style={{ margin: 0 }}><b>项目技术：</b><Tag>vue</Tag><Tag>webpack</Tag><Tag>git</Tag><Tag>Mint-UI</Tag></p>
              <p style={{ margin: 0 }}><b>项目地址：</b><a href="https://github.com/NorthwesternDirector/vue-demo-Project" target="_blank" rel="noopener noreferrer">vue-demo-Project</a></p>
            </span>
            <p className={styles.thirdTitle}>2018.08-2019.03 海大校园公共服务系统</p>
            <span>
              <p style={{ margin: 0 }}><b>项目描述：</b>该项目采用了ASP.NET Core框架与前后端分离的MVC开发模式，后端利用C#语言开发、SQL Server数据库进行数据存储，结合前端开源地图类库，将地图影像与建筑、管线、维修、基建信息相结合，实现了对数据展示、定位、查询、编辑、统计与分析的功能。</p>
              <p style={{ margin: 0 }}><b>负责内容：</b>在本项目中负责项目的启动、分析、实施、部署及测试，完成了项目五大模块的开发并进行着持续维护迭代。</p>
              <p style={{ margin: 0 }}><b>项目技术：</b><Tag>C#</Tag><Tag>JavaScript</Tag><Tag>JQuery</Tag><Tag>OpenLayers</Tag><Tag>SQL Server</Tag></p>
              <p style={{ margin: 0 }}><b>项目地址：</b><a href="https://github.com/NorthwesternDirector/campus-Project" target="_blank" rel="noopener noreferrer">campus-Project</a></p>

            </span>
            <p className={styles.thirdTitle}>2017.11-2018.03 植物物候观测系统</p>
            <span>
              <p style={{ margin: 0 }}><b>项目描述：</b>该项目利用分布在全国多个观测站点采集到的植物物候数据，分析全国范围内环境变量对植物生长的影响程度。</p>
              <p style={{ margin: 0 }}><b>负责内容：</b>在本项目中负责前端站点模块、个人足迹模块的设计与开发，实现了Web端仿iOS地图相册功能，与后端数据接口对接后完成了对近50年来全国44个观测站点的近50种植物物候数据的可视化。</p>
              <p style={{ margin: 0 }}><b>项目技术：</b><Tag>C#</Tag><Tag>JavaScript</Tag><Tag>Bootstrap</Tag><Tag>高德地图JS API</Tag><Tag>ECharts</Tag></p>
              <p style={{ margin: 0 }}><b>项目地址：</b><a href="https://github.com/NorthwesternDirector/plantCamera-Project" target="_blank" rel="noopener noreferrer">plantCamera-Project</a></p>

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
