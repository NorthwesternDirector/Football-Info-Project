import React, { useState, useEffect } from 'react'

import { Tabs } from 'antd'
import { connect } from 'dva'
import TeamLoName from '../../components/TeamCard/TeamLogoName'


const MatchInfo = props => {
  const { dispatch, matchDetail, loading } = props
  const [league, setLeague] = useState('')

  console.log(matchDetail)

  useEffect(() => {
    dispatch({
      type: 'matchInfo/fetchMatchDetail',
      payload: { league },
    })
    return () => dispatch({
      type: 'matchInfo/clear',
    })
  }, [league])

  function callback(key) {
    setLeague(key)
  }

  const leagueList = [
    { tab: '全部', key: '' },
    { tab: '德甲', key: 'bund' },
    { tab: '意甲', key: 'seri' },
    { tab: '西甲', key: 'liga' },
    { tab: '法甲', key: 'fran' },
    { tab: '英超', key: 'epl' },
    { tab: '欧冠', key: 'chlg' },
    { tab: '欧联', key: 'uefael' },
    { tab: '中超', key: 'csl' },

  ]

  return (
    <>
      <Tabs defaultActiveKey="" onChange={callback}>
        {
          leagueList.map(item =>
            <Tabs.TabPane tab={item.tab} key={item.key}>
              <TeamLoName matchDetail={matchDetail} loading={loading}></TeamLoName>
            </Tabs.TabPane>,
          )
        }
      </Tabs>
    </>
  )
}

export default connect(({ matchInfo, loading }) => ({ matchDetail: matchInfo.matchDetail, loading: loading.effects['matchInfo/fetchMatchDetail'] }))(MatchInfo)
