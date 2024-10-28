import PropTypes from "prop-types";

const Features = ({feature}) => {
    return (
        <ul className="list-disc list-inside ">
            <li>{feature}</li>
        </ul>
    );
};
Features.propTypes = {
  feature : PropTypes.string
}

export default Features;