export function PrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} bg-blue-300 hover:bg-red-300`} onClick={onClick} />;
}

export function NextArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} bg-red-500 hover:bg-blue-300`} onClick={onClick} />;
}
