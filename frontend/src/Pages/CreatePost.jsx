import React, { useState } from 'react'

const CreatePost = () => {
    const [preview, setPreview] = useState(null)
    const [caption, setCaption] = useState('')
    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    // Image select karne pe preview dikhao
    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile) {
            setFile(selectedFile)
            setFileName(selectedFile.name)
            const reader = new FileReader()
            reader.onloadend = () => setPreview(reader.result)
            reader.readAsDataURL(selectedFile)
        }
    }

    // Form submit — backend pe bhejo
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!file) {
            setMessage('❌ Please select an image!')
            return
        }

        setLoading(true)
        setMessage('')

        // FormData banao — image + caption backend pe jayega
        const formData = new FormData()
        formData.append('image', file)
        formData.append('caption', caption)

        try {
            const res = await fetch('http://localhost:5000/create-post', {
                method: 'POST',
                body: formData
            })

            const data = await res.json()

            if (res.ok) {
                setMessage('✅ Post created successfully!')
                // Form reset karo
                setPreview(null)
                setCaption('')
                setFileName('')
                setFile(null)
            } else {
                setMessage('❌ ' + (data.error || 'Something went wrong'))
            }
        } catch (err) {
            setMessage('❌ Server se connect nahi ho paya!')
        }

        setLoading(false)
    }

    return (
        <section className="create-post-section">
            <div className="create-post-card">
                <h1 className="page-title">Create Post</h1>
                <p className="page-subtitle">Share your moment with the world</p>

                {message && <p className="status-message">{message}</p>}

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
                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? '⏳ Uploading...' : '🚀 Create Post'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default CreatePost