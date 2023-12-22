import Banner from "./Banner/Banner";
import Discover from "./Discover/Discover";
import HolidayCart from "./HolidayCart/HolidayCart";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HolidayCart></HolidayCart>
            <Discover></Discover>
        </div>
    );
};

export default Home;