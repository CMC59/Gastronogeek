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
import Link from 'next/link'; // Importez le composant Link

export default function RecipeCard({ recipe }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={recipe.images[0]} // Utilisez la première image de la recette
        title={recipe.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {recipe.desc}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Temps de préparation : {recipe.prepTime}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Difficulté : {recipe.difficulty}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Partager</Button>
        {/* Utilisez Link pour renvoyer vers la page de la recette */}
        <Link href={`/recipeapi/${recipe.slug}`} passHref>
          <Button size="small">Voir la recette</Button>
        </Link>
        <IconButton aria-label="ajouter aux favoris">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
