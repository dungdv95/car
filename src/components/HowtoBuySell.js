import { useState } from 'react'
import style from "./HowtoBuySell.module.css"
import {
    IonCard,
    IonCardContent
} from "@ionic/react";

function HowtoBuySell(props) {
    console.log(props);
    const list = props.listItem;
    const isBuy = props.isBuy;
    return (
        <div className={style.card_total}>
            <div className={style.card_img}>
                <picture className={isBuy ? style.card_img_buy : style.card_img_sell}>
                    <img src={list.imgsrc}></img>
                </picture>
                <div className={style.card_icon_stt}>
                    <span className={style.card_icon_stt_span}>
                        <i>{list.id}</i>
                    </span>
                </div>
            </div>
            <div className={style.card_title}>
                {list.title}
            </div>
            <div className={style.card_text}>
                {list.text}
            </div>
            {/* {list.link ??
                <a className={style.card_link}>View All Cars</a>
            } */}
        </div>
    );
}
export default HowtoBuySell;