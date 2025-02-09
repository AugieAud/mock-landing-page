//import statements
import Counter from "../components/Counter"; //import counter component
import Posts from "../components/Posts"; //import posts component
import { Providers } from "./providers"; //import providers which wraps everything and sets up TanStack Query

export default function Home() {
  //creates a react functional component called home, main page of the app
  return (
    <Providers>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Practice Landing Page</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Counter with Jotai</h2>
          <Counter />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Posts from API</h2>
          <Posts />
        </section>
      </main>
    </Providers>
  );
}
