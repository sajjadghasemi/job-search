import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../store/authSlice';

const Home = () => {
  const users = useSelector((state: any) => state.authSlice.defaultDb.users);
  const dispatch = useDispatch();
  console.log(users);

  return (
    <div>
      Home
      <div>
        <button
          onClick={() => {
            dispatch(signUp());
          }}
        >
          submit
        </button>
      </div>
      <div>
        {users.map((item: any) => (
          <h4>{item.firstName}</h4>
        ))}
      </div>
    </div>
  );
  // سجاد جان این برا هوم زحمتش با شما
};

export default Home;
