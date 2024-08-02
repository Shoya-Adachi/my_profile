import "../globals.css";

type PropsType = {
  label: string;
  design: string;
  handleClick: () => void;
};

export default function TextButton({ label, design, handleClick }: PropsType) {
  return (
    <button type="button" className={design} onClick={handleClick}>
      {label}
    </button>
  );
}
