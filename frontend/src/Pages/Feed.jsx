import React, { useState, useEffect } from 'react'

const Feed = () => {
    // Dummy posts — jab tum backend connect karoge tab real data aayega
    const [posts, setPosts] = useState([
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600',
            caption: 'Beautiful mountain view 🏔️',
            created_at: '2026-02-23'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
            caption: 'Beach vibes 🏖️',
            created_at: '2026-02-22'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600',
            caption: 'Night sky ✨',
            created_at: '2026-02-21'
        }
    ])

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