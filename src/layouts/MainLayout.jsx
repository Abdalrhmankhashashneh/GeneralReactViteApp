import MainAtom from "../components/atoms/MainAtom";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

const MainLayout = ({ children }) => {
  return (
    <MainAtom className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar/>

      <MainAtom className="flex-1 container mx-auto px-4 py-6">{children}</MainAtom>

      <Footer/>
    </MainAtom>
  );
};

export default MainLayout;