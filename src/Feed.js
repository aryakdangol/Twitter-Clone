import React, { useEffect, useState } from 'react'
import "./Feed.css"
import db from './firebase';
import Post from './Post'
import TweetBox from './TweetBox'
import FlipMove from 'react-flip-move';

function Feed() {
    const[posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    },[])


    return (
        <div className = "feed">
            <div className="feed-header">
                <h1>Home</h1>
            </div>
            <TweetBox />
            <FlipMove>
                {posts.map(post => (
                    <Post 
                        id = {post.text}
                        displayName = {post.displayName}
                        username = {post.username}
                        verified = {post.verified}
                        text = {post.text}
                        avatar = {post.avatar}
                        image = {post.image}
                    />
                ))}
            </FlipMove>

        </div>
    )
}

export default Feed
