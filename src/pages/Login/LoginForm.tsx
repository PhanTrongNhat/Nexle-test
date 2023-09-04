import {
  ContentWrapper,
  Email,
  ForgotPassword,
  Introduction,
  Password,
  PasswordLabelWrapper,
  Title,
} from './styled';
import { Button, Space } from 'components';
import SocialLogin from 'components/SocialLogin';
import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessageInput from 'components/ErrorMessageInput';
import { EMAIL, EMAIL_REGEX, PASSWORD, PASSWORD_REGEX } from 'utils';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { login, selectAuth } from 'slice/authSlice';
import { useNavigate } from 'react-router-dom';
import { showNotification } from 'slice/notificationSlice';
import { ErrorWrapper, InputWrapper, Label } from 'styled';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    criteriaMode: 'all',
    defaultValues: {
      email: localStorage.getItem(EMAIL),
      password: localStorage.getItem(PASSWORD),
      remember: localStorage.getItem(EMAIL) || localStorage.getItem(PASSWORD),
    },
  });

  const handleFormSubmit = async (data: any) => {
    const { remember, ...body } = data;

    if (remember) {
      localStorage.setItem(EMAIL, body.email);
      localStorage.setItem(PASSWORD, body.password);
    } else {
      localStorage.removeItem(EMAIL);
      localStorage.removeItem(PASSWORD);
    }

    try {
      await dispatch(login(data)).unwrap();
      dispatch(
        showNotification({
          title: 'Thông báo',
          type: 'success',
          description: 'Đăng nhập thành công!',
        })
      );
    } catch (e: any) {
      dispatch(
        showNotification({
          title: 'Thông báo',
          type: 'error',
          description: `Đăng nhập thất bại!\n ${e?.message}`,
        })
      );
    }
  };

  React.useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/dashboard');
    }
  }, [auth.isAuthenticated]);

  return (
    <ContentWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <Title>Welcome to Entrance Test Interview!</Title>
      <Introduction>
        Please sign-in to your account and start the adventure
      </Introduction>
      <Label required={true} htmlFor="email">
        Email
      </Label>
      <InputWrapper>
        <Email
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Email is not valid',
            },
          })}
          type={'email'}
          id={'email'}
          placeholder={'johndoe@gmail.com'}
          name={'email'}
        ></Email>
        <ErrorWrapper>
          <ErrorMessageInput errors={errors} name={'email'} />
        </ErrorWrapper>
      </InputWrapper>
      <Space height={20}></Space>
      <PasswordLabelWrapper>
        <Label required={true} htmlFor="password">
          Password
        </Label>
        <ForgotPassword>Forgot Password?</ForgotPassword>
      </PasswordLabelWrapper>
      <InputWrapper>
        <Password
          {...register('password', {
            required: 'Password is required.',
            pattern: {
              value: PASSWORD_REGEX,
              message: 'Password is not valid',
            },
          })}
          type={'password'}
          id={'password'}
        ></Password>
        <ErrorWrapper>
          <ErrorMessageInput errors={errors} name={'password'} />{' '}
        </ErrorWrapper>
      </InputWrapper>

      <Space height={20}></Space>
      <Label className="container">
        <input type="checkbox" {...register('remember')} />
        <span style={{ marginLeft: '5px' }} className="checkmark">
          Remember me
        </span>
      </Label>
      <Space height={14}></Space>
      <Button disable={!isValid} text={'Login'} />
      <Space height={14}></Space>
      <SocialLogin
        actionText={'Create an account'}
        action={() => {
          navigate('/signup');
        }}
        description={'New on our platform?'}
      ></SocialLogin>
    </ContentWrapper>
  );
};

export default LoginForm;
