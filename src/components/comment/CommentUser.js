import { useState } from "react";
import style from "./CommentUser.module.css"

function CommentUser(props) {
    console.log(props)
    const comment = props.listCmt;
    return(
        <div className={style.card_comment}>
            <p className={style.card_user_name}>{comment.usename}</p>
            <p className={style.card_user_comment}>{comment.comment}</p>
        </div>
    );
}
export default CommentUser;