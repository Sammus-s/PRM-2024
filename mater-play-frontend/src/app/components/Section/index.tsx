import { Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";
import { useEffect, useState } from "react";
import { ICategory, IMovie } from "../../@libs/types";
import { MoviesService } from "../../services/movie-service";



type SectionProps = {
    category : ICategory;
}

function Section({category}: SectionProps){

    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(()=>{
      if (category.id) {
        MoviesService.getMoviesByCategory(category.id).then(result => setMovies(result));
      };
    }, []);

    return(
        <Box>
            <Container>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    marginTop: '2rem'
                  }}
                >
                    {category.name}
                </Typography>

                <Stack
                  direction="row"
                  gap={0.5}
                  sx={{
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingY: '1rem'
                  }}
                >
                  {movies.map(item => (
                    <MovieCard key={item.id} poster={'assets/'+item.poster}/>
                  ))}
                  
                </Stack>
            </Container>
        </Box>
    )
}

export default Section;