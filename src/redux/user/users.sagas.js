import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";
import UserActionTypes from "./user.types";
import { signInSuccess, signInFailure } from "./user.actions";

export function* googleSignInSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* googleSignInStartSaga() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInSaga);
}

export function* emailSignInSaga({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* emailSignInStartSaga() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInSaga);
}

export function* userSagas() {
  yield all([call(googleSignInStartSaga), call(emailSignInStartSaga)]);
}
