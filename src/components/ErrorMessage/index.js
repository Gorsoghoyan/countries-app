
function ErrorMessage({
  error,
  color = "#db0000",
  fontWeight = "bold",
  fontSize = 14,
  margin = "0 0 20px 0",
  textAlign = "center",
}) {
  return (
    <p style={{ color, fontWeight, fontSize, textAlign, margin }}>{error}</p>
  );
}

export default ErrorMessage;
