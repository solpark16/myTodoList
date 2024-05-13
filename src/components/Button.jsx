const Button = ({ children, onClick, color, className }) => {

    return <button className={className} onClick={onClick}>{children}</button>;
  };
  
  export default Button;