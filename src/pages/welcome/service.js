import request from '../../utils/request';

export async function queryIconInfo() {
  const url = '/api/iconInfo'
  return request(url)
}
