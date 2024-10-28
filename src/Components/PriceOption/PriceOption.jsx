import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;

    return (
        <div className="bg-blue-500 text-white/80 rounded-md p-4 flex flex-col justify-between">
            <h2 className=" text-center">
                <span className="text-7xl">{price}</span>
                <span className="text-3xl">/month</span>
            </h2>
            <h4 className="text-3xl text-center">{name}</h4>
            <div className="mt-3 md:mt-5 px-8">
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature} ></Features>)
                }
            </div>
            <button className="mt-4 w-full bg-teal-700 p-2 text-center font-semibold hover:bg-teal-900 ">Subscribe</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;