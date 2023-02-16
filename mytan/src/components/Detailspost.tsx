import React from 'react'
import {useParams} from "react-router-dom"
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import {GetOne, FetchPost} from "./Api"

const Detailspost = () =>{

    const {id} = useParams()

    const fetchData = useQuery({
        queryKey:["post", id],
        queryFn: () => GetOne(id),
    
    })
  return (
    <div>
        <center>
        {fetchData.isLoading ? <h3>Loading..</h3> : null}
        <br />
        <br />
        <br />
        <br />
        <div>
        <div>{fetchData.data?.data?.title}</div>
        <div>{fetchData.data?.data?.dec}</div>
        </div>

        </center>
       
    </div>
  )
}

export default Detailspost
