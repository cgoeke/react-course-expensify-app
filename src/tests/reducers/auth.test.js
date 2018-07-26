import authReducers from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'user id'
  };
  const state = authReducers({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should set uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducers({ uid: 'user id' }, action);
  expect(state).toEqual({});
});