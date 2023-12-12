import React from 'react';
import useFetch from '../../customHooks/useFetch';
import { useParams } from 'react-router-dom';


function Details() {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 style={{ color: 'red' }}>{data.title}</h2>
      <h4>{data.description}</h4>
      <img src={data.image} alt='Image'/>
    </div>
  );
}

export default Details;