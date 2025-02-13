import React, { useContext } from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { } from 'react-bootstrap';
import '../index.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {  useNavigate } from 'react-router-dom';
import { Data } from '../context/DataProvider';
export const QuizApp = () => {
    const navigate = useNavigate();
    const {setDifficulty,difficulty,setCategoryName} = useContext(Data);
    const categories = [
        { name: "General Knowledge", value: "general_knowledge",difficulty : '' },
        { name: "Science", value: "science",difficulty : '' },
        { name: "History", value: "history",difficulty : '' },
        { name: "Geography", value: "geography",difficulty : '' },
        { name: "Sports & Leisure", value: "sport_and_leisure",difficulty : '' },
        { name: "Film & TV", value: "film_and_tv",difficulty : '' },
        { name: "Food & Drink", value: "food_and_drink",difficulty : '' },
        { name: "Music", value: "music" },
        { name: "Society & Culture", value: "society_and_culture",difficulty : '' }
    ];
    const difficultyLevel = (e)=>{
        // setDifficulty({...categories,})
    }
    const categoryUpdate = (e)=>{
        // setCategoryName(e)
        localStorage.setItem("categoryName", JSON.stringify(e)); 
        navigate("/QuizTest");
    }
    return (
        <section id='mainPage'>
            <Container maxWidth="lg">
                <Typography variant="h4" className='heading' sx={{ boxShadow: 2, textTransform: "uppercase", textAlign: 'center', p: 3, mb: 3 }} >
                    best quiz is here
                </Typography>
                <Typography variant="h6"  sx={{ textTransform: "uppercase", textAlign: 'center', p: 1, mb:2 }} >
                    this website never give you the same question again
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
                    {categories.map((item, index) => {
                        return (
                            <Card sx={{ width: 300 }} key={index}>

                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="180"
                                    image={`https://picsum.photos/300/180?${item.name}=1`} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" >
                                        {item.name}
                                    </Typography>

                                </CardContent>
                                <CardActions sx={{ display: 'flex' }}>
                                    <Button onClick={() => categoryUpdate(item.value)}variant="outlined" endIcon={<PlayArrowIcon />}>
                                        start
                                    </Button>
                                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                        <InputLabel id="demo-select-small-label">difficulty</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            // value={difficulty}
                                            label="difficulty"
                                            onChange={difficultyLevel}
                                        >
                                            <MenuItem >
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value='easy'>easy</MenuItem>
                                            <MenuItem value='medium'>medium</MenuItem>
                                            <MenuItem value='hard'>hard</MenuItem>
                                        </Select>
                                    </FormControl>
                                </CardActions>
                            </Card>

                        )
                    })}

                </Box>
            </Container>
        </section>
    )
}
