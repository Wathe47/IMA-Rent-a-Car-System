

import { API_BASE_URL } from "@/lib/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface Vehicle {
   vehicleId: number;
   type: string;
   supplierId?: number;
   registrationNo: string;
   manufacture: string;
   model: string;
   fuelType: string;
   seats: number;
   dailyRate: number;
   extraKmRate: number;
   transmissionType?: string;
}

const API_URL = `${API_BASE_URL}/api/vehicles`;

export default function VehicleList() {
   const [vehicles, setVehicles] = useState<Vehicle[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const navigate = useNavigate();

   useEffect(() => {
      const fetchVehicles = async () => {
         setLoading(true);
         setError(null);
         try {
            const token = localStorage.getItem("token");
            const res = await fetch(API_URL, {
               headers: {
                  Authorization: token ? `Bearer ${token}` : "",
               },
            });
            if (!res.ok) throw new Error("Failed to fetch vehicles");
            const data = await res.json();
            setVehicles(data.content || []);
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
      fetchVehicles();
   }, []);

   if (loading) return <div className="text-center py-8">Loading vehicles...</div>;
   if (error) return <div className="text-center text-red-500 py-8">{error}</div>;
   if (!vehicles.length) return <div className="text-center py-8">No vehicles found.</div>;

   return (
      <div className="overflow-x-auto">
         <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-primary dark:bg-primary">
               <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Type</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Supplier ID</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Reg. No</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Manufacture</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Model</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Fuel</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Seats</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Daily Rate</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Extra Km Rate</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Transmission</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Book</th>
               </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
               {vehicles.map((v) => (
                  <tr
                     key={v.vehicleId}
                     className="hover:bg-primary/10 dark:hover:bg-primary/20 transition"
                  >
                     <td className="px-4 py-2 font-semibold">{v.type}</td>
                     <td className="px-4 py-2">{v.supplierId ?? '-'}</td>
                     <td className="px-4 py-2">{v.registrationNo}</td>
                     <td className="px-4 py-2">{v.manufacture}</td>
                     <td className="px-4 py-2">{v.model}</td>
                     <td className="px-4 py-2">{v.fuelType}</td>
                     <td className="px-4 py-2">{v.seats}</td>
                     <td className="px-4 py-2">{v.dailyRate.toLocaleString()} LKR</td>
                     <td className="px-4 py-2">{v.extraKmRate.toLocaleString()} LKR</td>
                     <td className="px-4 py-2">{v.transmissionType ?? '-'}</td>
                     <td className="px-4 py-2">
                        <button
                           className="bg-white text-primary font-semibold px-4 py-2 rounded shadow hover:bg-primary hover:text-white transition"
                           onClick={() => navigate(`/bookings/new?vehicleId=${v.vehicleId}`)}
                        >
                           Book Now
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

