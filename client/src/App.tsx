import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VehiclesPage from "@/pages/Vehicles";
import SuppliersPage from "@/pages/Suppliers";
import CustomersPage from "@/pages/Customers";
import BookingsPage from "@/pages/Bookings";
import BookingNew from "@/pages/BookingNew";
import PaymentsPage from "@/pages/Payments";
import SupplierVehiclesPage from "@/pages/SupplierVehicles";
import LoginPage from "@/pages/Login";
import Header from "@/components/Header";
import { AuthProvider, useAuth } from "@/hooks/useAuth";

const queryClient = new QueryClient();

function AppRoutes() {
   const { isAuthenticated } = useAuth();
   return (
      <Routes>
         <Route path="/login" element={<LoginPage />} />
         <Route path="/vehicles" element={isAuthenticated ? <VehiclesPage /> : <Navigate to="/login" />} />
         <Route path="/suppliers" element={isAuthenticated ? <SuppliersPage /> : <Navigate to="/login" />} />
         <Route path="/customers" element={isAuthenticated ? <CustomersPage /> : <Navigate to="/login" />} />
         <Route path="/bookings" element={isAuthenticated ? <BookingsPage /> : <Navigate to="/login" />} />
         <Route path="/bookings/new" element={isAuthenticated ? <BookingNew /> : <Navigate to="/login" />} />
         <Route path="/payments" element={isAuthenticated ? <PaymentsPage /> : <Navigate to="/login" />} />
         <Route path="/supplier-vehicles" element={isAuthenticated ? <SupplierVehiclesPage /> : <Navigate to="/login" />} />
         <Route path="/" element={<Index />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
}

const App = () => (
   <QueryClientProvider client={queryClient}>
      <TooltipProvider>
         <Toaster />
         <Sonner />
         <AuthProvider>
            <BrowserRouter>
               <AppRoutes />
            </BrowserRouter>
         </AuthProvider>
      </TooltipProvider>
   </QueryClientProvider>
);

export default App;
