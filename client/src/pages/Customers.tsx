
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import HeaderWhiteBg from "@/components/HeaderWhiteBg";
import CustomerList from "@/components/customers/CustomerList";
import CustomerForm from "@/components/customers/CustomerForm";

export default function CustomersPage() {
   const [refresh, setRefresh] = useState(0);
   const [showForm, setShowForm] = useState(false);
   const handleSuccess = () => {
      setRefresh((r) => r + 1);
      setShowForm(false);
   };

   return (
      <>
         {!showForm && <HeaderWhiteBg />}
         <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900 dark:to-green-950 py-8">
            <div className="container mx-auto">
               <div className="text-center mb-10 animate-fade-in">
                  <h2 className="text-2xl lg:text-5xl font-bold text-primary mb-4">
                     Manage Customers
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                     Add and manage your customers
                  </p>
               </div>
               <div className="flex items-center justify-between ml-2 mb-6">
                  <Button onClick={() => setShowForm(true)} className="bg-primary mt-4 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:bg-primary/90">
                     + Add Customer
                  </Button>
               </div>
               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                  <CustomerList key={refresh} />
               </div>
               {showForm && (
                  <>
                     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setShowForm(false)} />
                     <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 max-w-2xl w-full relative">
                           <button
                              className="absolute top-3 right-3 text-gray-500 hover:text-primary text-2xl font-bold"
                              onClick={() => setShowForm(false)}
                              aria-label="Close"
                           >
                              &times;
                           </button>
                           <CustomerForm onSuccess={handleSuccess} />
                        </div>
                     </div>
                  </>
               )}
            </div>
         </div>
      </>
   );
}
