
import BookingList from "@/components/bookings/BookingList";
import HeaderWhiteBg from "@/components/HeaderWhiteBg";

export default function BookingsPage() {
   return (
      <>
         <HeaderWhiteBg />
         <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 py-8">
            <div className="container mx-auto">
               <div className="text-center mb-10 animate-fade-in">
                  <h2 className="text-2xl lg:text-5xl font-bold text-primary mb-4">
                     Current Bookings
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                     View and manage all current vehicle bookings
                  </p>
               </div>
               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                  <BookingList />
               </div>
            </div>
         </div>
      </>
   );
}
