import s from "./styles.module.scss";

function Loading () {

    return (
        <div className={s.loader}>
            <div className={s.spinner}></div>
        </div>
    );
}

export default Loading;