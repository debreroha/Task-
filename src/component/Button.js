import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => { // accepting props from parent component
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};
// giving default values incase the first is not working
Button.defaultProps = {
  color: "steelblue",
};

// giving type for each props
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func,
};

export default Button;
