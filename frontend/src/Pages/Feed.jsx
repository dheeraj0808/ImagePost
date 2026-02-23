import React, { useState, useEffect } from 'react'

const Feed = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    // Page load hote hi backend se posts laao
    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const res = await fetch('http://localhost:5000/posts')
            const data = await res.json()
            setPosts(data.data || [])
        } catch (err) {
            console.log('Backend se connect nahi ho paya:', err)
        }
        setLoading(false)
    }

    if (loading) {
        return (
            <section className="feed-section">
                <h1 className="page-title">Feed</h1>
                <p className="page-subtitle">Loading posts...</p>
            </section>
        )
    }

    return (
        <section className="feed-section">
            <h1 className="page-title">Feed</h1>
            <p className="page-subtitle">See what everyone is sharing</p>

            <div className="posts-grid">
                {posts.length === 0 ? (
                    <div className="no-posts">
                        <span className="no-posts-icon">📭</span>
                        <p>No posts yet. Be the first to share!</p>
                    </div>
                ) : (
                    posts.map((post) => (
                        <div key={post.id} className="post-card">
                            <div className="post-image-wrapper">
                                <img src={post.image} alt={post.caption} className="post-image" />
                            </div>
                            <div className="post-info">
                                <p className="post-caption">{post.caption}</p>
                                <span className="post-date">{post.created_at}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    )
}

export default Feed