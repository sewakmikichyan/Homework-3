import { useState } from "react";
import Styles from "./AccordionSection.module.css";

const accordionData = [
    {
        title: "Вы работаете по договору?",
        text: "Мы принимаем оплату наличными, переводом на банковскую карту или перечислением безналичных средств на р/с компании на основании выставленного счета."
    },
    {
        title: "Вы работаете по договору?",
        text: "Мы принимаем оплату наличными, переводом на банковскую карту или перечислением безналичных средств на р/с компании на основании выставленного счета."
    },
    {
        title: "Вы работаете по договору?",
        text: "Мы принимаем оплату наличными, переводом на банковскую карту или перечислением безналичных средств на р/с компании на основании выставленного счета."
    },
    {
        title: "Вы работаете по договору?",
        text: "Мы принимаем оплату наличными, переводом на банковскую карту или перечислением безналичных средств на р/с компании на основании выставленного счета."
    },
    {
        title: "Вы работаете по договору?",
        text: "Мы принимаем оплату наличными, переводом на банковскую карту или перечислением безналичных средств на р/с компании на основании выставленного счета."
    },
]

const AccordionSection = () => {
    return (
        <section className={Styles.section}>
            <div className="container">
                <div className={Styles.section__content}>
                    <h3 className={Styles.title}>Вопросы и ответы по благоустройству</h3>
                    <div className={Styles.accordion}>
                        {
                            accordionData.map(({title, text}) => {
                                return (
                                    <div className={Styles.accordion_item} key={Math.random()}>
                                        <div className={Styles.accordion_header}>
                                            <h4 className={Styles.header_title}>{title}</h4>
                                        </div>
                                        <div className={Styles.accordion_body}>
                                            <p className={Styles.body_text}>
                                                {text}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AccordionSection;