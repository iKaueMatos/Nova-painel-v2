import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer";

export function AuthLayout() {
    return (
      <div className="grid min-h-screen grid-cols-2 antialiased">
        <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-black p-10 text-muted-foreground">
          <div className="flex items-center gap-3 text-lg text-foreground">
            <span className="font-bold">
              <a href="" className="text-white">Nova Software</a>
            </span>
          </div>
          <Footer />
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </div>
    );
}