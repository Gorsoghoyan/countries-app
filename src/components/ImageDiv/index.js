
function ImageDiv({
  className,
  width,
  height,
  bgImage,
  margin,
  bgSize = "cover",
  bgRepeat = "no-repeat",
  bgPosition = "center",
  borderRadius = "50%",
}) {

  return (
    <div
      className={className}
      style={{
        width,
        height,
        margin,
        borderRadius,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: bgSize,
        backgroundPosition: bgPosition,
        backgroundRepeat: bgRepeat,
      }}
    >
      
    </div>
  );
}

export default ImageDiv;