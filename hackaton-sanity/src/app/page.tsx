import Hero from "@/components/Hero";
import BrowseStyle from "@/components/BrowseStyle";
import HappyCustomers from "@/components/HappyCustomers";
import "./globals.css";
export default function Home() {
  return (
  <>
  <Hero/>
  <div className="flex items-center  justify-center ">
  <BrowseStyle/>
  </div>
  <HappyCustomers/>
  </>
  );
}
