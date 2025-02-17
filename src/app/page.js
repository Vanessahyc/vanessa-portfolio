import Header from "../../components/Header";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header/>
      <main className="p-6">
        <section className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Welcome to VH Design</h1>
            <p className="text-lg leading-relaxed">
              Explore our creative projects and design innovations. Click below to view our featured packaging design project.
            </p>
            <Link href="/floom">View Floom Project</Link>
            <Link href='/fitquest'>View Fitquest Project</Link>
            <Link href='/relay'>View Relay Case Study</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
