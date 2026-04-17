import API from "./axios";

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