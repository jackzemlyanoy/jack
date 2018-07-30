import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm'
import toggleOpen from './decorators/toggleOpen';

function ComentsList({comments=[], isOpen, toggleOpen}){

    const text = isOpen ? 'hide comments' : 'show comments'
    return(
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({comments, isOpen})}
        </div>
    )


   function getBody({comments, isOpen}){
        if(!isOpen) return null
        if(!comments || !comments.length) return(
            <div>
                <p>No comments yet</p>
                <CommentForm/>
            </div>
        )

        return (
            <div>
                <ul>
                    {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
                </ul>
                <CommentForm/>
            </div>
        )
    }
}

ComentsList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default toggleOpen(ComentsList)