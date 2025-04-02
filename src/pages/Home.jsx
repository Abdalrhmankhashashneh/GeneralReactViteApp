import { useTranslation } from "react-i18next";
import TextAtom from "../components/atoms/TextAtom";
import MainLayout from "../layouts/MainLayout";
import ImageCarousel from "../components/molecules/ImageCarousel";

function Home() {
  const { t } = useTranslation('home');
  const images = [
    { src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Image 1' },
    { src: 'https://images.pexels.com/photos/5125366/pexels-photo-5125366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Image 2' },
    { src: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Image 3' },
  ];
  return (
    <MainLayout>
      <TextAtom variant="white" >
        <h1>{t('Welcome to your Atomic App')} 🚀</h1>
      </TextAtom>
      <ImageCarousel images={images} />
    </MainLayout>
  );
}

export default Home;
