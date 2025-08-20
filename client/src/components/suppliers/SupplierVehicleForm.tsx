import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";

interface SupplierVehicleFormProps {
   onSuccess?: () => void;
}

export default function SupplierVehicleForm({ onSuccess }: SupplierVehicleFormProps) {
   const [form, setForm] = useState({
      supplierId: "",
      vehicleId: "",
      startMileage: "",
      endMileage: "",
      mileageLimit: "",
      monthlyRate: "",
      dailyRate: ""
   });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [success, setSuccess] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      setSuccess(false);
      try {
         const res = await fetch(`${API_BASE_URL}/api/supplier-vehicles`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
               supplierId: Number(form.supplierId),
               vehicleId: Number(form.vehicleId),
               startMileage: Number(form.startMileage),
               endMileage: Number(form.endMileage),
               mileageLimit: Number(form.mileageLimit),
               monthlyRate: Number(form.monthlyRate),
               dailyRate: Number(form.dailyRate)
            })
         });
         if (!res.ok) throw new Error("Failed to assign vehicle");
         setSuccess(true);
         setForm({
            supplierId: "",
            vehicleId: "",
            startMileage: "",
            endMileage: "",
            mileageLimit: "",
            monthlyRate: "",
            dailyRate: ""
         });
         if (onSuccess) onSuccess();
      } catch (err: unknown) {
         if (err instanceof Error) {
            setError(err.message || "Unknown error");
         } else {
            setError("Unknown error");
         }
      } finally {
         setLoading(false);
      }
   };

   return (
      <form className="bg-white rounded p-4 shadow max-w-md mx-auto" onSubmit={handleSubmit}>
         <h2 className="text-lg font-semibold mb-2">Assign Vehicle to Supplier</h2>
         <div className="mb-2">
            <label className="block mb-1">Supplier ID</label>
            <input type="number" name="supplierId" value={form.supplierId} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
         </div>
         <div className="mb-2">
            <label className="block mb-1">Vehicle ID</label>
            <input type="number" name="vehicleId" value={form.vehicleId} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
         </div>
         <div className="mb-2">
            <label className="block mb-1">Start Mileage</label>
            <input type="number" name="startMileage" value={form.startMileage} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
         </div>
         <div className="mb-2">
            <label className="block mb-1">End Mileage</label>
            <input type="number" name="endMileage" value={form.endMileage} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
         </div>
         <div className="mb-2">
            <label className="block mb-1">Mileage Limit</label>
            <input type="number" name="mileageLimit" value={form.mileageLimit} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
         </div>
         <div className="mb-2">
            <label className="block mb-1">Monthly Rate (LKR)</label>
            <input type="number" name="monthlyRate" value={form.monthlyRate} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
         </div>
         <div className="mb-2">
            <label className="block mb-1">Daily Rate (LKR)</label>
            <input type="number" name="dailyRate" value={form.dailyRate} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
         </div>
         {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
         {success && <div className="text-green-600 text-sm mb-2">Vehicle assigned successfully!</div>}
         <button type="submit" className="bg-accent text-white px-4 py-2 rounded mt-2" disabled={loading}>
            {loading ? "Assigning..." : "Assign"}
         </button>
      </form>
   );
}
