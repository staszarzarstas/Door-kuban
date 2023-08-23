import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Container, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // Стили для заголовков
  heading: {
    margin: 0,
    fontSize: 28,
  },
  subheading: {
    margin: 0,
    fontSize: 24,
  },
  // Стили для навигации
  nav: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
  navList: {
    display: 'flex',
    padding: 0,
    listStyle: 'none',
  },
  navItem: {
    padding: 10,
  },
  // Стили для главной секции
  hero: {
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    padding: 50,
  },
  ctaButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    borderRadius: 4,
    marginTop: 20,
  },
  // Стили для каталога дверей
  catalog: {
    padding: 50,
  },
  doorItem: {
    marginBottom: 30,
    padding: 10,
    width: 200,
    textAlign: 'center',
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.text.primary}`,
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  doorItemImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  doorItemHeading: {
    marginTop: 10,
  },
  doorItemText: {
    marginBottom: 10,
  },
  // Стили для раздела "О нас"
  aboutUs: {
    backgroundColor: theme.palette.background.default,
    padding: 50,
  },
  // Стили для раздела "Контакты"
  contact: {
    padding: 50,
  },
  // Стили для подвала
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    textAlign: 'center',
    padding: 20,
  },
}));

const MyComponent = () => {
  const classes = useStyles();

  return (
    <div>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <a href="#" className={classes.navLink}>
              Home
            </a>
          </li>
          {/* Добавьте другие пункты меню */}
        </ul>
      </nav>

      <section className={classes.hero}>
        <Typography variant="h1" className={classes.heading}>
          Hero Section
        </Typography>
        <Button variant="contained" className={classes.ctaButton}>
          Call to Action
        </Button>
      </section>

      <section className={classes.catalog}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.doorItem}>
              <img src="door1.jpg" alt="Door 1" className={classes.doorItemImage} />
              <h3 className={classes.doorItemHeading}>Door 1</h3>
              <p className={classes.doorItemText}>Lorem ipsum dolor sit amet.</p>
            </Paper>
          </Grid>
          {/* Добавьте другие элементы каталога */}
        </Grid>
      </section>

      <section className={classes.aboutUs}>
        <Typography variant="h2" className={classes.subheading}>
          About Us
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim nisl ac ex
          hendrerit, ac tristique odio molestie. In hac habitasse platea dictumst.
        </Typography>
      </section>

      <section className={classes.contact}>
        <Typography variant="h2" className={classes.subheading}>
          Contact
        </Typography>
        {/* Добавьте форму контакта или другую информацию */}
      </section>

      <footer className={classes.footer}>
        <Typography variant="body2">
          &copy; 2023 Your Company. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default MyComponent;
