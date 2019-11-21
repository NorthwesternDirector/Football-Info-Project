import request from '../../utils/request';

export async function queryPointInfo(params) {
  const url = `/data/standing?season_id=${params.season_id}&app=${params.app}&version=${params.version}&platform=${params.platform}`
  return request(url)
}
