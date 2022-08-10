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

  const languages = ['English', 'Russian', 'German', 'Japanese', 'French'];

  const dispatch = useDispatch();

  const changeLanguage: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(languageSlice.actions.setLanguage(e.target.value));
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
        <div className='row'>
          <div className='col'>
            <select className='form-select' onChange={changeLanguage}>
              {languages.map((l, i) => (
                <option value={l} key={i}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div className='col'>
            <button className='btn btn-warning me-2' onClick={toggleLogin}>
              Toggle Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
