import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";

interface BookingFormProps {
   onSuccess?: () => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
   const [form, setForm] = useState({
      customerId: "",
      vehicleId: "",
      startDate: "",
      endDate: "",
   });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [success, setSuccess] = useState(false);

   const API_URL = `${API_BASE_URL}/api/bookings`;

   // TODO: Fetch customers and vehicles for select options
   // For now, use placeholder options
   const customers = [
      { id: 1, name: "Customer 1" },
      { id: 2, name: "Customer 2" },
   ];
   const vehicles = [
      { id: 1, make: "Toyota", model: "Corolla" },
      { id: 2, make: "Honda", model: "Civic" },
   ];

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
            body: JSON.stringify({
               ...form,
               customerId: Number(form.customerId),
               vehicleId: Number(form.vehicleId),
            }),
         });
         if (!res.ok) throw new Error("Failed to add booking");
         setSuccess(true);
         setForm({ customerId: "", vehicleId: "", startDate: "", endDate: "" });
         if (onSuccess) onSuccess();
      } catch (err: any) {
         setError(err.message || "Unknown error");
      } finally {
         setLoading(false);
      }
   };

   return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded shadow p-6 space-y-4">
         <h2 className="text-xl font-bold text-accent mb-2">Add Booking</h2>
         <div>
            <label className="block mb-1 font-medium">Customer</label>
            <select
               name="customerId"
               value={form.customerId}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            >
               <option value="">Select Customer</option>
               {customers.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
               ))}
            </select>
         </div>
         <div>
            <label className="block mb-1 font-medium">Vehicle</label>
            <select
               name="vehicleId"
               value={form.vehicleId}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            >
               <option value="">Select Vehicle</option>
               {vehicles.map((v) => (
                  <option key={v.id} value={v.id}>{v.make} {v.model}</option>
               ))}
            </select>
         </div>
         <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input
               type="date"
               name="startDate"
               value={form.startDate}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            />
         </div>
         <div>
            <label className="block mb-1 font-medium">End Date</label>
            <input
               type="date"
               name="endDate"
               value={form.endDate}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            />
         </div>
         {error && <div className="text-red-500 text-sm">{error}</div>}
         {success && <div className="text-green-600 text-sm">Booking added successfully!</div>}
         <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-2 rounded font-semibold hover:bg-accent/90"
            disabled={loading}
         >
            {loading ? "Adding..." : "Add Booking"}
         </button>
      </form>
   );
}
