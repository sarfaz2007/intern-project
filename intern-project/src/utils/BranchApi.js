import API from "../utils/api";

// GET ALL
export const getBranches = () => API.get("/branches");

// CREATE
export const createBranch = (data) => API.post("/branches", data);

// UPDATE
export const updateBranch = (id, data) =>
  API.put(`/branches/${id}`, data);

// DELETE
export const deleteBranch = (id) =>
  API.delete(`/branches/${id}`);

// GET BY ID (optional - useful for edit pages)
export const getBranchById = (id) =>
  API.get(`/branches/${id}`);


// SEARCH (optional - if backend supports query ?search=)
export const searchBranches = (query) =>
  API.get(`/branches?search=${query}`);


// BULK DELETE (optional future use)
export const deleteMultipleBranches = (ids) =>
  API.post("/branches/delete-multiple", { ids });