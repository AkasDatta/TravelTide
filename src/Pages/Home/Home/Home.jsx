import Banner from "./Banner/Banner";
import Breathtaking from "./Breathtaking/Breathtaking";
import CarouselCard from "./CarouselCard/CarouselCard";
import Discover from "./Discover/Discover";
import HolidayCart from "./HolidayCart/HolidayCart";
import Mediterranean from "./Mediterranean/Mediterranean";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HolidayCart></HolidayCart>
            <Discover></Discover>
            <Breathtaking></Breathtaking>
            <CarouselCard></CarouselCard>
            <Mediterranean></Mediterranean>
        </div>
    );
};

export default Home;