import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";

interface CustomerFormProps {
   onSuccess?: () => void;
}

const API_URL = `${API_BASE_URL}/api/customers`;

export default function CustomerForm({ onSuccess }: CustomerFormProps) {
   const [form, setForm] = useState({
      name: "",
      nic: "",
      phone: "",
      address: "",
   });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [success, setSuccess] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      setSuccess(false);
      try {
         const token = localStorage.getItem("token");
         const res = await fetch(API_URL, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: token ? `Bearer ${token}` : "",
            },
            body: JSON.stringify(form),
         });
         if (!res.ok) throw new Error("Failed to add customer");
         setSuccess(true);
         setForm({ name: "", nic: "", phone: "", address: "" });
         if (onSuccess) onSuccess();
      } catch (err: any) {
         setError(err.message || "Unknown error");
      } finally {
         setLoading(false);
      }
   };

   return (
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 max-w-md mx-auto space-y-4">
         <h2 className="text-2xl font-bold text-primary mb-2">Add Customer</h2>
         <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
               type="text"
               name="name"
               value={form.name}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            />
         </div>
         <div>
            <label className="block mb-1 font-medium">NIC</label>
            <input
               type="text"
               name="nic"
               value={form.nic}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            />
         </div>
         <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
               type="text"
               name="phone"
               value={form.phone}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            />
         </div>
         <div>
            <label className="block mb-1 font-medium">Address</label>
            <textarea
               name="address"
               value={form.address}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            />
         </div>
         {error && <div className="text-red-500 text-sm">{error}</div>}
         {success && <div className="text-green-600 text-sm">Customer added successfully!</div>}
         <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary/90"
            disabled={loading}
         >
            {loading ? "Adding..." : "Add Customer"}
         </button>
      </form>
   );
}
