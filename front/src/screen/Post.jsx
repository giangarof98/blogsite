import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import { Box, Card, Button, CardContent, Typography } from "@mui/material";

import axios from "axios"

export default function () {
    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

    const fetchPosts = async() =>{
        try {
            const data = await axios.get(`/api/post/${id}`)
            const res = data
            // console.log(res.data)
            setPost(res.data)
            return res.data
            
        } catch (err) {
            console.log('something went wrong: ', err.message)
        }
    }

    const updatePostScreen = async(id) => {
        navigate(`/post/update/${id}`)
    }
      
      useEffect(() => {
          fetchPosts()
      }, [id])
  return (

        <>
            <div>
                {isLoading ? (
                <p>Loading...</p>
                ) : (
                    <div>
                        {/* Render or use 'post' */}
                        <Box sx={{
                                width:'30%',
                                // marginTop:4, 
                                display:'grid', 
                                alignContent:'center', 
                                // gridTemplateColumns: 'repeat(2, 1fr)', 
                                gap:3, 
                                margin:'auto'
                        }}>

                                <Card 
                                    key={post._id} 
                                    spacing={3} 
                                    sx={{marginTop:4}}
                                >
                                    
                                    <CardContent>
                                        <Typography variant="h5" color="text.secondary">{post.title}</Typography>
                                        {Array.isArray(post.image) && post.image.length > 0 && (
                                            <img src={post.image[0].url} width={250} height={250} />     
                                        )}
                                        <Typography variant="body1">{post.description}</Typography>
                                    </CardContent>

                                    <Button variant="contained" onClick={() => updatePostScreen(post._id)}>
                                        <Typography variant="h5" color="">Options</Typography>
                                    </Button>
                                    
                                </Card>

                        </Box>
                    </div>
            )}

            </div>
        
        </>

  )
}
