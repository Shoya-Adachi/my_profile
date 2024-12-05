type PropsType = {
  label: string;
  type: "submit" | "reset" | "button";
  btnUi?: string;
  iconUi?: string;
  imgUrl: string;
  handleClick?: () => void;
};

export default function TextIconButton({
  label,
  type,
  btnUi,
  iconUi,
  imgUrl,
  handleClick,
}: PropsType) {
  return (
    <button type={type} className={btnUi} onClick={handleClick}>
      {label}
      <img src={imgUrl} alt="icon" className={iconUi} />
    </button>
  );
}
