import request from '../../utils/request';

export async function queryTimes() {
  const url = '/api/times'
  return request(url)
}
