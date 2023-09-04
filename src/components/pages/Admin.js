import React, { useState } from 'react';

function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://hatirac.com/hatirac-backend/adminLogin.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setMessage('Giriş Başarılı');
        // Giriş başarılıysa istediğiniz işlemleri yapabilirsiniz.
      } else {
        setMessage('Giriş Başarısız');
      }
    } catch (error) {
      console.error('Hata:', error);
      setMessage('Bir hata oluştu');
    }
  };

  return (
    <div>
      <h1>Admin Girişi</h1>
      <input
        type="text"
        placeholder="Kullanıcı Adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Giriş Yap</button>
      <p>{message}</p>
    </div>
  );
}

export default Admin;
