import "./Button.css";

export const Button = ({ className, onClick, disabled, ...props }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={"cursor-pointer " + className + (disabled ? ' opacity-25 pointer-events-none' : '')}>
      {props.children}
    </button>
  );
};
