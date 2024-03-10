// components/Button.jsx

const Button = ({ text, onClick, className, ...restProps }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} {...restProps}>
      {text}
    </button>
  );
};

export default Button;
