import axios from 'axios';

export function fetchLevel(levelId) {
  return axios.get(`/neurokore/api/levels/${levelId}.json`);
}

export default fetchLevel;
