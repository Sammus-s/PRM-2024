import { Box, Button, Container, Stack, Typography } from "@mui/material";

function HighLightSection(){
    return(
        <Box>
            <Container>
                <Stack
                  direction="row"
                >
                    <img src="assets/theBoys.jpg"/>
                    <Stack
                      sx={{
                        justifyContent:'center',
                        paddingLeft:'3rem'
                      }}
                    >
                        <Typography
                          variant="h4"
                        >
                            The Boys
                        </Typography>
                        
                        <Typography
                          variant="subtitle2"
                        >
                            <span
                              style={{
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                borderColor: 'orange',
                                padding: '0.2rem',
                                marginRight: '0.3rem'
                              }}
                            >16</span>
                            fantasia, aventura, the boys
                        </Typography>

                        <Typography
                          variant="subtitle1"
                          sx={{
                            paddingTop:'2rem',
                            marginBottom:'0.5rem'
                          }}
                        >
                            Sinopse
                        </Typography>
                        
                        <Typography
                          variant="body2"
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ea, nam sed autem alias quidem accusantium animi temporibus soluta nemo quibusdam at. Laborum odio blanditiis enim doloremque eos aliquid deserunt.
                        </Typography>

                        <Stack
                          direction="row"
                          gap={1}
                          sx={{
                            paddingY:'1rem'
                          }}
                        >
                            <Button variant="outlined" >Assistir</Button>
                            <Button variant="outlined" >Detalhes</Button>
                        </Stack>
                        
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
};

export default HighLightSection;