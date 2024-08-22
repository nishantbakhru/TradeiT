import Link from 'next/link'

export default function HomePage() {
    return (
      <main>
        <h1>Welcome to the Home Page!</h1>
        <Link href="/dashboard">Dashboard</Link>
      </main>
    );
  }


 
// export default function Page() {
//     return <Link href="/dashboard">Dashboard</Link>
// }