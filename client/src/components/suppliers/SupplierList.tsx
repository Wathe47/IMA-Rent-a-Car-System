import { API_BASE_URL } from "@/lib/api";
import { useEffect, useState } from "react";

export interface Supplier {
   id: number;
   name: string;
   nic: string;
   address: string;
   phone: string;
}

const API_URL = `${API_BASE_URL}/api/suppliers`;

export default function SupplierList() {
   const [suppliers, setSuppliers] = useState<Supplier[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchSuppliers = async () => {
         setLoading(true);
         setError(null);
         try {
            const token = localStorage.getItem("token");
            const res = await fetch(API_URL, {
               headers: {
                  Authorization: token ? `Bearer ${token}` : "",
               },
            });
            if (!res.ok) throw new Error("Failed to fetch suppliers");
            const data = await res.json();
            setSuppliers(data.content || data);
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
      fetchSuppliers();
   }, []);

   if (loading) return <div className="text-center py-8">Loading suppliers...</div>;
   if (error) return <div className="text-center text-red-500 py-8">{error}</div>;
   if (!suppliers.length) return <div className="text-center py-8">No suppliers found.</div>;

   return (
      <div className="overflow-x-auto">
         <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-primary dark:bg-primary">
               <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">ID</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">NIC</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Address</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Phone</th>
               </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
               {suppliers.map((s) => (
                  <tr key={s.id} className="hover:bg-primary/10 dark:hover:bg-primary/20 cursor-pointer transition">
                     <td className="px-4 py-2">{s.id}</td>
                     <td className="px-4 py-2">{s.name}</td>
                     <td className="px-4 py-2">{s.nic}</td>
                     <td className="px-4 py-2">{s.address}</td>
                     <td className="px-4 py-2">{s.phone}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
