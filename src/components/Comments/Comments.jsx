import React from 'react'
import CommentsIMG from '../../assets/img/comment.png'
import './comments.css'
const Comments = ({ numberOfComments = 0 }) => {
    return (
        <div className='commentsContainer'>
            <p>{numberOfComments}</p>
            <img src={CommentsIMG} alt="Comments" />
        </div>
    )

}

export default Comments