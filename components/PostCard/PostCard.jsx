import { ApprovalIcon, LikeIcon, IdeaIcon } from "components/icons";
import React from "react";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import SnippetHighlighter from "../SnippetHighlighter/SnippetHighlighter";
import {
  postCardWrapper,
  top,
  description as descriptionStyle,
  snippet as snippetStyle,
  bottom,
  btnsWrapper,
  btn,
  reactsWrapper,
  reacts,
  reactItem,
  comments,
  openReacts,
  reactsModal,
  postCardDetailPage
} from "./post_card.module.scss";
import {formatDistanceToNow} from 'date-fns';
import {en, fr} from 'date-fns/locale'

const PostCard = ({ language, snippet, description, theme, date, author, detail }) => {
  return (
    <div className={`${postCardWrapper} ${detail && postCardDetailPage}`}>
      <div className={top}>
        <ProfileIcon userName={author} />
        <p>{formatDistanceToNow(new Date(date), {addSuffix: true, locale: fr})}</p>
      </div>
      <div className={descriptionStyle}>
        {description}
      </div>
      <div className={snippetStyle}>
        <SnippetHighlighter 
          snippet={snippet} 
          language={language} 
          theme={theme}
        />
      </div>
      <div className={bottom}>
        <div className={reactsWrapper}>
          <div className={reacts}>
            <div className={reactItem}>
              <p>5 {/* A modifier par le nombre en back */}</p>
              <IdeaIcon />
            </div>
            <div className={reactItem}>
              <p>3 {/* A modifier par le nombre en back */}</p>
              <LikeIcon />
            </div>
            <div className={reactItem}>
              <p>12 {/* A modifier par le nombre en back */}</p>
              <ApprovalIcon />
            </div>
          </div>
          <div className={comments}>
            <p>2 commentaires</p>
          </div>
        </div>
        <div className={btnsWrapper}>
          <div className={`${btn} ${openReacts}`}>
            <p>Réagir</p>
            <div className={reactsModal}>
              <IdeaIcon />
              <LikeIcon />
              <ApprovalIcon />
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
