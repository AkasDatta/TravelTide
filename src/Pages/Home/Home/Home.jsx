import Banner from "./Banner/Banner";
import Breathtaking from "./Breathtaking/Breathtaking";
import Discover from "./Discover/Discover";
import HolidayCart from "./HolidayCart/HolidayCart";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HolidayCart></HolidayCart>
            <Discover></Discover>
            <Breathtaking></Breathtaking>
        </div>
    );
};

export default Home;