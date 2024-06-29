"use client"
import { logout } from "@/actions/logout";
import { auth } from "@/auth";
import { useSession, signOut } from "next-auth/react";

const SettingsPage = () => {
  const session = useSession();

  const onClick = () => {
    logout();
  };
  return (
    <div>
      {/* <h1>{session?.user.role}</h1> */}
      {/* {JSON.stringify(session)} */}
      <div className="bg-white p-10 rounded-xl">
        <button type="submit" onClick={onClick}>
          تسجيل خروج
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
