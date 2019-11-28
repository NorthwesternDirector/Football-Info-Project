import React, { useEffect, useMemo } from 'react'
import moment from 'moment'

import { Avatar, Card, Row, Col } from 'antd'
import { connect } from 'dva'
import Line from '../../components/Charts/Line'
import Pie from '../../components/Charts/Pie'
import '../../components/Charts/echartsTheme'

const ScheduleInfo = props => {
  const { dispatch, schedule, loading } = props

  useEffect(() => {
    dispatch({
      type: 'scheduleDetail/fetchScheduleDetail',
    })
  }, [])

  const { data } = schedule

  const selectDate = useMemo(() => {
    const selectArr = data ? data[0].timeRange.split(',') : ['2019-08-17', '2019-11-24']
    const arrayLength = moment(selectArr[1]).diff(moment(selectArr[0]), 'days')

    return new Array(arrayLength).fill(1).map((val, index, array) =>
      moment(selectArr[1]).subtract(array.length - index, 'days').format('YYYY-MM-DD'),
    )
  }, [data])
  selectDate.push('2019-11-24')


  return (
    <>
      <Row gutter={24}>
      {data ?
        <Col span={24}>
          <Card title="西班牙甲级联赛" loading={loading}>
            {data.map(item =>
              <Avatar shape="square" size="large" src={item.logo} key={item.team}></Avatar>,
            )}
            <Line title="积分情况-趋势" data={data} category={selectDate} chartHeight={400}></Line>
          </Card>
          <Card title="西班牙甲级联赛" loading={loading}>
            <Pie title="积分情况-占比" data={data} category={selectDate} chartHeight={400}></Pie>
          </Card>
        </Col> : null}
      </Row>

    </>
  )
}

export default connect(({ scheduleDetail, loading }) => ({
  schedule: scheduleDetail.schedule,
  loading: loading.effects['scheduleDetail/fetchScheduleDetail'],
}))(ScheduleInfo)
