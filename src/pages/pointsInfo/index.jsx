import React, { useState, useEffect } from 'react'

import { Tabs, Table } from 'antd'
import { connect } from 'dva'


const MatchInfo = props => {
  const { dispatch, pointsInfoPage, loading } = props
  const [league, setLeague] = useState('France')

  const params = {
    season_id: '14225',
    app: 'dqd',
    version: 0,
    platform: 'web',
  }


  useEffect(() => {
    dispatch({
      type: 'pointsInfo/fetchMatchDetail',
      payload: params,
    })
    return () => dispatch({
      type: 'pointsInfo/clear',
    })
  }, [league])

  function callback(key) {
    setLeague(key)
  }

  const columns = [
    {
      title: '球队',
      dataIndex: '球队',
      key: '球队',
    },
    {
      title: '赛',
      dataIndex: '赛',
      key: '赛',
    },
    {
      title: '胜',
      dataIndex: '胜',
      key: '胜',
    },
    {
      title: '平',
      dataIndex: '平',
      key: '平',
    },
    {
      title: '负',
      dataIndex: '负',
      key: '负',
    },
    {
      title: '进/失',
      dataIndex: '进/失',
      key: '进/失',
    },
    {
      title: '积分',
      dataIndex: '积分',
      key: '积分',
    },
  ]

  const leagueList = [
    { tab: '中超', key: '14225' },
    { tab: '法甲', key: '15045' },
    { tab: '德甲', key: '15014' },
    { tab: '意甲', key: '15385' },
    { tab: '西甲', key: '15013' },
    { tab: '英超', key: '14931' },
  ]


  return (
    <>
      <Tabs defaultActiveKey="France" onChange={callback}>
        {
          leagueList.map(item =>
            <Tabs.TabPane tab={item.tab} key={item.key}>
              <Table columns={columns}></Table>
            </Tabs.TabPane>,
          )
        }
      </Tabs>
    </>
  )
}

export default connect(({ pointsInfo, loading }) => ({ pointsInfoPage: pointsInfo.pointsInfoPage, loading: loading.effects['matchInfo/fetchMatchDetail'] }))(MatchInfo)
