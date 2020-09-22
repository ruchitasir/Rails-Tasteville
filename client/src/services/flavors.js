import api from './api-config'

export const getAllFlavors = async () => {
  const resp = await api.get('/flavors');
  return resp.data;
}

export const addFlavor = async (foodId, flavorId) => {
  const resp = await api.get(`/foods/${foodId}/flavors/${flavorId}`);
  return resp.data;
}