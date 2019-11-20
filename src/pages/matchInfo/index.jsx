import React, { useState, useEffect } from 'react'

import { Tabs, Card, Skeleton, Avatar, Row, Col, Statistic, Tag } from 'antd'
import { connect } from 'dva'


const MatchInfo = props => {
  const { dispatch, matchDetail } = props

  const [league, setLeague] = useState(0)
  console.log(matchDetail)
  useEffect(() => {
    dispatch({
      type: 'matchInfo/fetchMatchDetail',
      payload: { league },
    })
  }, [league])

  function callback(key) {
    setLeague(key)
  }

  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <Tabs.TabPane tab="意甲" key="seri">
        <Row gutter={24}>
          { matchDetail ?
          (matchDetail.map(val =>
            <Col span={12} style={{ marginBottom: '8px' }}>
              <Card title={val.match } description={val.status} extra={<a href={val.rateProgress.type[0].href} target="_blank">比赛战报</a>}>
                <Row gutter={24}>
                  <Col span={8} style={{ textAlign: 'center' }}>
                    <Avatar size={64} src={val.rateProgress.matchData[0].icon}/>
                    {(val.rateProgress.matchData[0].rate >= val.rateProgress.matchData[1].rate) ?
                      <Tag color="volcano" style={{ display: 'block' }}>{val.rateProgress.matchData[0].name}</Tag>
                      : <Tag color="cyan" style={{ display: 'block' }}>{val.rateProgress.matchData[0].name}</Tag>
                    }
                  </Col>
                  <Col span={8} style={{ textAlign: 'center' }}>
                    <h1 style={{ color: '#FF8C00', fontSize: '3rem', margin: '0' }}> {`${val.rateProgress.matchData[0].rate}:${val.rateProgress.matchData[1].rate}`}</h1>
                    {`${val.rateProgress.matchData[0].startTime} ${val.rateProgress.matchData[1].startTime}`}
                  </Col>
                  <Col span={8} style={{ textAlign: 'center' }}>
                    <Avatar size={64} src={val.rateProgress.matchData[1].icon} style={{}}/>
                    {(val.rateProgress.matchData[0].rate >= val.rateProgress.matchData[1].rate) ?
                      <Tag color="cyan" style={{ display: 'block' }}>{val.rateProgress.matchData[1].name}</Tag>
                      : <Tag color="volcano" style={{ display: 'block' }}>{val.rateProgress.matchData[1].name}</Tag>
                    }
                  </Col>
                </Row>
              </Card>
            </Col>,
         ))
          : <Skeleton title={false} paragraph={{ rows: 6 }}></Skeleton>
          }
        </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="西甲" key="liga">
          <Card>Content of Tab Pane 2</Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="中超" key="csl">
          <Card>Content of Tab Pane 3</Card>
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}

export default connect(({ matchInfo }) => ({ matchDetail: matchInfo.matchDetail }))(MatchInfo)
