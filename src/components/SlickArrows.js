export function PrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} left-2 z-20`} onClick={onClick} />;
}

export function NextArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} right-2`} onClick={onClick} />;
}
