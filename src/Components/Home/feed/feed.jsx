import React from 'react';
import bluetick from './bluetick.svg';
import Threads from '../thread/thread';

const TweetUserInfo = ({ user }) => (
  <div className="tweet-user-info">
    <img src={user.imageData.url} alt={user.imageData.alt} />
    <div>
      <p>
        {user.userName} {user.blueTick && <span><img src={bluetick} alt="bluetick" /></span>}
      </p>
      <p>@{user.userId}</p>
      <p className="tweet-date">
        {new Date(user.tweetTime).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
      </p>
    </div>
  </div>
);

const Tweet = ({ tweet }) => (
  <div key={tweet.id} className="tweet-container">
    <TweetUserInfo user={tweet.user} />
    <p className="tweet-text">{tweet.text}</p>
  </div>
);

const Feed = ({ tweetedData }) => (
  <div>
    {tweetedData && tweetedData.length > 0
      ? tweetedData.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
      : <Threads />
    }
  </div>
);

export default Feed;
