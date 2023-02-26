import Input from "../../customs/Input";
import s from "./styles.module.scss";
import c from "classnames";

function FileUploadButton({
  className, background, color,
  fontSize, padding, width, height,
  children, handleFileChange
}) {

  return (
    <label 
      className={c(s.fileUpload, className)}
      style={{
        background,
        color,
        fontSize,
        padding,
        width,
        height
      }}
    >
      <Input
        attr={{
          type: "file",
          onChange: (e) => handleFileChange(e.target.files[0]),
        }}
      />
      {children}
    </label>
  );
}

export default FileUploadButton;