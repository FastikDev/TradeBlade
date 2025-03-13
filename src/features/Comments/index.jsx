import React from 'react';
import CommentsItem from './components/CommentItem';
import Button from '../common/Button';
import { commentsList } from './utils/config';

import './index.scss';

const Comments = () => {
  return (
    <section className="comments">
      <h2 className="comments__title">Отзывы учасников комьюнити</h2>
      <div className="comments__list comment">
        {commentsList.map(item => (
          <CommentsItem key={item.id} {...item} />
        ))}
      </div>
      <Button className="comments__btn" text={'Загрузить больше отзывов'} />
    </section>
  );
};

export default Comments;
