import Sidebar from "../components/sidebar";
import Charts from "../components/charts";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow ml-64 relative">
          <Charts />
        </main>
      </div>
    </>
  );
}
