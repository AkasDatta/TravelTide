import image1 from "../../../../assets/shell.png";
import image2 from "../../../../assets/women_sea.png";
const CarouselCard = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="">
                <img src={image1} alt="" />
            </div>
            <div>
                <img src={image2} alt="" />
            </div>
        </div>
    );
};

export default CarouselCard;