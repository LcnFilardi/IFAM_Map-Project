import CampusMap from '@/components/campus-map';
import { Header } from '@/components/header';
import { Section } from '@/components/section';


export default function App() {


  return (
    <main className="min-h-screen  bg-slate-50">
      <Header />

      <div className="p-4 ">
        <Section />

        <CampusMap />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 text-center text-slate-600">

      </div>
    </main>
  )
}
