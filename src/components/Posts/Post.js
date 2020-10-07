import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

//posts.js is the parent

const Post = props => {

  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
    
  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(post.id)} numberOfLikes = {post.numberOfLikes}/>
      {/* Comments also wants its props! line 33 = dummbdata[1] and dumbydata[2]*/}
      <Comments comments = {post}/> 
    </div>
  );
};

export default Post;
