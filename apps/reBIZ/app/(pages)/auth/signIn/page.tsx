"use client";


import { useEffect } from "react";

import { useSession } from "next-auth/react";

import { redirect } from "next/navigation";

import { useGetAccessQuery } from "@ruyyaan/rebiz/data-access-api";


import { LoginPage } from "./LoginPage";
import Loading from "../../../loading";

const SignInPage = () => {
  const session = useSession();
  const { data: access } = useGetAccessQuery(session.data);  

  useEffect(() => {
    if (access && 'error' in access) {
      console.error('Error in access user access!');
      return;
    }

    if (session.data && access?.homepage) {
      redirect(access.homepage);
    }
  }, [session.status, access, session.data]);

  if (session.status === "loading") {
    return <Loading />;
  }

  return <LoginPage />;
};

export default SignInPage;
