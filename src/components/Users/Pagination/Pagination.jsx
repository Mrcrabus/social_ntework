import React from 'react';
import styles from './Pagination.module.css'

const Pagination = ({page, setPage, totalCount}) => {

    let lastPage = Math.ceil(totalCount / 30)

    const changePage = (event) => {
        setPage(parseInt(event.target.childNodes[0].nodeValue))
    }

    return (
        <div className={styles.pagination}>
            {page !== 1 ? <div onClick={changePage}>1</div> : ''}
            {page > 2 ? <div onClick={changePage}>{page - 1}</div> : ''}
            {page === lastPage ? '' : <div onClick={changePage}>{(page) + 1}</div>}

            <div onClick={changePage}>{lastPage}</div>
        </div>
    );
};

export default Pagination;
