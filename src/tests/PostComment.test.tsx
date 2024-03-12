import React from "react";




const Post = () => {
    const [comment, setComment] = React.useState('');
    const [comments, setComments] = React.useState<string[]>([]);

    const handleCommentChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setComment(e.target.value);
    };

    const handleSubmit = () => {
        if (comment.trim() !== '') {
            setComments([...comments, comment]); 
            setComment('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={comment}
                onChange={handleCommentChange}
                data-testid="comment-input" 
            />
            <button onClick={handleSubmit} data-testid="submit-button">Submit</button> 
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
};

export default Post;
