import Link from "next/link";

function App2() {
  return (
    <>
      <h1>App 2</h1>
      <ul>
        <li>
          <Link href="/miniapp2/feature4">Feature4</Link>
        </li>
        <li>
          <Link href="/miniapp2/feature5">Feature5</Link>
        </li>
      </ul>
    </>
  );
}

export default App2;
