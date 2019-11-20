import request from '../../utils/request';

export async function queryMatchDetail(params) {
  return request('/api/v1/match?league=seri')
}
