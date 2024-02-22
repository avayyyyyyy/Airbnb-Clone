import { getServerSession } from "next-auth";
import { option } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(option);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <div>{session.user?.name}</div> : <div>User</div>}
    </main>
  );
}
