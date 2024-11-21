'use client';

import React, { useState, useEffect } from 'react';
import RecipeCard from '@/components/Card'; // Ensure the path is correct
import styles from '@/app/page.module.css'; // Import your styles
import { CircularProgress } from '@mui/material';
import Search from '@/components/Search'; // Import the Search component

export default function Home() {
  const [randomRecipes, setRandomRecipes] = useState([]); // Random recipes
  const [loading, setLoading] = useState(true); // Loading state for random recipes

  // Fetch 3 random recipes on component mount
  useEffect(() => {
    async function fetchRandomRecipes() {
      try {
        let response = await fetch('https://api-gastronogeek.vercel.app/api/recipes/');
        let data = await response.json();
        const randomSelection = getRandomRecipes(data, 3); // Select 3 random recipes
        setRandomRecipes(randomSelection);
      } catch (error) {
        console.error('Error fetching random recipes:', error);
      } finally {
        setLoading(false); // Disable loading state after fetching
      }
    }
    fetchRandomRecipes();
  }, []);

  const getRandomRecipes = (recipesArray, num) => {
    const shuffled = [...recipesArray].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, num); // Return a slice of the shuffled array
  };

  return (
    <div>
      <Search /> {/* Call the Search component here */}

      <h2>Recettes aléatoires</h2>
      <div className={styles.recipeGrid}>
        {loading ? (
          <CircularProgress />
        ) : (
          randomRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))
        )}
      </div>
    </div>
  );
}
