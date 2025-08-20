import LoginForm from "@/components/auth/LoginForm";
import heroCar from "@/assets/hero-car.jpg";
import imaLogo from "@/assets/ima-logo.png";

export default function LoginPage() {
   return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
         {/* Background Image and Gradient */}
         <div className="absolute inset-0 z-0">
            <img
               src={heroCar}
               alt="Luxury car background"
               className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary-glow/60"></div>
         </div>
         {/* Login Card */}
         <div className="relative z-10 w-full max-w-md bg-white/60 dark:bg-gray-900/70 rounded-xl shadow-lg p-8 backdrop-blur-md border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <img src={imaLogo} alt="Car Icon" className="w-12 h-12 text-accent-foreground" />
               </div>
               <div>
                  <h1 className="text-xl font-bold text-primary">IMA TRADERS</h1>
                  <p className="text-sm text-primary/70">Premium Rentals</p>
               </div>
            </div>
            <LoginForm />
         </div>
      </div>
   );
}
