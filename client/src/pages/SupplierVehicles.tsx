
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import HeaderWhiteBg from "@/components/HeaderWhiteBg";
import SupplierVehicleList from "@/components/suppliers/SupplierVehicleList";
import SupplierVehicleForm from "@/components/suppliers/SupplierVehicleForm";

export default function SupplierVehiclesPage() {
   const [refresh, setRefresh] = useState(0);
   const [showForm, setShowForm] = useState(false);
   const handleSuccess = () => {
      setRefresh((r) => r + 1);
      setShowForm(false);
   };

   return (
      <>
         {!showForm && <HeaderWhiteBg />}
         <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-950 py-8">
            <div className="container mx-auto">
               <div className="text-center mb-10 animate-fade-in">
                  <h2 className="text-2xl lg:text-5xl font-bold text-primary mb-4">
                     Supplier Vehicles
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                     Assign and manage vehicles for suppliers
                  </p>
               </div>
               <div className="flex items-center justify-between ml-2 mb-6">
                  <Button onClick={() => setShowForm(true)} className="bg-primary mt-4 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:bg-primary/90">
                     + Add Supply
                  </Button>
               </div>
               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                  <SupplierVehicleList key={refresh} />
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
                           <SupplierVehicleForm onSuccess={handleSuccess} />
                        </div>
                     </div>
                  </>
               )}
            </div>
         </div>
      </>
   );
}
