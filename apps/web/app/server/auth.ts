import NextAuth, { NextAuthResult } from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";
import { toast } from "sonner";

console.log("process.env.GOOGLE_CLIENT_ID=" + process.env.GOOGLE_CLIENT_ID);
console.log(
  "process.env.GOOGLE_CLIENT_SECRET=" + process.env.GOOGLE_CLIENT_SECRET
);
export default function DelayedToast(msg: string) {
  // useEffect(() => {
  //   // 设置一个3秒的延迟后显示toast
  //   const timer = setTimeout(() => {
  //     toast.success(msg);
  //   }, 3000);
  //   // 清理定时器，防止内存泄漏
  //   return () => clearTimeout(timer);
  // }, []);
}

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  secret: process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: DrizzleAdapter(db),
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      "use client";
      DelayedToast(
        "You are now on the waitlist! 🎉 \n We will notify you when we launch."
      );
    },
    async signOut() {
      "use client";
      DelayedToast(
        "You’ve successfully logged out, but you’re still on the waitlist."
      );
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

function useEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
