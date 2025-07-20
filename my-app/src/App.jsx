import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { gql, useQuery } from '@apollo/client';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
          </p>
          <DisplayLocations />
    </>
  )
}
const GET_BOOKS = gql`
  query {
    books {
    author
    title
  }
  }
`;

const GET_HUMAN = gql`
query {
    human(humanId: $id){
 author
    title
}
  }
`

function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;


    const { loading: loading1, error: error1, data: data1 } = useQuery(GET_HUMAN, { variables: { humanId: '1000' } });
    debugger;
    if (loading1) return <p>Loading...</p>;
    if (error1) return <p>Error : {error1.message}</p>;


    return
    data.books.map(({ author, title, description, photo }) => (
        <div key={author}>
            <h3>{title}</h3>
            <img width="400" height="250" alt="location-reference" src={`${photo}`} />
            <br />
            <b>About this location:</b>
            <p>{author}</p>
            <br />
        </div> ));
}

export default App
