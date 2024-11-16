import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
    return <div className={css.profile}>
        <div className={css.imageBlock}>
            <img className={css.image} src={image} alt="User avatar"/>
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.statBlock}>
            <li className={css.stat}>
                <span>Followers</span>
                <span>{followers}</span>
            </li>
            <li className={css.stat}>
                <span>Views</span>
                <span>{views}</span>
            </li>
            <li className={css.stat}>
                <span>Likes</span>
                <span>{likes}</span>
            </li>
        </ul>
    </div>;
}
