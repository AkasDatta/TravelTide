import Banner from "./Banner/Banner";
import Breathtaking from "./Breathtaking/Breathtaking";
import CarouselCard from "./CarouselCard/CarouselCard";
import Discover from "./Discover/Discover";
import HolidayCart from "./HolidayCart/HolidayCart";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HolidayCart></HolidayCart>
            <Discover></Discover>
            <Breathtaking></Breathtaking>
            <CarouselCard></CarouselCard>
        </div>
    );
};

export default Home;