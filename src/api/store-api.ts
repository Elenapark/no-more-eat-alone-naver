import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const sampleStoreEndPoint = '/api/store';

export const getSampleStoreData = async () => {
  const response = await axiosInstance.get(`${sampleStoreEndPoint}`);
  return response.data;
};
