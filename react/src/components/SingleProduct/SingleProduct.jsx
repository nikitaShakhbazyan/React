import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice';
import { HOME_PAGE } from '../../constants/routes';

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate
    const { data, isLoading, isFetching,isSuccess } = useGetProductQuery({id})
    // useEffect (()=>{
    //     if ( !isFetching && !isLoading && !isSuccess){
    //         navigate.push(HOME_PAGE)
    //     }
    // },[])
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct