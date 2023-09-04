import {
  ContentWrapper,
  Email,
  FirstName,
  Introduction,
  LastName,
  Password,
  Privacy,
  Title,
} from './styled';
import { Button, Space } from 'components';
import SocialLogin from 'components/SocialLogin';
import React from 'react';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX, PASSWORD_REGEX, PASSWORD_STATUS } from 'utils';
import ErrorMessageInput from 'components/ErrorMessageInput';
import { login, selectAuth, signup } from 'slice/authSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ErrorWrapper, InputWrapper, Label } from 'styled';
import { useNavigate } from 'react-router-dom';
import { showNotification } from 'slice/notificationSlice';

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const [passwordStatus, setPasswordStatus] = React.useState(
    PASSWORD_STATUS.INVALID
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isValidating },
    getValues,
  } = useForm({
    criteriaMode: 'all',
  });

  React.useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/dashboard');
    }
  }, [auth.isAuthenticated]);

  const handleFormSubmit = async (data: any) => {
    try {
      await dispatch(signup(data)).unwrap();

      const { email, password } = data;

      await dispatch(
        login({
          email: email,
          password: password,
        })
      );

      dispatch(
        showNotification({
          title: 'Thông báo',
          type: 'success',
          description: 'Đăng ký tài khoản thành công!',
        })
      );
    } catch (e) {
      dispatch(
        showNotification({
          title: 'Thông báo',
          type: 'error',
          description: 'Đăng ký tài khoản thất bại!',
        })
      );
    }
  };

  React.useEffect(() => {
    if (!errors?.password) {
      const passwordLength = getValues('password')?.length || 0;

      if (19 > passwordLength && passwordLength > 5) {
        if (passwordLength > 14) {
          setPasswordStatus(PASSWORD_STATUS.STRONG);
        } else if (passwordLength > 11) {
          setPasswordStatus(PASSWORD_STATUS.GOOD);
        } else if (passwordLength > 8) {
          setPasswordStatus(PASSWORD_STATUS.FAIR);
        } else {
          setPasswordStatus(PASSWORD_STATUS.WEEK);
        }
      }
    } else {
      setPasswordStatus(PASSWORD_STATUS.INVALID);
    }
  }, [getValues('password'), isValidating]);

  return (
    <ContentWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <Title>Adventure starts here</Title>
      <Introduction>Make your app management easy and fun!</Introduction>
      <Label required={true} htmlFor="Firstname">
        FirstName
      </Label>
      <InputWrapper>
        <FirstName
          {...register('firstName', {
            required: 'Firstname is required',
          })}
          type={'text'}
          id={'firstName'}
          placeholder={'johndoe'}
        ></FirstName>
        <ErrorWrapper>
          <ErrorMessageInput errors={errors} name={'firstName'} />{' '}
        </ErrorWrapper>
      </InputWrapper>
      <Space height={20}></Space>
      <Label required={true} htmlFor="lastName">
        Lastname
      </Label>
      <InputWrapper>
        <LastName
          {...register('lastName', {
            required: 'Lastname is required',
          })}
          type={'text'}
          id={'lastName'}
          placeholder={'johndoe'}
        ></LastName>
        <ErrorWrapper>
          <ErrorMessageInput errors={errors} name={'lastName'} />{' '}
        </ErrorWrapper>
      </InputWrapper>
      <Space height={20}></Space>
      <Label required={true} htmlFor="email">
        Email
      </Label>
      <InputWrapper>
        <Email
          {...register('email', {
            required: 'Email is required',
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
      <Space height={15}></Space>
      <Label required={true} htmlFor="password">
        Password
      </Label>
      <InputWrapper>
        <Password
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: PASSWORD_REGEX,
              message: 'Password is not valid',
            },
          })}
          type={'password'}
          id={'password'}
        ></Password>
        <ErrorWrapper>
          <ErrorMessageInput
            isPasswordStatus={!errors?.password}
            passwordStatus={passwordStatus}
            errors={errors}
            name={'password'}
          />
        </ErrorWrapper>
      </InputWrapper>

      <Space height={20}></Space>
      <Label className="container">
        <input type="checkbox" />
        <span className="checkmark" style={{ marginLeft: '5px' }}>
          i agree to <Privacy>privacy policy & terms</Privacy>
        </span>
      </Label>
      <Space height={14}></Space>
      <Button disable={!isValid} text={'Sign Up'} />
      <Space height={14}></Space>
      <SocialLogin
        actionText={'Sign in instead'}
        description={'Already have an account?'}
        action={() => {
          navigate('/login');
        }}
      ></SocialLogin>
    </ContentWrapper>
  );
};

export default SignupForm;
