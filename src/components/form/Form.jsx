import cn from "classname";
import Styles from "./Form.module.css";

const Form = ({ pose }) => {
    return (
        <form action="#" className={cn(Styles.form, pose)} onSubmit={(e) => {
            e.preventDefault();
        }}>
            <h3>Онлайн заявка</h3>
            <input type="text" placeholder="Имя" />
            <input type="tel" placeholder="Телефон" />
            <textarea placeholder="Описание работ"></textarea>
            <button>Отправить заявку</button>
        </form>
    )
}

export default Form;