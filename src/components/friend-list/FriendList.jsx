import FriendListItem from "./friend-list-item/FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {

    return (
        <ul className={css.friendsList}>
            {
                friends.map(({id, avatar, name, isOnline }) => {
                    return (
                        <li key={id}>
                            <FriendListItem avatar={avatar} name={name} isOnline={isOnline}/>
                        </li>
                    );
                })
            }

        </ul>
    );
}
