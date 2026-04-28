import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/lib/auth";
import { PricingProvider } from "@/context/PricingContext";
import { ExamProvider } from "@/context/ExamContext";
import { AIProvider } from "@/context/AIContext";
import { LiveEditProvider } from "@/contexts/LiveEditContext";
import { ThemeProvider } from "next-themes";
import { lazy, Suspense } from "react";
import GlobalErrorBoundary from "@/components/GlobalErrorBoundary";

const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const StoreAdmin = lazy(() => import("./pages/admin/StoreAdmin"));
import AdminRoute from "@/components/auth/AdminRoute";

const queryClient = new QueryClient();

const ToasterProvider = () => (
  <>
    <Toaster />
    <Sonner position="top-center" richColors />
  </>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <GlobalErrorBoundary>
          <AuthProvider>
            <PricingProvider>
              <ExamProvider>
                <AIProvider>
                  <LiveEditProvider>
                    <TooltipProvider>
                      <BrowserRouter>
                        <ToasterProvider />
                        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
                            <Routes>
                             {/* Primary Store Admin Entry Point */}
                             <Route path="/" element={
                               <AdminRoute>
                                 <StoreAdmin />
                               </AdminRoute>
                             } />
                             
                             <Route path="/auth" element={<Auth />} />
                             <Route path="*" element={<Navigate to="/" replace />} />
                           </Routes>
                        </Suspense>
                      </BrowserRouter>
                    </TooltipProvider>
                  </LiveEditProvider>
                </AIProvider>
              </ExamProvider>
            </PricingProvider>
          </AuthProvider>
        </GlobalErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
