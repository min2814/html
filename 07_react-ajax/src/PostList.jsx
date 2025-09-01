import { useEffect, useState } from 'react';
import { fetchPosts } from './api';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function get() {
        const res = await fetchPosts();
        setPosts(res);
        setLoading(false);
        console.log(res);
    }

    useEffect(() => {
        // fetchUsers()
        //   .then(data => {
        //     setUsers(data);
        //     setLoading(false);
        //   })
        //   .catch(err => {
        //     setError(err);
        //     setLoading(false);
        //   });
        get();

    }, []);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러: {error.message}</p>;

    return (
        <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
            {/* ========This seat is BABO seat ===========*/}
        </ul>
    );
}

export default PostList;
