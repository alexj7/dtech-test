import "./Heading.css";

export const Heading = ({ ...props }) => {
  return <h1 className="text-3xl pb-3 w-full sm:w-96 text-center font-bold text-zinc-400 border-b-2 border-purple-400">{props.children}</h1>;
};
