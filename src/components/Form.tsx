// export default Form;
import React, { useState } from 'react';
import axios from 'axios';
import message from 'antd/es/message';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://59.66.39.245:5000/add_user', {
        name,
        email
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('数据已发送');
      // message.success('数据已发送');
      setName('');
      setEmail('');
    } catch (err) {
      console.error(err);
      setError('发送失败');
    } finally {
      setLoading(false);
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
      {error && <p>发送失败: {error}</p>}
    </form>
  );
};

export default Form;