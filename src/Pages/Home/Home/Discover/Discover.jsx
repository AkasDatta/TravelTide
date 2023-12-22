import discoverBg from "../../../../assets/discover-bg.avif";

import './Discover.css';
const Discover = () => {
    const bgStyle = {
        backgroundImage: `url(${discoverBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh', // Set the height according to your design
        // Add other styles as needed
    };

    return (
        <div style={bgStyle}>
             <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4">
                <div className="flex pt-14">
                    <div className="text-white">
                        <h1 className="text-xl font-bold">Go & Discover</h1>
                        <h1 className="text-3xl font-bold">Breathtaking Cities</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos magnam vel laboriosam dolores consectetur eligendi. Illo voluptatibus aspernatur id ullam.</p>
                    </div>
                    <div>
                        <h2>ff</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;