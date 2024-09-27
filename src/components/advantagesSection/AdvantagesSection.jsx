import Styles from "./AdvantagesSection.module.css";
import DollarSVG from "../../assets/images/svg/DollarSVG";

const createData = (img, text, key) => (
    {
        img: img,
        text: text,
        key: key
    }
)

const dataCards = [
    createData(<DollarSVG />, "Прозрачное ценообразование и открытый прайс.", 0),
    createData(<DollarSVG />, "Прозрачное ценообразование и открытый прайс.", 1),
    createData(<DollarSVG />, "Прозрачное ценообразование и открытый прайс.", 2)
];

const AdvantagesSection = () => {
    return (
        <section className={Styles.section}>
            <div className="container">
                <div className={Styles.section__content}>
                    <div className={Styles.title_block}>
                        <h4 className={Styles.title_h4}>Наши преимущества </h4>
                        <p className={Styles.title_p}>
                            Дорожно-строительные работы любой сложности и благоустройство территории в Ростове и Ростовской области.
                        </p>
                    </div>
                    <div className={Styles.cards_block}>
                        {
                            dataCards.map(data => {
                                return (
                                    <div className={Styles.card} key={data.key}>
                                        <div className={Styles.card_image}>
                                            {data.img}
                                        </div>
                                        <h5 className={Styles.card_title}>{data.text}</h5>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdvantagesSection;