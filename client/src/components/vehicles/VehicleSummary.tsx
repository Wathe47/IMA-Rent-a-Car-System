import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/api";
import { Car, CheckCircle, Wrench, KeyRound } from "lucide-react";

export default function VehicleSummary() {
   const [summary, setSummary] = useState({
      total: 0,
      available: 0,
      rented: 0,
      maintenance: 0,
   });
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchSummary = async () => {
         setLoading(true);
         setError(null);
         try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${API_BASE_URL}/api/vehicles`, {
               headers: { Authorization: token ? `Bearer ${token}` : "" },
            });
            if (!res.ok) throw new Error("Failed to fetch vehicles");
            const data = await res.json();
            const vehicles = data.content || data;
            setSummary({
               total: vehicles.length,
               available: vehicles.filter((v: any) => v.status === "AVAILABLE").length,
               rented: vehicles.filter((v: any) => v.status === "RENTED").length,
               maintenance: vehicles.filter((v: any) => v.status === "MAINTENANCE").length,
            });
         } catch (err: any) {
            setError(err.message || "Unknown error");
         } finally {
            setLoading(false);
         }
      };
      fetchSummary();
   }, []);

   if (loading) return <div className="text-center py-8">Loading summary...</div>;
   if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

   return (
      <div className="bg-gradient-to-br from-primary/10 to-yellow-100 dark:from-primary/20 dark:to-yellow-900 rounded-2xl shadow-xl p-7 flex flex-col gap-4 items-center border border-primary/20">
         <h2 className="text-2xl font-extrabold text-primary mb-2 flex items-center gap-2">
            <Car className="w-6 h-6 text-primary" /> Vehicle Summary
         </h2>
         <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow border border-gray-100 dark:border-gray-800">
               <span className="text-gray-500 text-xs flex items-center gap-1"><Car className="w-4 h-4 text-primary" />Total</span>
               <span className="text-2xl font-bold text-primary">{summary.total}</span>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow border border-gray-100 dark:border-gray-800">
               <span className="text-gray-500 text-xs flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-600" />Available</span>
               <span className="text-2xl font-bold text-green-600">{summary.available}</span>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow border border-gray-100 dark:border-gray-800">
               <span className="text-gray-500 text-xs flex items-center gap-1"><KeyRound className="w-4 h-4 text-blue-600" />Rented</span>
               <span className="text-2xl font-bold text-blue-600">{summary.rented}</span>
            </div>
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow border border-gray-100 dark:border-gray-800">
               <span className="text-gray-500 text-xs flex items-center gap-1"><Wrench className="w-4 h-4 text-yellow-600" />Maintenance</span>
               <span className="text-2xl font-bold text-yellow-600">{summary.maintenance}</span>
            </div>
         </div>
      </div>
   );
}
