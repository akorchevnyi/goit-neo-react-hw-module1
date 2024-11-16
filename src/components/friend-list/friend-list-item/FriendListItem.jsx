import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
    const isOnlineStyle = clsx({
        [css.online] : isOnline,
        [css.offline]: !isOnline
    });

    return (
        <div className={css.card}>
            <img className={css.image} src={avatar} alt="Avatar" width="48"/>
            <p className={css.name}>{name}</p>
            <p className={isOnlineStyle}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}
