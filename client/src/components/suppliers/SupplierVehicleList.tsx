import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/api";

export interface SupplierVehicle {
   id: number;
   supplierId: number;
   vehicleId: number;
   startMileage: number;
   endMileage: number;
   mileageLimit: number;
   monthlyRate: number;
   dailyRate: number;
}

const API_URL = `${API_BASE_URL}/api/supplier-vehicles`;

export default function SupplierVehicleList() {
   const [records, setRecords] = useState<SupplierVehicle[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchRecords = async () => {
         setLoading(true);
         setError(null);
         try {
            const token = localStorage.getItem("token");
            const res = await fetch(API_URL, {
               headers: { Authorization: token ? `Bearer ${token}` : "" },
            });
            if (!res.ok) throw new Error("Failed to fetch supplier vehicles");
            const data = await res.json();
            setRecords(data.content || data);
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
      fetchRecords();
   }, []);

   if (loading) return <div className="text-center py-8">Loading supplier vehicles...</div>;
   if (error) return <div className="text-center text-red-500 py-8">{error}</div>;
   if (!records.length) return <div className="text-center py-8">No supplier vehicles found.</div>;

   return (
      <div className="overflow-x-auto">
         <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-primary dark:bg-primary">
               <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">ID</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Supplier ID</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Vehicle ID</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Start Mileage</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">End Mileage</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Mileage Limit</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Monthly Rate</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Daily Rate</th>
               </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
               {records.map((r) => (
                  <tr key={r.id} className="hover:bg-primary/10 dark:hover:bg-primary/20 cursor-pointer transition">
                     <td className="px-4 py-2">{r.id}</td>
                     <td className="px-4 py-2">{r.supplierId}</td>
                     <td className="px-4 py-2">{r.vehicleId}</td>
                     <td className="px-4 py-2">{r.startMileage}</td>
                     <td className="px-4 py-2">{r.endMileage}</td>
                     <td className="px-4 py-2">{r.mileageLimit}</td>
                     <td className="px-4 py-2">{r.monthlyRate.toLocaleString()} LKR</td>
                     <td className="px-4 py-2">{r.dailyRate.toLocaleString()} LKR</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
