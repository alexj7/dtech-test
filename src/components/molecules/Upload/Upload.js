import "./Upload.css";

export const Upload = ({ className, onClick, hasIcon, ...props }) => {
  return <div onClick={onClick} className={className}>{hasIcon ? props.children : null}</div>;
};
