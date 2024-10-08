import React, { useState, useEffect } from 'react';
import {
  Box, Button, Card, CardContent, CardMedia, Container, Grid, ImageList, ImageListItem, Typography
} from '@mui/material';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaidIcon from '@mui/icons-material/Paid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TextField from '@mui/material/TextField';

// const StandardImageList = ({ images }) => {
//   return (
//     <ImageList sx={{width: '100%', height: 900 }} cols={3} rowHeight={300}>
//       {images.map((img, index) => (
//         <ImageListItem key={index}>
//           <img
//             src={img}
//             alt={`Image ${index + 1}`}
//             loading="lazy"
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// };

const ImageCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: 'none',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: `0 8px 16px rgba(0, 0, 0, 0.2)`,
  },
}));

const ImageViewer = ({ images }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {images.map((img, index) => ( 
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ImageCard>
              <CardMedia
                component="img"
                height="300"
                image={img}
                alt={`Image ${index + 1}`}
                sx={{ objectFit: 'cover' }}
              />
            </ImageCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const StyledButton = styled(Button)({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  padding: '10px 20px',
  backgroundColor: '#1976d2',
  color: 'white',
  borderRadius: '20px',
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: '#1565c0',
    transform: 'scale(1.1)',
  },
});

const List = () => {
  const [likeCount, setLikeCount] = useState(2);
  const [commentVisible, setCommentVisible] = useState(false);


  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  const toggleCommentVisibility = () => {
    setCommentVisible(!commentVisible);
  };

  const [event, setEvent] = useState(null);
  const { eventID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/events/${eventID}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event details:', error));
  }, [eventID]);

  if (!event) return <p>Loading...</p>;

  return (
    <Container className='eventDetails'>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Card sx={{backgroundColor:'#181a26'}}>
            <CardMedia>
              <Box sx={{ height: 300 }}>
                <ImageViewer images={[event.image2, event.image3, event.image4, event.image5]} />
              </Box>
            </CardMedia>
          </Card>
        </Grid>

        {/* Artist Box */}
        <Grid item xs={12} sm={6} md={4}> 
        <Card sx={{ 
            borderRadius: '15px', 
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', 
            transition: 'transform 0.3s, box-shadow 0.3s', 
            '&:hover': { transform: 'scale(1.03)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            height: '100%'
          }}>
            <CardMedia sx={{ margin: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
              <Box
                component="img"
                src={event.image5}
                alt="ArtistImg"
                sx={{ width: 200, height: 200, borderRadius: '50%', objectFit: 'cover' }}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}>
                {event.eventArtist}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>
                Artist
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Details Box */}
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ 
              borderRadius: '15px', 
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', 
              transition: 'transform 0.3s, box-shadow 0.3s', 
              '&:hover': { transform: 'scale(1.03)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }, 
              height: '100%'
            }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}>
                <b>{event.eventName}</b>
              </Typography>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Roboto, sans-serif', fontStyle: 'italic', color: '#555' }}>
                {event.eventShortDescription}
              </Typography>
              <StyledButton variant="contained" sx={{ my: 2 }}>
                BOOK
              </StyledButton>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>
                <CalendarMonthIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                {event.eventStartDate} to {event.eventEndDate}
                <br />
                <PlaceIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                {event.location}
                <br />
                <PaidIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Ticket Fare: ${event.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Share Box */}
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ 
            borderRadius: '15px', 
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', 
            transition: 'transform 0.3s, box-shadow 0.3s', 
            '&:hover': { transform: 'scale(1.03)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }, 
            height: '100%'
          }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}>
                Share this event
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  <XIcon sx={{fontSize: 35, cursor:"pointer"}} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon sx={{fontSize: 35, cursor:"pointer"}} />
                </a>
              </Box>
              
              <Box display="flex" justifyContent="center" alignItems="center" my={2} gap={1}>
                <StyledButton variant="contained" onClick={handleLikeClick}>
                  <FavoriteIcon sx={{ mr: 1 }} />
                </StyledButton>
                <Typography variant="body1" color="text.secondary">
                  {likeCount}
                </Typography>
                <br/>
                <StyledButton variant="contained" sx={{ my: 2 }}>
                <ChatBubbleIcon onClick={toggleCommentVisibility} sx={{ cursor: 'pointer' }} />
                  {commentVisible && (
                    <Box mt={1}>
                      <TextField
                        label="Add a comment"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                      />
                    </Box>
                  )}
              </StyledButton>
            </Box>
            </CardContent>
          </Card>
        </Grid>

{/* Location */}
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', textAlign: 'center', '&:hover': { transform: 'scale(1.02)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' } }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
                Location
              </Typography>
              <img width='700px' src="https://media.wired.com/photos/5a6a61938c669c70314b300d/master/pass/Google-Map-US_10.jpg"></img>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card
            sx={{
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  my: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  p: 2,
                  border: '2px solid grey',
                  textAlign: 'left',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}
                >
                  <b>NOTE</b>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}
                >
                  Family Zone Mandates
                </Typography>
                <ul>
                  <li>Child must compulsorily be accompanied by an adult.</li>
                  <li>Child and Adult ticket required to be purchased separately.</li>
                  <li>Children between 3 to 14 years need compulsory supervision of Adult.</li>
                  <li>Children will be only allowed in Family Zone.</li>
                </ul>
              </Box>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 'bold',
                  color: '#333',
                }}
              >
                Venue Layout
              </Typography>
              <Box display="flex" justifyContent="center">
                <img
                  src="https://edsheerankl2024.my/wp-content/uploads/es-seatmap_only-v2-min.png"
                  alt="Venue Layout"
                  height="600"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', textAlign: 'center', '&:hover': { transform: 'scale(1.02)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' } }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>
                Click on <b>Interested</b> to stay updated about this event.
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center" my={2}>
                <StyledButton variant="contained">
                  <ThumbUpIcon sx={{ mr: 1 }} />
                  Interested
                </StyledButton>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Roboto, sans-serif', color: '#666', marginTop: '16px' }}>
                Join the community of people who have shown interest recently.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default List;
