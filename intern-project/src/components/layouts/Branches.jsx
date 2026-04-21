import React, { useEffect, useState } from "react";
import { Search, Plus, MapPin, Building2, Pencil, Trash2 } from "lucide-react";

import {
  getBranches,
  deleteBranch,
  createBranch,
  updateBranch,
} from "../../utils/BranchApi";

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    city: "",
  });

  // Fetch branches
  const fetchBranches = async () => {
    try {
      const res = await getBranches();
      setBranches(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  // Delete
  const handleDelete = async (id) => {
    try {
      await deleteBranch(id);
      fetchBranches();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit
  const handleEdit = (branch) => {
    setIsEdit(true);
    setEditId(branch._id);

    setFormData({
      name: branch.name,
      location: branch.location,
      city: branch.city,
    });

    setShowModal(true);
  };

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit (Add + Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await updateBranch(editId, formData);
      } else {
        await createBranch(formData);
      }

      setShowModal(false);
      setFormData({ name: "", location: "", city: "" });
      setIsEdit(false);
      setEditId(null);

      fetchBranches();
    } catch (err) {
      console.error(err);
    }
  };

  // Search filter
  const filteredBranches = branches.filter((branch) =>
    `${branch.name} ${branch.city}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-end items-center gap-4 mb-8">

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Branch Name or City..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2.5 w-80 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
            />
          </div>

          {/* Add Button */}
          <button
            onClick={() => {
              setIsEdit(false);
              setFormData({ name: "", location: "", city: "" });
              setShowModal(true);
            }}
            className="flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest"
          >
            <Plus className="w-4 h-4" />
            New Branch
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow border overflow-hidden min-h-[500px]">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-bold text-gray-400 uppercase border-b">
                <th className="px-10 py-6 text-left">Branch Name</th>
                <th className="px-10 py-6 text-left">Location</th>
                <th className="px-10 py-6 text-right pr-20">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBranches.map((branch) => (
                <tr key={branch._id} className="hover:bg-slate-50">

                  {/* Name */}
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-blue-500" />
                      </div>

                      <div>
                        <div className="font-bold text-slate-800">
                          {branch.name}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Location */}
                  <td className="px-10 py-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin className="w-4 h-4" />
                        <span>{branch.location}</span>
                      </div>

                      <div className="ml-6">
                        <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded">
                          {branch.city}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-10 py-6 text-right pr-20">
                    <div className="flex justify-end gap-6">

                      <button
                        onClick={() => handleEdit(branch)}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        <Pencil className="w-5 h-5" />
                      </button>

                      <button
                        onClick={() => handleDelete(branch._id)}
                        className="text-red-400 hover:text-red-500"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-[400px] shadow-lg">

              <h2 className="text-lg font-bold mb-4">
                {isEdit ? "Edit Branch" : "Add New Branch"}
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Branch Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded-lg"
                />

                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded-lg"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded-lg"
                />

                <div className="flex justify-end gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setIsEdit(false);
                    }}
                    className="px-4 py-2 bg-gray-200 rounded-lg"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    {isEdit ? "Update" : "Add"}
                  </button>
                </div>

              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Branches;