import axios from 'axios';

export function fetchLevel(levelId) {
  return axios.get(`/rathe001-neurokore/api/levels/${levelId}.json`);
}

export default fetchLevel;
