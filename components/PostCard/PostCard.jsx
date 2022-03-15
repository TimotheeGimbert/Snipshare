import React from 'react';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { postCardWrapper, top, snippet, bottom, btnsWrapper, btn, reactsWrapper, reacts, comments, openReacts, reactsModal } from './post_card.module.scss';

const PostCard = () => {
  return (
    <div className={postCardWrapper}>
      <div className={top}>
        <ProfileIcon />
        <p>Posté il y a 3 heures.</p>
      </div>
      <div className={snippet}>
        {/* A ajouter quand le système de snippets sera prêt */}
        <p> Snippet </p>
      </div>
      <div className={bottom}>
        <div className={reactsWrapper}>
          <div className={reacts}>
            <p>5 💡</p>
            <p>3 ❤</p>
            <p>12 🚀</p>
          </div>
          <div className={comments}>
            <p>2 commentaires</p>
          </div>
        </div>
        <div className={btnsWrapper}>
          <div className={`${btn} ${openReacts}`}>
            <p>Réagir</p>
            <div className={reactsModal}>
              <img src="idea.svg" alt="lightbulb" />
              <img src="like.svg" alt="like" />
              <img src="approval.svg" alt="approval" />
            </div>
          </div>
          <p className={btn}>Commenter</p>
          <p className={btn}>Partager</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;