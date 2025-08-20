import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { API_BASE_URL } from "@/lib/api";

interface LoginFormProps {
   onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
   const navigate = useNavigate();
   const { setAuthenticated } = useAuth();
   const [form, setForm] = useState({ username: "", password: "" });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      try {
         const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
         });
         if (!res.ok) throw new Error("Invalid username or password");
         const data = await res.json();
         localStorage.setItem("token", data.token);
         setAuthenticated(true);
         if (onSuccess) onSuccess();
         navigate("/");
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
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white rounded rounded-lg shadow p-6 space-y-4 mt-10">
         <h2 className="text-xl font-bold text-primary mb-2">Sign In</h2>
         <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
               type="text"
               name="username"
               value={form.username}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            />
         </div>
         <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
               type="password"
               name="password"
               value={form.password}
               onChange={handleChange}
               className="w-full border rounded px-3 py-2"
               required
            />
         </div>
         {error && <div className="text-red-500 text-sm">{error}</div>}
         <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 rounded font-semibold hover:bg-primary/90"
            disabled={loading}
         >
            {loading ? "Signing in..." : "Sign In"}
         </button>
      </form>
   );
}
