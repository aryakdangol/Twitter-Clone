import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import db from './firebase';
import "./TweetBox.css"


function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const[tweetImage, setTweetImage] = useState("");

    const sendTweet = e =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Aryak Dangol',
            username: 'aryakdangol',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://pbs.twimg.com/profile_images/1402282187945295878/UjZTMHUG_400x400.jpg'
        })

        setTweetImage("");
        setTweetMessage("");
    }
        

    return (
        <div className = "tweetBox">
            <form>
                <div className="tweetBox-input">
                    <Avatar src = "https://pbs.twimg.com/profile_images/1402282187945295878/UjZTMHUG_400x400.jpg"  />
                    <input onChange = {(e) => setTweetMessage(e.target.value)} value = {tweetMessage} placeholder = "What's happening?" />

                </div>

                <input value = {tweetImage} onChange = {(e)=> setTweetImage(e.target.value)} type="text" placeholder = 'Optional: Enter image URL' className = 'tweetBox-imageInput' />
                <Button onClick = {sendTweet} className = "tweetBox-button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
