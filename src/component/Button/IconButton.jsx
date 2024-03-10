// components/IconButton.jsx

const IconButton = ({ icon: Icon, text, onClick, className, ...restProps }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} {...restProps}>
      {Icon && <Icon className="icon" />} {text}
    </button>
  );
};

export default IconButton;
