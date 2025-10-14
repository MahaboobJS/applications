"use client";

import { useEffect } from "react";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import { useGetAccessQuery } from "@ruyyaan/reBiz/data-access-api";

import Loading from "../../../loading";

import { LoginPage } from "./LoginPage";

const SignInPage = () => {
  const session = useSession();
  const { data: access } = useGetAccessQuery(session.data);  

  useEffect(() => {
    if (access && "error" in access) {
      console.log("Error in access user access!");
      return;
    }

    if (session.data && access?.homepage) {
      console.log("Redirecting to homepage:", access.homepage);
      redirect(access.homepage);
    }
    // these are the right deps, adding ignore to stop lint warnings
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.status, access]);

  if (session.status === "loading") {
    return <Loading />;
  }

  return <LoginPage />;
};

export default SignInPage;
