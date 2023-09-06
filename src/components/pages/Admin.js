import React, { useState } from 'react';
import Panel from '../AdminComponents/Panel';

function Admin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(false);

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
                setIsLogin(true)
            } else {
                setMessage('Giriş Başarısız');
            }
        } catch (error) {
            console.error('Hata:', error);
            setMessage('Bir hata oluştu');
        }
    };

    return (
        <>
            {!isLogin ? (
                <div className='container p-5'>
                    <h1 className='text-center mt-4'>Admin Girişi</h1>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <input
                            className='mt-2 p-1'
                            type="text"
                            placeholder="Kullanıcı Adı"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            className='mt-2 p-1'
                            type="password"
                            placeholder="Şifre"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className='btn btn-primary mt-3 w-25' onClick={handleLogin}>Giriş Yap</button>
                        <p>{message}</p>
                    </div>
                </div>
            ) :
                <Panel />
            }
        </>
    );
}

export default Admin;
