import React, { useState, useEffect } from 'react'

import { Tabs, Table, Avatar } from 'antd'
import { connect } from 'dva'


const MatchInfo = props => {
  const { dispatch, pointsInfoPage, loading } = props
  const [league, setLeague] = useState('14225')

  const leagueList = [
    { tab: '中超', key: '14225' },
    { tab: '法甲', key: '15045' },
    { tab: '德甲', key: '15014' },
    { tab: '意甲', key: '15385' },
    { tab: '西甲', key: '15013' },
    { tab: '英超', key: '14931' },
  ]

  useEffect(() => {
    dispatch({
      type: 'pointsInfo/fetchPointInfo',
      payload: {
        season_id: league,
        app: 'dqd',
        version: 0,
        platform: 'web',
      },
    })
    return () => dispatch({
      type: 'pointsInfo/clear',
    })
  }, [league])

  function callback(key) {
    setLeague(key)
  }

  const data = pointsInfoPage && pointsInfoPage.data ? pointsInfoPage.data.map((item, index) => ({
    key: item.team_name,
    排名: index + 1,
    球队: item.team_name,
    赛: item.matches_total,
    胜: item.matches_won,
    平: item.matches_draw,
    负: item.matches_lost,
    进球: item.goals_pro,
    失球: item.goals_against,
    净胜球: item.goals_pro - item.goals_against,
    积分: item.points,
    team_logo: item.team_logo,
   }),
  ) : []

  const columns = [
    {
      title: '排名',
      dataIndex: '排名',
      key: '排名',
    },
    {
      title: '球队',
      dataIndex: '球队',
      key: '球队',
      render: (text, record) => (
        <>
        <Avatar shape="square" src={record.team_logo} style={{ marginRight: '8px' }}/>
        {record.key}
        </>
      ),
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
      title: '进球',
      dataIndex: '进球',
      key: '进球',
    },
    {
      title: '失球',
      dataIndex: '失球',
      key: '失球',
    },
    {
      title: '净胜球',
      dataIndex: '净胜球',
      key: '净胜球',
    },
    {
      title: '积分',
      dataIndex: '积分',
      key: '积分',
    },
  ]


  return (
    <>
      <Tabs defaultActiveKey="14225" onChange={callback} animated={false}>
        {
          leagueList.map(item =>
            <Tabs.TabPane tab={item.tab} key={item.key}>
              <Table columns={columns} dataSource={data} loading={loading} size="middle" pagination={{ pageSize: 9 }}></Table>
            </Tabs.TabPane>,
          )
        }
      </Tabs>
    </>
  )
}

export default connect(({ pointsInfo, loading }) => ({
  pointsInfoPage: pointsInfo.pointsInfoPage,
  loading: loading.effects['pointsInfo/fetchPointInfo'],
}))(MatchInfo)
