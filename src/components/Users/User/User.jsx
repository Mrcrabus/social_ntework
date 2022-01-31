import React from 'react';
import {Link} from "react-router-dom";
import styles from './User.module.css'

const User = ({name, id}) => {
    return (
        <div className={styles.wrapper__user}>
            <Link to={`${id}`}>{name}</Link>

        </div>
    );
};

export default User;
