import request from '../../utils/request';

export async function queryscheduleDetail() {
  const url = '/api/scheduleDetail'
  return request(url)
}
