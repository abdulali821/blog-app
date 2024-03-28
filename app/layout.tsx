import type { Metadata } from "next";
import "./globals.css";

// wrapper
import ReduxWrapper from "@/provider/ReduxWrapper";
import { NavBar } from "@/components";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export const metadata: Metadata = {
  title: "Blog App",
  description: "Welcome to My Blog App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <ReduxWrapper session={session as Session}>
      <html lang="en">
        <body className="min-h-screen pb-10 bg-gray-100">
          <NavBar />
          {children}
        </body>
      </html>
    </ReduxWrapper>
  );
}
