import "./Label.css";

export const Label = ({ className, hasClick, ...props }) => {
  return (
    <span className={className} onClick={hasClick ? props.onClick : null}>
      {props.children}
    </span>
  );
};
