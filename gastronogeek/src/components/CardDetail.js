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
import TransitionLink from '@/components/TransitionLink';
export default function RecipeDetailCard({ recipe }) {
  return (
    <Card sx={{ maxWidth: 1200, margin: 'auto' }}> {/* Augmentez la largeur ici */}
      {/* Image principale */}
      <CardMedia
        sx={{ height: 300 }}
        image={recipe.images[0]} // Utilisez la première image de la recette
        title={recipe.title}
      />
      <CardContent>
        {/* Titre et informations générales */}
        <Typography gutterBottom variant="h4" component="div">
          {recipe.title} ({recipe.commonTitle})
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Catégorie : {recipe.category} | Type : {recipe.type} | Licence : {recipe.license}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Difficulté : {recipe.difficulty}/5 | Portions : {recipe.defaultPersons} personnes
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Temps de préparation : {recipe.prepTime}
        </Typography>

        {/* Description */}
        <Typography variant="body2" color="textSecondary" paragraph>
          {recipe.desc}
        </Typography>

        {/* Ingrédients */}
        <Typography variant="h6" gutterBottom>
          Ingrédients :
        </Typography>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.quantity ? `${ingredient.quantity} ${ingredient.unit || ''}` : ''} {ingredient.name}
            </li>
          ))}
        </ul>

        {/* Étapes de préparation */}
        <Typography variant="h6" gutterBottom>
          Étapes de préparation :
        </Typography>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        {/* Dressage */}
        <Typography variant="h6" gutterBottom>
          Dressage :
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          {recipe.dressing}
        </Typography>

        {/* Images supplémentaires */}
        {recipe.images.slice(1).map((image, index) => (
          <CardMedia
            key={index}
            sx={{ height: 200, marginTop: 2 }}
            image={image}
            title={`Image ${index + 2} de la recette`}
          />
        ))}

      </CardContent>

      <CardActions>
        {/* <Button size="small">Partager</Button> */}
        {/* Utilisez Link pour renvoyer vers la page de la recette */}
        <TransitionLink url={`/recipeapi`} >
          <Button size="small">Retour liste des recettes</Button>
        </TransitionLink>
      </CardActions>
    </Card>
  );
}
