export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password }
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token }
  }
}

// export function signUpRequest(username, email, password) {
//   return {
//     type: '@auth/SIGN_UP_REQUEST',
//     payload: { username, email, password }
//   }
// }

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  }
}
