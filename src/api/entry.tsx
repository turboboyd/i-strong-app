import { useRequest } from '@/api/useRequest'
import { INewPassword, IPasswordReset, ISignIn, ISignUp, IVerifyCode } from '@/interfaces/entry'

export const postSignUpInfo = (form: ISignUp) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useRequest(`register/`, {
    method: 'POST',
    body: form,
  })
}

export const postSignInInfo = (form: ISignIn) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useRequest(`login/`, {
    method: 'POST',
    body: form,
  })
}

export const postVerifyCode = (form: IVerifyCode) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useRequest(`register/verify/`, {
    method: 'POST',
    body: form,
  })
}

export const postPasswordReset = (form: IPasswordReset) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useRequest(`password-reset/request/`, {
    method: 'POST',
    body: form,
  })
}

export const postPasswordResetVerifyCode = (form: IVerifyCode) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useRequest(`password-reset/verify/`, {
    method: 'POST',
    body: form,
  })
}

export const postNewPassword = (form: INewPassword) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useRequest(`password-reset/`, {
    method: 'POST',
    body: form,
  })
}
