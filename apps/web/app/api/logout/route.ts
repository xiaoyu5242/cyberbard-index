import { signOut } from "../../server/auth";

export async function GET(request: Request) {
  await signOut({ redirectTo: "/" });
}
