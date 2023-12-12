import React from 'react';
import useFetch from '../../customHooks/useFetch';
import { useParams } from 'react-router-dom';

function Categories() {
  const { id } = useParams();
  const url = `https://api.escuelajs.co/api/v1/products/${id}`;
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
      <img src={data.images[0]} alt='Image'/>
    </div>
  );
}

export default Categories