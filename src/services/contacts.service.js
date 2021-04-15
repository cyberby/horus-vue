import Api from './api.service';

export default {
  get: (params) => Api.get('contacts/', { params }),
  getId: (id) => Api.get(`contacts/${id}/`),
  save: (data) => Api.post(`contacts/`, data),
  update: (id, data) => Api.put(`contacts/${id}/`, data),
  delete: (id) => Api.delete(`contacts/${id}/`),
};
