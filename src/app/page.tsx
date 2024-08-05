import ActorsSection from '@/components/ActorsSection';
import FramesFilm from '@/components/FramesFilm';
import HeroSection from '@/components/HeroSection';
import MapSection from '@/components/MapSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ActorsSection />
      <FramesFilm />
      {/* <MapSection /> */}
    </main>
  );
};

export default Home;
