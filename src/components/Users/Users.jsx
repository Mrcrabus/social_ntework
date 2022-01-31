import React from 'react';
import User from "./User/User";
import styles from './Users.module.css'
import Pagination from "./Pagination/Pagination";

const Users = ({users, page, setPage, totalCount}) => {
    return (
        <div className={styles.wrapper}>
            {users.map((user) =>
                <User id={user.id} key={user.id} name={user.name}/>
            )}
            <Pagination page={page} setPage={setPage} totalCount={totalCount}/>

        </div>
    );
};

export default Users;
