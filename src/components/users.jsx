import React, { useState } from 'react';
import api from '../api';
import SearchStatus from './searchStatus';
import User from './user';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';

const Usrs = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 3;
    const count = users.length;

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <React.Fragment>
            <SearchStatus usersLength={users.length} />
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User
                                key={user._id}
                                user={user}
                                onDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </React.Fragment>
    );
};

export default Usrs;
