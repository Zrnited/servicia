import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {/* <Sidebar /> */}
      <div className="flex flex-grow">{children}</div>
      <Footer />
    </main>
  );
}
