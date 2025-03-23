import axios from 'axios';
const baseUrl = '/api/guides';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getSingleById = async (id) => {
  const response = await axios.get(`${baseUrl}?id=${id}`,);
  return response.data;
};

const getByCategory = async (category) => {
  const response = await axios.get(`${baseUrl}?category=${category}`,);
  return response.data;
};

export default { getAll, getSingleById, getByCategory };