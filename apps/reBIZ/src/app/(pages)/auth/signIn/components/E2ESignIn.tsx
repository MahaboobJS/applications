import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { TextField } from '@mui/material';
import { signIn } from 'next-auth/react';

import { Buttons, Layout } from '@ruyyaan/shared/ui';
// import { isE2EEnabled } from '@ruyyaan/reBiz/util-access';

export const E2ESignIn = () => {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const { email, password } = data as { email: string; password: string };
    // password should match the one we have in authOptions.js
    signIn('credentials', { username: email, password });
  };

  // if (!isE2EEnabled()) {
  //   return null;
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Layout.BoxVertical sx={{ backgroundColor: '#fff', p: 2, borderRadius: 1 }}>
        <TextField {...register('email')} placeholder={'email@ruyyaan.com'} />
        <TextField {...register('password')} type={'password'} placeholder={'password'} />
        <Buttons.PrimaryButton text={'SignIn E2E'} type={'submit'} />
      </Layout.BoxVertical>
    </form>
  );
};
