import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment.jsx';
import { Avatar } from './Avatar.jsx';
import styles from './Post.module.css';
import { useState } from 'react';


export function Post({author, publishedAt, content }){
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(comment) {
        const commentsWithOutDeleteOne = comments.filter(x => x !== comment);
       setComments(commentsWithOutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
               {content.map(c => {
                    if(c.type === 'paragraph'){
                        return <p key={c.content}>{c.content}</p>;
                    }
                    else if(c.type === 'link'){
                       return (
                            <p key={c.content}>
                                <a href="#">{c.content}</a>
                            </p>
                        );
                    }
               })}
            </div>  

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    value = {newCommentText}
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    );
               })}
            </div>

        </article>
    )
}
