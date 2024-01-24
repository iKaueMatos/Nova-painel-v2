import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import "./global.css";
import { router } from "./router/routes";

export function App() {
  return (
    <HelmetProvider>
        <ThemeProvider storageKey="nova-software-theme" defaultTheme="dark">
          <Helmet titleTemplate="%s | Nova Software" />
          <Toaster richColors />
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
  );
}