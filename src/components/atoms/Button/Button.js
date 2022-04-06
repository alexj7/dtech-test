import "./Button.css";

export const Button = ({ className, onClick, disabled, ...props }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {props.children}
    </button>
  );
};
