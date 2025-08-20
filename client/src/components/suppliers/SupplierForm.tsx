import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";

interface SupplierFormProps {
   onSuccess?: () => void;
}

export default function SupplierForm({ onSuccess }: SupplierFormProps) {
   const [form, setForm] = useState({
      name: "",
      nic: "",
      address: "",
      phone: "",
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
         const res = await fetch(`${API_BASE_URL}/api/suppliers`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: token ? `Bearer ${token}` : "",
            },
            body: JSON.stringify(form),
         });
         if (!res.ok) throw new Error("Failed to add supplier");
         setSuccess(true);
         setForm({ name: "", nic: "", address: "", phone: "" });
         if (onSuccess) onSuccess();
      } catch (err: unknown) {
         if (err instanceof Error) {
            setError(err.message);
         } else {
            setError("Unknown error");
         }
      } finally {
         setLoading(false);
      }
   };

   return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded shadow p-6 space-y-4">
         <h2 className="text-2xl font-bold text-primary mb-2">Add Supplier</h2>
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
            <label className="block mb-1 font-medium">Address</label>
            <input
               type="text"
               name="address"
               value={form.address}
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
         {error && <div className="text-red-500 text-sm">{error}</div>}
         {success && <div className="text-green-600 text-sm">Supplier added successfully!</div>}
         <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary/90"
            disabled={loading}
         >
            {loading ? "Adding..." : "Add Supplier"}
         </button>
      </form>
   );
}
