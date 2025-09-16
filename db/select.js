import mysql from 'mysql2/promise';

// 데이터베이스에 연결하기
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydb',
    waitForConnections: true,
    connectionLimit: 10,
});


const getUsers = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM 고객');
        console.log(rows);
    } catch (e) {
        console.error('조회 실패:', e.message);
    } finally {
        await pool.end();
        console.log('풀 종료');
    }
};
getUsers();