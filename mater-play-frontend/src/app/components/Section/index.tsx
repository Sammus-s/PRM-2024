import { Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";

const movies = [
      {poster: 'aAcolita.jpg'}
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

type SectionProps = {
    title : string;
}

function Section({title}: SectionProps){
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
                    {title}
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
                    <MovieCard poster={'assets/'+item.poster}/>
                  ))}
                  
                </Stack>
            </Container>
        </Box>
    )
}

export default Section;