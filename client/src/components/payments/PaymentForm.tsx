import { useState } from "react";
import { API_BASE_URL } from "@/lib/api";

export default function PaymentForm() {
   const [form, setForm] = useState({
      bookingId: "",
      amount: "",
      paymentMethod: "",
      date: ""
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
         const res = await fetch(`${API_BASE_URL}/api/payments`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
               bookingId: Number(form.bookingId),
               amount: Number(form.amount),
               paymentMethod: form.paymentMethod,
               date: form.date
            })
         });
         if (!res.ok) throw new Error("Failed to add payment");
         setSuccess(true);
         setForm({ bookingId: "", amount: "", paymentMethod: "", date: "" });
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
         <h2 className="text-lg font-semibold mb-2">Add Payment</h2>
         <div className="mb-2">
            <label className="block mb-1">Booking ID</label>
            <input type="text" name="bookingId" value={form.bookingId} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
         </div>
         <div className="mb-2">
            <label className="block mb-1">Amount</label>
            <input type="number" name="amount" value={form.amount} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
         </div>
         <div className="mb-2">
            <label className="block mb-1">Payment Method</label>
            <input type="text" name="paymentMethod" value={form.paymentMethod} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
         </div>
         <div className="mb-2">
            <label className="block mb-1">Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
         </div>
         {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
         {success && <div className="text-green-600 text-sm mb-2">Payment added successfully!</div>}
         <button type="submit" className="bg-accent text-white px-4 py-2 rounded mt-2" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
         </button>
      </form>
   );
}
