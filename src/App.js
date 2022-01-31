import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Users from "./components/Users/Users";
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home/Home";
import UserDetails from "./components/Users/UserDetails/UserDetails";


const App = () => {

    let [users, setUsers] = useState([])
    let [page, setPage] = useState(1)
    let [totalCount, setTotalCount] = useState(1)

    useEffect(() => axios.get('https://social-network.samuraijs.com/api/1.0/users', {
        params: {
            page,
            count: 20
        }
    })
        .then(res => {
                console.log(res)
                setTotalCount(res.data.totalCount)
                console.log(totalCount)

                return setUsers(res.data.items)
            },
        ), [page, totalCount])

    console.log(users)


    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/users'
                       element={<Users users={users} page={page} setPage={setPage} totalCount={totalCount}/>}/>
                <Route path='/users/:id' element={<UserDetails users={users}/>}/>

            </Routes>


        </div>
    );
};

export default App;
