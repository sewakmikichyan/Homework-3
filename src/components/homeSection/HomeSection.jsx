import Form from "../form/Form";
import Styles from "./HomeSection.module.css";

const HomeSection = () => {
    return (
        <section className={Styles.section}>
            <div className="container">
                <div className={Styles.section__content}>
                    <h1>Строительство дорог И Благоустройство прилегающих территорий</h1>
                </div>
                <Form pose="absolute"/>
            </div>
        </section>
    )
}

export default HomeSection;