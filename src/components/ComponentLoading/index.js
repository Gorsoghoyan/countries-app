import Spinner from "../Spinner";

function ComponentLoading({ className }) {
  return (
    <Spinner
      className={className}
      size={"50px"}
      backColor="#00acac"
      frontColor="transparent"
      thickness={"3px"}
    />
  );
}

export default ComponentLoading;
