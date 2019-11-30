import request from '../../utils/request';

export async function queryLearningContent() {
  const url = '/api/learningContent'
  return request(url)
}

export async function queryLearningWords() {
  const url = '/api/learningWords'
  return request(url)
}
export async function queryLearningTimes() {
  const url = '/api/learningTimes'
  return request(url)
}
