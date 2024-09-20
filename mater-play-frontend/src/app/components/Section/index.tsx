import { Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";

const movies = [
      {poster: 'aAcólita.jpg'}
    , {poster: 'AlertadeRisco.jpg'}
    , {poster: 'AmigosImaginários.jpg'}
    , {poster: 'DivertidaMente2.jpg'}
    , {poster: 'FuriosaMadMax.jpg'}
    , {poster: 'house-of-dragons-poster.jpg'}
    , {poster: 'MateriaEscura.jpg'}
    , {poster: 'oMeninoeaGarca.jpg'}
    , {poster: 'theBoys.jpg'}
    , {poster: 'umLugarSilenciosoDiaUm.jpg'}
];

function Section(){
    return(
        <Box>
            <Container>
                <Typography
                  variant="h6"
                >
                    Para Toda a Família
                </Typography>

                <Stack
                  direction="row"
                  gap={0.5}
                >
                  {movies.map(item => (
                    <MovieCard poster={'assets/'+item.poster}/>
                  ))}
                  
                </Stack>
            </Container>
        </Box>
    )
}

export default Section;