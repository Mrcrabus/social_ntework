import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to='/users'>
                <button>Click me</button>
            </Link>
        </div>
    );
};

export default Home;
