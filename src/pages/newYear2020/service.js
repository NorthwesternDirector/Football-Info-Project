import request from '../../utils/request';

export async function queryTimes() {
  const url = '/api/times'
  return request(url)
}

export async function queryGames() {
  const url = '/api/games'
  return request(url)
}

export async function queryVirus() {
  const url = '/api/virus'
  return request(url)
}

export async function queryPaper() {
  const url = '/api/paper'
  return request(url)
}
