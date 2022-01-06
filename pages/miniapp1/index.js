import Link from "next/link";

function App1() {
    return (
      <>
        <h1>App 1</h1>
        <ul>
          <li>
            <Link href="/miniapp1/feature1">Feature1</Link>
          </li>
          <li>
            <Link href="/miniapp1/feature2">Feature2</Link>
          </li>
        </ul>
      </>
    );
}

export default App1;