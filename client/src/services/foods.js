import api from './api-config'

export const getAllFoods = async () => {
  const resp = await api.get('/foods');
  return resp.data;
}

export const getOneFood = async (id) => {
  const resp = await api.get(`/foods/${id}`);
  return resp.data;
}

export const putFood = async (id, formData) => {
  const resp = await api.put(`/foods/${id}`, { food: formData })
  return resp.data;
}

export const postFood = async (formData) => {
  const resp = await api.post('/foods', { food: formData })
  return resp.data;
}

export const deleteFood = async (id) => {
  const resp = await api.delete(`/foods/${id}`)
  return resp.data;
}