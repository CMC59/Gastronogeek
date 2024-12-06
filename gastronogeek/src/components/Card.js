'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './Card.module.css';
import TransitionLink from '@/components/TransitionLink';

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

export default function RecipeCard({ recipe }) {
  return (
    <Card className={styles.Cardstyle} sx={{ width: 400, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={recipe.images[0]}
        title={recipe.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {truncateText(recipe.desc, 130)} {/* Truncate the description */}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Temps de préparation : {recipe.prepTime}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Difficulté : {recipe.difficulty}
        </Typography>
      </CardContent>
      <CardActions>
        <TransitionLink url={`/recipeapi/${recipe.slug}`} >
          <Button size="medium">Voir la recette</Button>
        </TransitionLink>
        <IconButton aria-label="ajouter aux favoris">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
