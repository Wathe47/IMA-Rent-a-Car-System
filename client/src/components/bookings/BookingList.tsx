import { API_BASE_URL } from "@/lib/api";
import { useEffect, useState } from "react";

export interface Booking {
   bookingId: number;
   customerId: number;
   vehicleId: number;
   startDatetime: string;
   endDatetime: string;
   distance: number;
   customerNameWithNic: string;
   vehicleNameWithReg: string;
   totalBill: number;
   deposit: number;
   advancePayment: number;
   additionalCharges: number;
   status: string;
}

const API_URL = `${API_BASE_URL}/api/bookings`;

export default function BookingList() {
   const [bookings, setBookings] = useState<Booking[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchBookings = async () => {
         setLoading(true);
         setError(null);
         try {
            const token = localStorage.getItem("token");
            const res = await fetch(API_URL, {
               headers: {
                  Authorization: token ? `Bearer ${token}` : "",
               },
            });
            if (!res.ok) throw new Error("Failed to fetch bookings");
            const data = await res.json();
            setBookings(data.content || data);
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
      fetchBookings();
   }, []);

   if (loading) return <div className="text-center py-8">Loading bookings...</div>;
   if (error) return <div className="text-center text-red-500 py-8">{error}</div>;
   if (!bookings.length) return <div className="text-center py-8">No bookings found.</div>;

   return (
      <div className="overflow-x-auto">
         <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-primary dark:bg-primary">
               <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Booking ID</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Customer</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Vehicle</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Start</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">End</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Distance (km)</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Total Bill</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Deposit</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Advance</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Add. Charges</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-white uppercase">Status</th>
               </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
               {bookings.map((b) => (
                  <tr key={b.bookingId} className="hover:bg-primary/10 dark:hover:bg-primary/20 cursor-pointer transition">
                     <td className="px-4 py-2">{b.bookingId}</td>
                     <td className="px-4 py-2">{b.customerNameWithNic || b.customerId}</td>
                     <td className="px-4 py-2">{b.vehicleNameWithReg || b.vehicleId}</td>
                     <td className="px-4 py-2">{new Date(b.startDatetime).toLocaleString()}</td>
                     <td className="px-4 py-2">{new Date(b.endDatetime).toLocaleString()}</td>
                     <td className="px-4 py-2">{b.distance}</td>
                     <td className="px-4 py-2">{b.totalBill.toLocaleString()} LKR</td>
                     <td className="px-4 py-2">{b.deposit.toLocaleString()} LKR</td>
                     <td className="px-4 py-2">{b.advancePayment.toLocaleString()} LKR</td>
                     <td className="px-4 py-2">{b.additionalCharges.toLocaleString()} LKR</td>
                     <td className="px-4 py-2">{b.status}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}
