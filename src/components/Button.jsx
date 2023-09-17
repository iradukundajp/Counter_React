import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ styling, text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="btn"
      style={{ backgroundColor: styling }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  styling: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired, 
  handleClick: PropTypes.func.isRequired, 
};

export default Button;
