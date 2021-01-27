import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: `http://${window.location.hostname}:8000/graphql`,
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

const App = () => {
  const [posts, setPosts] = useState([]);
  client
    .query({
      query: gql`
        {
          semuaPostingan {
            id
            judul
            deskripsi
            kategori
          }
        }
      `
    })
    .then(result => setPosts(result.data.semuaPostingan));

  return (
    <div className="container">
      <div className="row p-5">
        {posts.map(p => (
          <div className="col-md-4" key={p.id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h4>{p.judul}</h4>
                </div>
                <small>{p.kategori}</small>
                <p className="card-text">{p.deskripsi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
