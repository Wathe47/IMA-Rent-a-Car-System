import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
   const location = useLocation();

   useEffect(() => {
      console.error(
         "404 Error: User attempted to access non-existent route:",
         location.pathname
      );
   }, [location.pathname]);

   return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-red-100 dark:from-gray-900 dark:to-red-950">
         <div className="text-center bg-white dark:bg-gray-900 rounded-xl shadow-lg p-10">
            <h1 className="text-5xl font-extrabold text-red-500 mb-4">404</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Oops! Page not found</p>
            <a href="/" className="text-blue-500 hover:text-blue-700 underline font-semibold">
               Return to Home
            </a>
         </div>
      </div>
   );
};

export default NotFound;
