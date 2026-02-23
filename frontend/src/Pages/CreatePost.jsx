import React, { useState } from 'react'

const CreatePost = () => {
    const [preview, setPreview] = useState(null)
    const [caption, setCaption] = useState('')
    const [fileName, setFileName] = useState('')

    // Image select karne pe preview dikhao
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFileName(file.name)
            const reader = new FileReader()
            reader.onloadend = () => setPreview(reader.result)
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Backend connection tum khud karoge — yahan sirf UI hai
        alert('Post ready hai! Backend connect karke save hoga.')
    }

    return (
        <section className="create-post-section">
            <div className="create-post-card">
                <h1 className="page-title">Create Post</h1>
                <p className="page-subtitle">Share your moment with the world</p>

                <form onSubmit={handleSubmit} className="create-post-form">
                    {/* Image Upload Area */}
                    <label className="upload-area" htmlFor="image-input">
                        {preview ? (
                            <img src={preview} alt="Preview" className="image-preview" />
                        ) : (
                            <div className="upload-placeholder">
                                <span className="upload-icon">📷</span>
                                <span className="upload-text">Click to select image</span>
                                <span className="upload-hint">JPG, PNG, GIF supported</span>
                            </div>
                        )}
                        <input
                            type="file"
                            id="image-input"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            hidden
                        />
                    </label>
                    {fileName && <p className="file-name">📎 {fileName}</p>}

                    {/* Caption Input */}
                    <input
                        type="text"
                        name="caption"
                        className="caption-input"
                        placeholder="Write a caption..."
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        required
                    />

                    {/* Submit Button */}
                    <button type="submit" className="submit-btn">
                        🚀 Create Post
                    </button>
                </form>
            </div>
        </section>
    )
}

export default CreatePost