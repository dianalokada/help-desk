import Link from "next/link";

export default function Main() {
  return (
    <main>
      <h1>main page</h1>
      <p>
        <Link href="/admin">Go to admin page </Link>
      </p>
    </main>
  );
}
