import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const { eventID } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/events/${eventID}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event:', error));
  }, [eventID]);

  if (!event) {
    return <div>Loading...</div>;
  }

  const images = [
    { img: event.image1, title: 'Image 1' },
    { img: event.image2, title: 'Image 2' },
    { img: event.image3, title: 'Image 3' },
    { img: event.image4, title: 'Image 4' },
    { img: event.image5, title: 'Image 5' },
  ];

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Card>
            <CardMedia>
              <Box sx={{ height: 300 }}>
                <ImageList sx={{ width: '100%', height: 900 }} cols={3} rowHeight={300}>
                  {images.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </CardMedia>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{  borderRadius: '15px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.03)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia sx={{ margin:1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
              <Box
                component="img"
                src={event.image1}
                alt="ArtistImg"
                sx={{ width: 200, height: 200, borderRadius: '50%', objectFit: 'cover' }}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}>
                {event.eventArtist}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>
                Musician
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: '15px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.03)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' } }}>
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
                {event.eventStartDate} - {event.eventEndDate}
                <br />
                <PlaceIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                {event.location}
                <br />
                <PaidIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                ${event.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: '15px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.03)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' } }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}>
                Share this event
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                <XIcon />
                <InstagramIcon />
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

        <Grid item xs={12}>
          <Card sx={{ borderRadius: '15px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.03)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' } }}>
            <CardContent>
              <Box
                sx={{
                  my: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  p: 2,
                  border: '2px solid grey',
                  textAlign: 'left'
                }}
              >
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}>
                  <b>NOTE</b>
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}>
                  Family Zone Mandates
                </Typography>
                <ul>
                  <li>Child must compulsorily be accompanied by an adult.</li>
                  <li>Child and Adult ticket required to be purchased separately.</li>
                  <li>Children between 3 to 14 years need compulsory supervision of Adult.</li>
                  <li>Children will be only allowed in Family Zone.</li>
                </ul>
              </Box>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}>
                Venue Layout
              </Typography>
              <Box display="flex" justifyContent="center">
                <img src="https://edsheerankl2024.my/wp-content/uploads/es-seatmap_only-v2-min.png" alt=" " height="600" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default List;
