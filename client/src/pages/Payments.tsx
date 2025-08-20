import PaymentForm from "@/components/payments/PaymentForm";
import PaymentList from "@/components/payments/PaymentList";

export default function PaymentsPage() {
   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 py-8">
         <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-accent mb-8 text-center">Payments</h1>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                  <PaymentForm />
               </div>
               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                  <PaymentList />
               </div>
            </div>
         </div>
      </div>
   );
}
