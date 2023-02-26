import { AiOutlineUpload } from "react-icons/ai";
import Input from "../../customs/Input";
import Button from "../../customs/Button";
import Spinner from "../../components/Spinner";
import ImageDiv from "../../components/ImageDiv";
import useAddAndEdit from "../../hooks/useAddAndEdit";
import PageTopPart from "../../components/PageTopPart";
import ErrorMessage from "../../components/ErrorMessage";
import FileUploadButton from "../../components/FileUploadButton";
import ComponentLoading from "../../components/ComponentLoading";
import s from "./styles.module.scss";

function AddAndEdit({ type }) {
  const {
    data,
    perc,
    target,
    error,
    loading,
    photoURL,
    btnLoading,
    handleFileChange,
    handleSubmit,
    handleInputChange,
  } = useAddAndEdit(type);

  return (
    <div className={s.container}>
      <PageTopPart title={target.pageTopTitle} />
      <hr />
      {loading ? (
        <ComponentLoading className={s.loading} />
      ) : (
        <section className={s.formWrapper}>
          <div className={s.imageUploadWrapper}>
            <ImageDiv className={s.image} bgImage={
              photoURL || data.photoURL || 
              data.flags?.png || target.defaultPhoto
            } />
            <FileUploadButton 
              className={s.fileUpload}
              handleFileChange={handleFileChange}
            >
              Image <AiOutlineUpload />
            </FileUploadButton>
          </div>
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.inputsWrapper}>
              {error && <ErrorMessage error={error} />}
              {target.inputs.map(input => (
                <label htmlFor={input.id} key={input.id}>
                  {input.label}
                  <Input
                    attr={{
                      id: input.id,
                      type: input.type,
                      name: input.name,
                      placeholder: input.placeholder,
                      value: input.special
                        ? data.name.common
                        : data[input.name],
                      required: true,
                      autoFocus: input.autoFocus,
                      onChange: (e) => handleInputChange(e, input.special)
                    }}
                  />
                </label>
              ))}
            </div>
            <Button disabled={btnLoading || (perc !== null && perc < 100)}>
              {btnLoading ? (
                <Spinner
                  size={18}
                  backColor={"#e3e3e3"}
                  frontColor={"#fff"}
                  thickness={"2px"}
                />
              ) : (
                target.btnText
              )}
            </Button>
          </form>
        </section>
      )}
    </div>
  );
}

export default AddAndEdit;