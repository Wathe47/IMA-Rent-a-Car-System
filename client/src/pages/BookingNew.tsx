import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeaderWhiteBg from "@/components/HeaderWhiteBg";

export default function BookingNew() {
   const [searchParams] = useSearchParams();
   const vehicleId = searchParams.get("vehicleId");
   const [vehicle, setVehicle] = useState<any>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const navigate = useNavigate();

   // Customers state
   const [customers, setCustomers] = useState<any[]>([]);
   const [selectedCustomer, setSelectedCustomer] = useState<{ customerId: number; name?: string; nic?: string } | null>(null);
   const [customersLoading, setCustomersLoading] = useState(true);
   const [customersError, setCustomersError] = useState<string | null>(null);

   useEffect(() => {
      const fetchCustomers = async () => {
         setCustomersLoading(true);
         setCustomersError(null);
         try {
            const token = localStorage.getItem("token");
            const res = await fetch("/api/customers", {
               headers: { Authorization: token ? `Bearer ${token}` : "" },
            });
            if (!res.ok) throw new Error("Failed to fetch customers");
            const data = await res.json();
            setCustomers(data.content || data);
         } catch (err: any) {
            setCustomersError(err.message || "Unknown error");
         } finally {
            setCustomersLoading(false);
         }
      };
      fetchCustomers();
   }, []);

   useEffect(() => {
      if (!vehicleId) {
         setError("No vehicle selected.");
         setLoading(false);
         return;
      }
      const fetchVehicle = async () => {
         setLoading(true);
         setError(null);
         try {
            const token = localStorage.getItem("token");
            const res = await fetch(`/api/vehicles/${vehicleId}`, {
               headers: { Authorization: token ? `Bearer ${token}` : "" },
            });
            if (!res.ok) throw new Error("Failed to fetch vehicle");
            setVehicle(await res.json());
         } catch (err: any) {
            setError(err.message || "Unknown error");
         } finally {
            setLoading(false);
         }
      };
      fetchVehicle();
   }, [vehicleId]);

   // Booking form state
   const [customerId, setCustomerId] = useState("");
   const [startDatetime, setStartDatetime] = useState("");
   const [endDatetime, setEndDatetime] = useState("");
   const [deposit, setDeposit] = useState("");
   const [advancePayment, setAdvancePayment] = useState("");
   const [bookingLoading, setBookingLoading] = useState(false);
   const [bookingError, setBookingError] = useState<string | null>(null);
   const [bookingSuccess, setBookingSuccess] = useState(false);

   const handleBooking = async (e: React.FormEvent) => {
      e.preventDefault();
      setBookingLoading(true);
      setBookingError(null);
      setBookingSuccess(false);
      try {
         const token = localStorage.getItem("token");
         const payload = {
            bookingId: undefined, // let backend auto-generate
            customerId: Number(customerId),
            vehicleId: Number(vehicleId),
            startDatetime,
            endDatetime,
            distance: 0,
            customerNameWithNic:
               selectedCustomer ? `${selectedCustomer.name || ''}${selectedCustomer.nic ? ' (' + selectedCustomer.nic + ')' : ''}`.trim() : '',
            vehicleNameWithReg:
               vehicle ? `${vehicle.manufacture || ''} ${vehicle.model || ''}${vehicle.registrationNo ? ' (' + vehicle.registrationNo + ')' : ''}`.trim() : '',
            totalBill: 0,
            deposit: Number(deposit),
            advancePayment: Number(advancePayment),
            additionalCharges: 0,
            status: "BOOKED",
         };
         const res = await fetch("/api/bookings", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: token ? `Bearer ${token}` : "",
            },
            body: JSON.stringify(payload),
         });
         if (!res.ok) throw new Error("Failed to create booking");
         setBookingSuccess(true);
         setCustomerId("");
         setSelectedCustomer(null);
         setStartDatetime("");
         setEndDatetime("");
         setDeposit("");
         setAdvancePayment("");
      } catch (err: unknown) {
         if (err instanceof Error) {
            setBookingError(err.message);
         } else {
            setBookingError("Unknown error");
         }
      } finally {
         setBookingLoading(false);
      }
   };

   return (
      <>
         <HeaderWhiteBg />
         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50 dark:from-gray-900 dark:to-yellow-950 py-8">
            <div className="container mx-auto max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mt-16">
               <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">&larr; Back</Button>
               <h1 className="text-2xl font-bold text-primary mb-6">Book Vehicle</h1>
               {loading ? (
                  <div>Loading vehicle details...</div>
               ) : error ? (
                  <div className="text-red-500">{error}</div>
               ) : vehicle ? (
                  <div className="mb-6">
                     <div className="font-semibold text-lg mb-2">{vehicle.manufacture} {vehicle.model} ({vehicle.registrationNo})</div>
                     <div className="text-gray-600 mb-1">Type: {vehicle.type}</div>
                     <div className="text-gray-600 mb-1">Fuel: {vehicle.fuelType}</div>
                     <div className="text-gray-600 mb-1">Seats: {vehicle.seats}</div>
                     <div className="text-gray-600 mb-1">Daily Rate: {vehicle.dailyRate} LKR</div>
                     <div className="text-gray-600 mb-1">Extra Km Rate: {vehicle.extraKmRate} LKR</div>
                     <div className="text-gray-600 mb-1">Transmission: {vehicle.transmissionType}</div>
                  </div>
               ) : null}
               {/* Booking form */}
               <form onSubmit={handleBooking} className="space-y-4 mb-4">
                  <div>
                     <label className="block mb-1 font-medium">Customer</label>
                     {customersLoading ? (
                        <div className="text-gray-500 text-sm">Loading customers...</div>
                     ) : customersError ? (
                        <div className="text-red-500 text-sm">{customersError}</div>
                     ) : (
                        <select
                           className="w-full border rounded px-3 py-2"
                           value={customerId}
                           onChange={e => {
                              setCustomerId(e.target.value);
                              const found = customers.find((c: { customerId: number }) => String(c.customerId) === e.target.value);
                              setSelectedCustomer(found || null);
                           }}
                           required
                        >
                           <option value="">Select a customer</option>
                           {customers.map((c: { customerId: number; name?: string; nic?: string }) => (
                              <option key={c.customerId} value={c.customerId}>
                                 {c.name ? `${c.name} (${c.nic})` : `Customer (${c.nic || 'NIC unknown'})`}
                              </option>
                           ))}
                        </select>
                     )}
                  </div>
                  <div className="flex gap-4">
                     <div className="flex-1">
                        <label className="block mb-1 font-medium">Start Datetime</label>
                        <input
                           type="datetime-local"
                           className="w-full border rounded px-3 py-2"
                           value={startDatetime}
                           onChange={e => setStartDatetime(e.target.value)}
                           required
                        />
                     </div>
                     <div className="flex-1">
                        <label className="block mb-1 font-medium">End Datetime</label>
                        <input
                           type="datetime-local"
                           className="w-full border rounded px-3 py-2"
                           value={endDatetime}
                           onChange={e => setEndDatetime(e.target.value)}
                           required
                        />
                     </div>
                  </div>
                  {/* Estimated Distance and Rate Per Unit removed from user input */}
                  <div className="flex gap-4">
                     <div className="flex-1">
                        <label className="block mb-1 font-medium">Deposit (LKR)</label>
                        <input
                           type="number"
                           className="w-full border rounded px-3 py-2"
                           value={deposit}
                           onChange={e => setDeposit(e.target.value)}
                           required
                           min={0}
                        />
                     </div>
                     <div className="flex-1">
                        <label className="block mb-1 font-medium">Advance Payment (LKR)</label>
                        <input
                           type="number"
                           className="w-full border rounded px-3 py-2"
                           value={advancePayment}
                           onChange={e => setAdvancePayment(e.target.value)}
                           required
                           min={0}
                        />
                     </div>
                  </div>
                  {/* Status selection removed from user input, always set to BOOKED on create */}
                  {bookingError && <div className="text-red-500 text-sm">{bookingError}</div>}
                  {bookingSuccess && <div className="text-green-600 text-sm">Booking successful!</div>}
                  <Button type="submit" className="w-full bg-primary text-white font-bold py-2 rounded" disabled={bookingLoading}>
                     {bookingLoading ? "Booking..." : "Book Now"}
                  </Button>
               </form>
            </div>
         </div>
      </>
   );
}
