import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Breathtaking from "./Breathtaking/Breathtaking";
import CarouselCard from "./CarouselCard/CarouselCard";
import Destination from "./Destination/Destination";
import Discover from "./Discover/Discover";
import HolidayCart from "./HolidayCart/HolidayCart";
import Mediterranean from "./Mediterranean/Mediterranean";
import PackUp from "./PackUp/PackUp";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HolidayCart></HolidayCart>
            <Discover></Discover>
            <Breathtaking></Breathtaking>
            <CarouselCard></CarouselCard>
            <Mediterranean></Mediterranean>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Destination></Destination>
            <PackUp></PackUp>
        </div>
    );
};

export default Home;