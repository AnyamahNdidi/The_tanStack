import React from 'react'
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import {FetchPost, CreateDate} from "./Api"
import {Link} from "react-router-dom"

const PostGet = () => {

    const queryClient =  useQueryClient()

    const [title, setTitle] = React.useState("")
    const [dec, setDec] = React.useState("")

    const getData = useQuery({
        queryKey: ["post"],
		queryFn: FetchPost,
    })

    const dposting = useMutation({
        mutationFn:CreateDate,
        onSuccess:(data)=>{
            queryClient.invalidateQueries(["post"])
        }
    })

    console.log(getData)

    const handleSunmit = () =>{

        dposting.mutate({
            title,
            dec
        })
    }

  return (
    <div>
        <center>

            <br/>
            <br/>

            <input type="text"
            value={title}

            onChange={(event) => setTitle(event.target.value)}
            placeholder="enter title"
            />
                <br/>
                <br/>
                <br/>
            <textarea name="dec"
            value={dec}
            onChange = {(e) =>{
                setDec(e.target.value)
            }}

            placeholder="enter dec"
            />

            <br/>
            <br/>

            <button disabled={dposting.isLoading} onClick={handleSunmit}>Add </button>

            {getData.isLoading ? <div>loading</div> : null}
            {
                getData?.data?.data.map((props:any)=>(
                    <Link to={`/detail/${props?._id}`}>
                       <div>
                        <div 
                        
							key={props?._id}
							style={{
								height: "70px",
								width: "300px",
								background: "#f1f1f1",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								margin: "10px",
								border: "1px solid silver",
							}}
                        >

                            <div>{props.title}</div>
                        </div>
                    </div>
                    </Link>
                   
                ))
            }
        </center>
    </div>
  )
}

export default PostGet