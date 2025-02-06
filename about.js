```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import fetch from 'node-fetch'; // Import fetch

export async function getServerSideProps() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();

  return {
    props: {
      characters: data.results,
    },
  };
}

export default function About({ characters }) {
  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
```