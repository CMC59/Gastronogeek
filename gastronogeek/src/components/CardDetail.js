'use client';
import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function RecipeDetailCard({ recipe }) {
  const [servings, setServings] = useState(recipe.defaultPersons);

  const calculateProportionalQuantity = (originalQuantity) => {
    if (!originalQuantity || isNaN(parseFloat(originalQuantity))) {
      return originalQuantity;
    }

    const quantity = parseFloat(originalQuantity);
    const proportionalQuantity = (quantity / recipe.defaultPersons) * servings;
    
    return Number(proportionalQuantity.toFixed(2));
  };

  const handleServingsChange = (newServings) => {
    setServings(newServings);
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 1200, 
        margin: 'auto', 
        boxShadow: 3,
        borderRadius: 4,
        overflow: 'hidden'
      }}
    >
      {/* Image principale */}
      <CardMedia
        sx={{ 
          height: 400, 
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))'
          }
        }}
        image={recipe.images[0]}
        title={recipe.title}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: 20, 
            left: 20, 
            color: 'white', 
            zIndex: 1 
          }}
        >
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
            {recipe.title}
          </Typography>
          <Typography variant="subtitle1">
            {recipe.commonTitle}
          </Typography>
        </Box>
      </CardMedia>
      
      <CardContent>
        {/* Informations générales et nombre de personnes */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box>
            <Typography variant="body1" color="text.secondary">
              Catégorie : {recipe.category} | Type : {recipe.type}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Difficulté : {recipe.difficulty}/5 | Licence : {recipe.license}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              Personnes :
            </Typography>
            <ButtonGroup variant="outlined" size="small">
              {[1, 2, 3, 4].map((num) => (
                <Button 
                  key={num}
                  color={servings === num ? "primary" : "secondary"}
                  onClick={() => handleServingsChange(num)}
                  sx={{ 
                    fontWeight: servings === num ? 'bold' : 'normal',
                    px: 2
                  }}
                >
                  {num}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Description */}
        <Typography variant="body1" color="text.secondary" paragraph sx={{ textAlign: 'justify' }}>
          {recipe.desc}
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {/* Ingrédients */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Ingrédients
            </Typography>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index} disableGutters>
                <ListItemText
                  primary={`${ingredient.quantity 
                    ? `${calculateProportionalQuantity(ingredient.quantity)} ${ingredient.unit || ''}` 
                    : ''} ${ingredient.name}`}
                />
              </ListItem>
            ))}
          </Grid>

          {/* Étapes de préparation */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Étapes de préparation
            </Typography>
            {recipe.steps.map((step, index) => (
              <ListItem key={index} disableGutters>
                <ListItemText
                  primary={`${index + 1}. ${step}`}
                  primaryTypographyProps={{ variant: 'body2' }}
                />
              </ListItem>
            ))}
          </Grid>
        </Grid>

        {/* Dressage */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Dressage
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipe.dressing}
          </Typography>
        </Box>

        {/* Images supplémentaires */}
        {recipe.images.length > 1 && (
          <Box sx={{ display: 'flex', gap: 2, mt: 3, overflowX: 'auto' }}>
            {recipe.images.slice(1).map((image, index) => (
              <CardMedia
                key={index}
                sx={{ 
                  width: 200, 
                  height: 150, 
                  borderRadius: 2,
                  flexShrink: 0
                }}
                image={image}
                title={`Image ${index + 2} de la recette`}
              />
            ))}
          </Box>
        )}
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
        <Button 
          variant="contained" 
          size="medium" 
          href="/recipeapi"
          sx={{ 
            borderRadius: 2,
            textTransform: 'none'
          }}
        >
          Retour liste des recettes
        </Button>
      </CardActions>
    </Card>
  );
}