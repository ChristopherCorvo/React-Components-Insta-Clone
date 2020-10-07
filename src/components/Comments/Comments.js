import React from 'react';
import Comment from './Comment';
import './Comments.css';

//posts.js is the parent 

const Comments = props => {
 
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;//dumby data
  console.log(comments)
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(commentIndex => {
          const newArray = commentIndex.comments
        
          newArray.forEach(element => {
            console.log(element)
            // return <Comment comment = {element}/> // need to get to the individul comments 
          });
        
      })}
    </div>
  );
};

export default Comments;
