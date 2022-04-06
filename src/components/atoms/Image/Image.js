import "./Image.css";

export const Image = ({ className, source, alt }) => {
  return <img className={className} src={source} alt={alt} />;
};
