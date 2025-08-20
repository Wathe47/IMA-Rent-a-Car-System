import { API_BASE_URL } from "@/lib/api";
import { useEffect, useState } from "react";

export interface Customer {
   customerId: number;
   name: string;
   nic: string;
   phone: string;
   address: string;
}

const API_URL = `${API_BASE_URL}/api/customers`;

export default function CustomerList() {
   const [customers, setCustomers] = useState<Customer[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchCustomers = async () => {
         setLoading(true);
         setError(null);
         try {
            const token = localStorage.getItem("token");
            const res = await fetch(API_URL, {
               headers: {
                  Authorization: token ? `Bearer ${token}` : "",
               },
            });
            if (!res.ok) throw new Error("Failed to fetch customers");
            const data = await res.json();
            setCustomers(data.content || data);
         } catch (err: any) {
            setError(err.message || "Unknown error");
         } finally {
            setLoading(false);
         }
      };
      fetchCustomers();
   }, []);

   if (loading) return <div className="text-center py-8">Loading customers...</div>;
   if (error) return <div className="text-center text-red-500 py-8">{error}</div>;
   if (!customers.length) return <div className="text-center py-8">No customers found.</div>;

   return (
      <div className="overflow-x-auto">
         <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-primary dark:bg-primary">
               <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">ID</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">NIC</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Phone</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Address</th>
               </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
               {customers.map((c) => (
                  <tr key={c.customerId} className="hover:bg-primary/10 dark:hover:bg-primary/20 cursor-pointer transition">
                     <td className="px-4 py-2">{c.customerId}</td>
                     <td className="px-4 py-2">{c.name}</td>
                     <td className="px-4 py-2">{c.nic}</td>
                     <td className="px-4 py-2">{c.phone}</td>
                     <td className="px-4 py-2">{c.address}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
