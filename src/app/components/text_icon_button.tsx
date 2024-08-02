import "../globals.css";

type PropsType = {
  label: string;
  design: string;
  imgUrl: string;
  handleClick: () => void;
};

export default function TextIconButton({
  label,
  design,
  imgUrl,
  handleClick,
}: PropsType) {
  return (
    <button type="button" className={design} onClick={handleClick}>
      {label}
      <img src={imgUrl} alt="icon" />
    </button>
  );
}
