import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";

interface VehicleFormProps {
   onSuccess?: () => void;
   twoColumns?: boolean;
}

const API_URL = `${API_BASE_URL}/api/vehicles`;

const OWNER_TYPES = ["COMPANY", "SUPPLIER"];
const FUEL_TYPES = ["PETROL", "DIESEL"];
const TRANSMISSION_TYPES = ["AUTO", "MANUAL"];

export default function VehicleForm({ onSuccess, twoColumns }: VehicleFormProps) {
   const [form, setForm] = useState({
      type: "",
      supplierId: "",
      registrationNo: "",
      manufacture: "",
      model: "",
      fuelType: "PETROL",
      seats: 4,
      dailyRate: 0,
      extraKmRate: 0,
      transmissionType: "AUTO",
   });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [success, setSuccess] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      setForm((prev) => ({
         ...prev,
         [name]: type === "number" ? Number(value) : value,
      }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      setSuccess(false);
      try {
         const token = localStorage.getItem("token");
         const payload = {
            ...form,
            supplierId: form.supplierId ? Number(form.supplierId) : null,
            seats: Number(form.seats),
            dailyRate: Number(form.dailyRate),
            extraKmRate: Number(form.extraKmRate),
         };
         const res = await fetch(API_URL, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: token ? `Bearer ${token}` : "",
            },
            body: JSON.stringify(payload),
         });
         if (!res.ok) throw new Error("Failed to add vehicle");
         setSuccess(true);
         setForm({
            type: "",
            supplierId: "",
            registrationNo: "",
            manufacture: "",
            model: "",
            fuelType: "PETROL",
            seats: 4,
            dailyRate: 0,
            extraKmRate: 0,
            transmissionType: "AUTO",
         });
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
      <form onSubmit={handleSubmit} className={`bg-white rounded shadow p-6 ${twoColumns ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'max-w-md mx-auto space-y-4'}`}>
         <h2 className="text-2xl font-bold text-primary mb-2 md:col-span-2">Add Vehicle</h2>
         <div>
            <label className="block mb-1 font-medium">Type</label>
            <input
               type="text"
               name="type"
               value={form.type}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            />
         </div>
         <div>
            <label className="block mb-1 font-medium">Supplier ID</label>
            <input
               type="number"
               name="supplierId"
               value={form.supplierId}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               min={1}
            />
         </div>
         <div>
            <label className="block mb-1 font-medium">Registration No</label>
            <input
               type="text"
               name="registrationNo"
               value={form.registrationNo}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            />
         </div>
         <div>
            <label className="block mb-1 font-medium">Fuel Type</label>
            <select
               name="fuelType"
               value={form.fuelType}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            >
               {FUEL_TYPES.map((ft) => (
                  <option key={ft} value={ft}>{ft}</option>
               ))}
            </select>
         </div>
         <div>
            <label className="block mb-1 font-medium">Seats</label>
            <input
               type="number"
               name="seats"
               value={form.seats}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
               min={1}
            />
         </div>
         <div>
            <label className="block mb-1 font-medium">Daily Rate (LKR)</label>
            <input
               type="number"
               name="dailyRate"
               value={form.dailyRate}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
               min={0}
            />
         </div>
         <div>
            <label className="block mb-1 font-medium">Extra Km Rate (LKR)</label>
            <input
               type="number"
               name="extraKmRate"
               value={form.extraKmRate}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
               min={0}
            />
         </div>
         <div>
            <label className="block mb-1 font-medium">Transmission Type</label>
            <select
               name="transmissionType"
               value={form.transmissionType}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            >
               {TRANSMISSION_TYPES.map((tt) => (
                  <option key={tt} value={tt}>{tt}</option>
               ))}
            </select>
         </div>
         {error && <div className={`text-red-500 text-sm ${twoColumns ? 'md:col-span-2' : ''}`}>{error}</div>}
         {success && <div className={`text-green-600 text-sm ${twoColumns ? 'md:col-span-2' : ''}`}>Vehicle added successfully!</div>}
         <button
            type="submit"
            className={`w-full bg-accent text-accent-foreground py-2 rounded font-semibold hover:bg-accent/90 ${twoColumns ? 'md:col-span-2' : ''}`}
            disabled={loading}
         >
            {loading ? "Adding..." : "Add Vehicle"}
         </button>
      </form>
   );
}
