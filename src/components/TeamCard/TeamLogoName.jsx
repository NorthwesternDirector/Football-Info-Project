import React from 'react'
import { Card, Avatar, Row, Col, Tag } from 'antd'

const TeamLoName = ({ matchDetail, loading }) =>
    <Row gutter={24}>
      {matchDetail.map(val =>
        <Col span={12} style={{ marginBottom: '8px' }} key={Math.random()}>
          <Card title={val.match } description={val.status} extra={<a href={val.rateProgress.type[0].href} target="_blank">比赛战报</a>}>
            <Row gutter={24}>
              <Col span={8} style={{ textAlign: 'center' }}>
                <Avatar shape="square" size={74} src={val.rateProgress.matchData[0].icon} style={{ display: 'block', margin: '0 auto' }}/>
                {(val.rateProgress.matchData[0].rate >= val.rateProgress.matchData[1].rate) ?
                  <Tag color="volcano" style={{ display: 'inline-block', margin: '5px 0 0 0' }}>{val.rateProgress.matchData[0].name}</Tag>
                  : <Tag color="cyan" style={{ display: 'inline-block', margin: '5px 0 0 0' }}>{val.rateProgress.matchData[0].name}</Tag>
                }
              </Col>
              <Col span={8} style={{ textAlign: 'center' }}>
                {`${val.status}`}
                <h1 style={{ color: '#FF8C00', fontSize: '30px', margin: '0' }}> {`${val.rateProgress.matchData[0].rate}:${val.rateProgress.matchData[1].rate}`}</h1>
                {`${val.rateProgress.matchData[0].startTime} ${val.rateProgress.matchData[1].startTime}`}
              </Col>
              <Col span={8} style={{ textAlign: 'center' }}>
                <Avatar shape="square" size={74} src={val.rateProgress.matchData[1].icon} style={{ display: 'block', margin: '0 auto' }}/>
                {(val.rateProgress.matchData[0].rate >= val.rateProgress.matchData[1].rate) ?
                  <Tag color="cyan" style={{ display: 'inline-block', margin: '5px auto 0' }}>{val.rateProgress.matchData[1].name}</Tag>
                  : <Tag color="volcano" style={{ display: 'inline-block', margin: '5px 0 0 0' }}>{val.rateProgress.matchData[1].name}</Tag>
                }
              </Col>
            </Row>
          </Card>
        </Col>,
      )}
    </Row>


export default React.memo(TeamLoName, (pre, next) => JSON.stringify(pre) === JSON.stringify(next))
