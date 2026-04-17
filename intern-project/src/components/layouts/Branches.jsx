import React, { useEffect, useState } from "react";
import { Search, Plus, MapPin, Building2, Pencil, Trash2 } from "lucide-react";

import {
  getBranches,
  deleteBranch,
} from "../layouts";

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch data
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
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Branch Name or City..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2.5 w-80 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 shadow-sm"
            />
          </div>

          {/* Button */}
          <button className="flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg">
            <Plus className="w-4 h-4" />
            New Branch
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-[2.5rem] shadow-md border overflow-hidden min-h-[500px]">
          <table className="w-full">
            <thead>
              <tr className="text-[11px] font-bold text-gray-400 uppercase border-b">
                <th className="px-10 py-8 text-left">Branch Name</th>
                <th className="px-10 py-8 text-left">Location</th>
                <th className="px-10 py-8 text-right pr-20">Actions</th>
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
                        <div className="text-xs text-gray-400">
                          ID: #{branch._id.slice(-4)}
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
                        <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded uppercase">
                          {branch.city}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-10 py-6 text-right pr-20">
                    <div className="flex justify-end gap-6">

                      {/* Edit (not connected yet) */}
                      <button className="text-gray-300 hover:text-blue-500">
                        <Pencil className="w-5 h-5" />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(branch._id)}
                        className="text-red-300 hover:text-red-500"
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

      </div>
    </div>
  );
};

export default Branches;