import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  FunctionComponent,
  useState,
} from 'react';
import axios from 'axios';
import { restService } from './rest-service';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from './store/app-store';
import { languageSlice } from './store/language-slice';
import { loginSlice } from './store/login-slice';

interface AppProps {}

const App: FunctionComponent<AppProps> = (props: AppProps) => {
  const login = useSelector<AppStore, boolean>((state) => state.login);
  const language = useSelector<AppStore, string>((state) => state.language);

  const dispatch = useDispatch();

  const changeLanguage = () => {
    if (language === 'English') {
      dispatch(languageSlice.actions.setLanguage('Kannada'));
    } else {
      dispatch(languageSlice.actions.setLanguage('English'));
    }
  };

  const toggleLogin = () => {
    if (login) {
      dispatch(loginSlice.actions.logout());
    } else {
      dispatch(loginSlice.actions.login());
    }
  };

  return (
    <>
      <div className='container p-5'>
        <h3>Learning React</h3>
        <p>
          Language: <span className='fw-bold'>{language}</span> login:{' '}
          <span className='fw-bold'>{login ? 'Login' : 'Logout'}</span>
        </p>
        <hr />
        <button className='btn btn-primary me-2' onClick={changeLanguage}>
          Change Language
        </button>
        <button className='btn btn-warning me-2' onClick={toggleLogin}>
          Toggle Login
        </button>
      </div>
    </>
  );
};

export default App;
