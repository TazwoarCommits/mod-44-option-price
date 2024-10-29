import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const [priceOptions, setPriceOptions] = useState([]);

    useEffect(() => {
        fetch('/PriceOption.json')
            .then(res => res.json())
            .then(data => setPriceOptions(data))
    }, [])

    return (
        <div>
            <h1 className="text-6xl font-bold my-8 text-center">Our Subscription Plan</h1>
            <div className="mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;