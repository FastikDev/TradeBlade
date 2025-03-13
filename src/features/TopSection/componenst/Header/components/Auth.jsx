import React from 'react';
import Button from '../../../../common/Button';

const Auth = ({ className }) => {
  return (
    <div className={className}>
      <Button className="signUp" text={'Вход'} />
      <Button className="login" text={'Регистрация'} />
    </div>
  );
};

export default Auth;
