import React, { useState, useEffect } from "react"
import axios from "axios"

import { Box, Card, Button, CardContent, CardMedia, Typography } from "@mui/material";

export default function AllPosts() {
    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(null)

    // first way
    const fetchPosts = async() =>{
        try {
            const data = await axios.get('/api/post')
            const res = data
            // console.log(res.data)
            setPost(res.data)
            return res.data
            
        } catch (err) {
            console.log('something went wrong: ', err.message)
        }
      }
      
      useEffect(() => {
          fetchPosts()
      }, [])

    
    // second way
    
    // It Works... dont delete it or modify it, please..!
    // useEffect(() => {
    //     const fetchData = async() => {
    //         const {data} = await axios.get('/api/post')
    //         console.log(data)
    //     }
    //     fetchData()
    // }, [])
      

    return(
        // <>
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {/* Render or use 'post' */}
                    <Box sx={{
                            width:'70%',
                            // marginTop:4, 
                            display:'grid', 
                            alignContent:'center', 
                            gridTemplateColumns: 'repeat(2, 1fr)', 
                            gap:3, 
                            margin:'auto'
                    }}>

                        {post.map((item) => (
                            <Card 
                                key={item._id} 
                                sx={{marginTop:5}}
                                
                            >
                                
                                <CardMedia 
                                    sx={{height:'auto'}} 
                                    style={{
                                        width: "600",
                                        maxHeight: "600px",
                                      }}
                                    component='image'
                                    image={item.image[0].url}
                                />
                                    {/* {Array.isArray(item.image) && item.image.length > 0 && (
                                        // <Typography variant="body1">{item.image[0].url}</Typography>
                                        <img src={item.image[0].url} />     
                                        )} */}
                                {/* </CardMedia> */}
                        
                                {/* </CardContent> */}
                                <Typography variant="h5" color="text.secondary">{item.title}</Typography>
                                <Typography variant="body1">{item.description}</Typography>

                                <Button variant="contained" size="medium" >
                                    <Typography variant="h5" color="text.secondary" component='a' href={`/post/${item._id}`}>Go</Typography>
                                </Button>
                                
                            </Card>
                        ))}

                    </Box>
                </div>
            )}

        </div>
        // </>
    )
}       