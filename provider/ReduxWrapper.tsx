"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const ReduxWrapper = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Toaster richColors position="top-center" expand={true} />
        {children}
      </SessionProvider>
    </Provider>
  );
};

export default ReduxWrapper;
