import axios from 'axios';

export function fetchLevel(levelId) {
  return axios.get(`/api/levels/${levelId}.json`);
}

export default fetchLevel;
