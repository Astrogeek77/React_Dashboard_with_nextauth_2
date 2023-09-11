"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function SignoutButton() {
  return (
    <div>
      <button
        className="px-3 py-1 bg-red-500 hover:bg-red-700 text-white rounded-md"
        onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
      >
        Sign Out
      </button>
    </div>
  );
}
