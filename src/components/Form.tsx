import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_USER = gql`
    mutation AddUser($name: String!, $email: String!) {
        insert_pre_user(objects: { name: $name, email: $email }) {
            returning {
                id
                name
                email
            }
        }
    }
`;

const Form: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [addUser, { data, loading, error }] = useMutation(ADD_USER);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addUser({ variables: { name, email } });
            alert('数据已发送');
            setName('');
            setEmail('');
        } catch (err) {
            console.error(err);
            alert('发送失败');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', color: 'white' }}>
            <div>
                <label>姓名:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>邮箱:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? '发送中...' : '发送'}
            </button>
            {error && <p>发送失败: {error.message}</p>}
        </form>
    );
};

export default Form;