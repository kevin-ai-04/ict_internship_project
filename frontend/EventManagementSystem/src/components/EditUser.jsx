import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import './EditUser.css';

const EditUser = () => {
    const { userID } = useParams(); // Extract userID from URL parameters
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/users/${userID}`);
                setUser(response.data);
            } catch (error) {
                setError('Error fetching user data');
            } finally {
                setLoading(false);
            }
        };

        if (userID) {
            fetchUser();
        } else {
            setError('No user ID provided');
            setLoading(false);
        }
    }, [userID]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`http://localhost:4000/users/${userID}`, user);
            history.push('/users'); // Redirect after successful update
        } catch (error) {
            setError('Error updating user data');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="edit-user-container">
            <div className="edit-user-content">
                <h1>Edit User</h1>
                <form className="user-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="userName">Name</label>
                        <input
                            type="text"
                            id="userName"
                            value={user?.userName || ''}
                            onChange={(e) => setUser({ ...user, userName: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userEmail">Email</label>
                        <input
                            type="email"
                            id="userEmail"
                            value={user?.userEmail || ''}
                            onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPhone">Phone</label>
                        <input
                            type="text"
                            id="userPhone"
                            value={user?.userPhone || ''}
                            onChange={(e) => setUser({ ...user, userPhone: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="profilePic">Profile Picture URL</label>
                        <input
                            type="text"
                            id="profilePic"
                            value={user?.profilePic || ''}
                            onChange={(e) => setUser({ ...user, profilePic: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="submit-button">Save</button>
                    <button type="button" className="cancel-button" onClick={() => history.push('/users')}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;