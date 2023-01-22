import s from "./styles.module.scss";

function Spinner ({ size, backColor, frontColor, thickness }) {

    return (
        <div className={s.spinner} style={{
            width: size,
            height: size,
            border: `${thickness} solid ${backColor}`,
            borderTopColor: frontColor,
        }}></div>
    );
}

export default Spinner;