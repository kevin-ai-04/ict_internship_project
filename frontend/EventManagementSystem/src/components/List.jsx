import React from 'react';
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

const StandardImageList = () => {
  return (
    <ImageList sx={{ width: '100%', height: 900 }} cols={3} rowHeight={300}>
      {itemData.map((item) => (
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
  );
};

const itemData = [
  { img: 'https://www.hindustantimes.com/ht-img/img/2024/03/10/1600x900/ed_sheeran_1710051495622_1710051500856.jpeg', title: 'Image 1' },
  { img: 'https://cdn.apollo.audio/one/media/6143/5c47/4699/e084/4af2/94a1/ed-sheeran-2022-tour.jpg?quality=80&format=jpg', title: 'Image 2' },
  { img: 'https://th-i.thgim.com/public/news/cities/mumbai/vu92db/article67960642.ece/alternates/FREE_1200/First%20time%20in%20India_%20360%20degree%20revolving%20circular%20stage%20at%20Ed%20Sheerans%20%20-%20%C3%B7%20x%20Tour.jpg', title: 'Image 3' },
];

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
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Card>
            <CardMedia>
              <Box sx={{ height: 300 }}>
                <StandardImageList />
              </Box>
            </CardMedia>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{  borderRadius: '15px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.03)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia sx={{ margin:1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
              <Box
                component="img"
                src="https://static01.nyt.com/images/2021/06/25/arts/25playlist/25playlist-mediumSquareAt3X.jpg"
                alt="ArtistImg"
                sx={{ width: 200, height: 200, borderRadius: '50%', objectFit: 'cover' }}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}>
                ED SHEERAN
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
                <b>Ed Sheeran - Divide Tour</b>
              </Typography>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'Roboto, sans-serif', fontStyle: 'italic', color: '#555' }}>
                Join Ed Sheeran on his Divide Tour!
              </Typography>
              <StyledButton variant="contained" sx={{ my: 2 }}>
                BOOK
              </StyledButton>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>
                <CalendarMonthIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Sept 10 & 11, 2024 at 4:00pm
                <br />
                <PlaceIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Location to be announced: United States
                <br />
                <PaidIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                Ticket Fare: 60 USD
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
