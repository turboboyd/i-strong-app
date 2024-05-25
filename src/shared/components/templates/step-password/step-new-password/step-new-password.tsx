import React, { FC, useCallback, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { IPasswordData, IPhoneData } from '@/interfaces/user'
import { InputComponent } from '@/shared/components/ui'
import { IconInvisible, IconVisible } from '@/shared/icons'
import { passwordPattern, pinPattern, required } from '@/shared/validation'

import { AuthFormComponent } from '../../auth-form'

interface IStepNewPassword {
  namePass: `new-pin-code` | `new-password`
  phoneNumber?: IPhoneData
  mutate: (data: any) => void
}

const StepNewPassword: FC<IStepNewPassword> = ({ phoneNumber, mutate, namePass }) => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { isValid },
  } = useForm<IPasswordData>({
    mode: 'all',
    reValidateMode: 'onChange',
  })

  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

  const toggleNewPasswordVisibility = useCallback(() => {
    setIsNewPasswordVisible((prev) => !prev)
  }, [])

  const toggleConfirmPasswordVisibility = useCallback(() => {
    setIsConfirmPasswordVisible((prev) => !prev)
  }, [])

  const onSubmit: SubmitHandler<IPasswordData> = (data: IPasswordData) => {
    mutate({ ...data, ...phoneNumber })
    reset()
    setIsNewPasswordVisible(false)
    setIsConfirmPasswordVisible(false)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = event.keyCode || event.which
    const keyValue = String.fromCharCode(keyCode)
    if (namePass === `new-pin-code` && !/^\d+$/.test(keyValue)) {
      event.preventDefault()
    }
  }

  const currentPassword = watch('new_password')
  return (
    <AuthFormComponent onSubmit={handleSubmit(onSubmit)} textButton='Далі' isFormValid={isValid}>
      <Controller
        name='new_password'
        control={control}
        rules={{
          required: required,
          pattern: namePass !== 'new-pin-code' ? passwordPattern : pinPattern,
        }}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <InputComponent
            key='new_password'
            inputId='new_password'
            type={isNewPasswordVisible ? 'text' : 'password'}
            value={value || ``}
            onChange={onChange}
            onBlur={onBlur}
            label='Придумай пароль'
            onKeyPress={handleKeyPress}
            error={!!error}
            placeholder='Пароль'
            errorText={error?.message}
            sideAction={toggleNewPasswordVisibility}
            icon={isNewPasswordVisible ? <IconInvisible /> : <IconVisible />}
            maxLength={namePass !== 'new-pin-code' ? 15 : 4}
          />
        )}
      />

      <Controller
        name='confirmPassword'
        control={control}
        rules={{
          required: required,
          validate: (value) => value === currentPassword || 'Пароль не збігається',
        }}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <InputComponent
            key='confirmPassword'
            inputId='confirmPassword'
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            value={value || ``}
            onChange={onChange}
            onBlur={onBlur}
            label='Повтори придуманий пароль'
            onKeyPress={handleKeyPress}
            error={!!error}
            placeholder='Пароль'
            errorText={error?.message}
            sideAction={toggleConfirmPasswordVisibility}
            icon={isConfirmPasswordVisible ? <IconInvisible /> : <IconVisible />}
            maxLength={namePass !== 'new-pin-code' ? 15 : 4}
          />
        )}
      />
    </AuthFormComponent>
  )
}

export default StepNewPassword
