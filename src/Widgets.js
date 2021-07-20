import React from 'react'
import "./Widgets.css"
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed,} from "react-twitter-embed"

function Widgets() {
    return (
        <div className = "widgets">
            <div className="widgets-input">
                <SearchIcon  className= "widgets-searchIcon"/>
                <input type="text" placeholder = "Search Twitter" />
            </div>

            <div className="widgets-container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId = {"1417484693608542209"} />
                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "PlayVALORANT" 
                    options = {{height:400}} />

                <TwitterShareButton 
                    url = {"https://google.com"}
                    options = {{text: "#google.com",
                    via : "valorant"}} />
            </div>

        </div>
    )
}

export default Widgets
