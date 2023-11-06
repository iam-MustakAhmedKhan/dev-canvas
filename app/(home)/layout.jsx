import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

const HomeLayout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;