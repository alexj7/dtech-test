import "./Input.css";

export const Input = ({ className, type, placeholder, value, onChange }) => {
  return (
    <input
      className={'pl-3 mb-3 h-10 rounded border border-purple-400 bg-slate-100 outline-none focus:ring-0 caret-purple-400 text-zinc-600 py-1 ' + className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
