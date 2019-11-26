import React, { useState, useEffect } from 'react'

import { Tabs, Table, Avatar, Card } from 'antd'
import { connect } from 'dva'


const ScheduleInfo = props => {
  const { dispatch, schedule, loading } = props

  useEffect(() => {
    dispatch({
      type: 'scheduleDetail/fetchScheduleDetail',
    })
  }, [])

  const { data } = schedule

  return (
    <>
      {data ? <Card title={data.team} loading={loading}>
        <Avatar shape="square" size="large" src={data.logo}></Avatar>
      </Card> : null}


    </>
  )
}

export default connect(({ scheduleDetail, loading }) => ({
  schedule: scheduleDetail.schedule,
  loading: loading.effects['scheduleDetail/fetchScheduleDetail'],
}))(ScheduleInfo)
