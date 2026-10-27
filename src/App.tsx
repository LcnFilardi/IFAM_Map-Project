import { Header } from "@/components/header";
import { Section } from "@/components/section";
import { lazy, Suspense } from "react";

const CampusMap = lazy(() => import("@/components/campus-map"));

export default function App() {
  return (
    <main className="min-h-screen  bg-slate-50">
      <Header />

      <div className="p-4">
        <Section />

        <Suspense fallback={<p>Carregando mapa...</p>}>
          <CampusMap />
        </Suspense>
      </div>
    </main>
  );
}
