import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import "./global.css";
import { routes } from "./router/routes";

const queryClient = new QueryClient();

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="nova-software-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | Nova Software" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
