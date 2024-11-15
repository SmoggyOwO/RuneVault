import { auth } from "@/lib/auth";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export default function () {
  return (
    <div>
      <div className="text-3xl">Welcome back, Aditya</div>
    </div>
  );
}
