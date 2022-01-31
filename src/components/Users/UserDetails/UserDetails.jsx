import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import styles from './UserDetails.module.css'

const UserDetails = () => {

    let {id} = useParams()

    let [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const result = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`);
            setUser(result.data)
            setIsLoading(false);
        };

        fetchData();
    }, [id])


    console.log(user)

    return (
        <div className={styles.user__container}>


            {!isLoading
                ? <div>
                    <div><img className={styles.img__avatar}
                              src={!!user.photos?.large ? user.photos?.large : 'http://cdn.onlinewebfonts.com/svg/img_110805.png'}
                              alt="..."/></div>
                    <h1>{user.fullName}</h1></div>
                : <div>Loading ...</div>
            }


        </div>
    );
};

export default UserDetails;
