import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

const HomeLayout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        {children}
      </div>
    </>
  );
};

export default HomeLayout;