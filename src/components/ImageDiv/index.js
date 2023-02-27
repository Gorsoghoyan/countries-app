import ComponentLoading from "../ComponentLoading";

function ImageDiv({
  className,
  loading,
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
        backgroundImage: !loading ? `url(${bgImage})` : null,
        backgroundSize: bgSize,
        backgroundPosition: bgPosition,
        backgroundRepeat: bgRepeat,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {loading && <ComponentLoading />}
    </div>
  );
}

export default ImageDiv;