'use client';
// src/app/recipes/page.js
import React, { useState, useEffect } from 'react';
import RecipeCard from '@/components/Card'; // Assurez-vous que le chemin est correct
import styles from '@/app/page.module.css'; // Importez vos styles
import { CircularProgress } from '@mui/material';

export default function Page() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // État de chargement

  // Récupérer les recettes au chargement de la page
  useEffect(() => {
    async function fetchRecipes() {
      try {
        let response = await fetch('https://api-gastronogeek.vercel.app/api/recipes/');
        let data = await response.json();
        setRecipes(data); // Mettre à jour l'état avec les données des recettes
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false); // Désactiver l'état de chargement après la récupération
      }
    }

    fetchRecipes();
  }, []); // Se déclenche une seule fois au montage du composant

  // Affichage
  return (
    <div className={styles.recipeGrid}>
      {loading ? (
        <CircularProgress /> // Afficher la barre de chargement pendant la récupération des données
      ) : (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} /> // Afficher les recettes une fois qu'elles sont chargées
        ))
      )}
    </div>
  );
}
