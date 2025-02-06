```javascript
// pages/about.js
import fetch from 'node-fetch';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return {
      props: {
        characters: data.results,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        characters: [],
      },
    };
  }
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