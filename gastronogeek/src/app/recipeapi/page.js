'use client';
import React, { useState, useEffect } from 'react';
import RecipeCard from '@/components/Card'; // Ensure the path is correct
import styles from '@/app/page.module.css'; // Import your styles
import { CircularProgress } from '@mui/material';
import Filter from '@/components/Filter'; // Import the Filter component

export default function Home() {
  const [recipes, setRecipes] = useState([]); // State for all recipes
  const [filteredRecipes, setFilteredRecipes] = useState([]); // State for filtered recipes
  const [loading, setLoading] = useState(true); // Loading state
  const [filterType, setFilterType] = useState(''); // State for filter by type
  const [filterDifficulty, setFilterDifficulty] = useState(''); // State for filter by difficulty

  // Fetch all recipes on component mount
  useEffect(() => {
    async function fetchRecipes() {
      try {
        let response = await fetch('https://api-gastronogeek.vercel.app/api/recipes/'); // Replace with your API
        let data = await response.json();
        setRecipes(data); // Update state with recipe data
        setFilteredRecipes(data); // Initialize filtered recipes
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false); // Disable loading state after fetching
      }
    }

    fetchRecipes();
  }, []); // Runs only once on component mount

  // Function to handle filtering
  useEffect(() => {
    const filtered = recipes.filter((recipe) => {
      const matchesType = filterType ? recipe.type === filterType : true; // Check for type filter
      const matchesDifficulty = filterDifficulty ? recipe.difficulty === parseInt(filterDifficulty) : true; // Check for difficulty filter
      return matchesType && matchesDifficulty; // Return true if both conditions are met
    });

    setFilteredRecipes(filtered); // Update the filtered recipes
  }, [filterType, filterDifficulty, recipes]); // Run when filters change

  // Display
  return (
    <div>
      <Filter 
        filterType={filterType} 
        setFilterType={setFilterType} 
        filterDifficulty={filterDifficulty} 
        setFilterDifficulty={setFilterDifficulty} 
      />

      <div className={styles.recipeGrid}>
        {loading ? (
          <CircularProgress /> // Show loading indicator while fetching
        ) : (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} /> // Show filtered recipes
          ))
        )}
      </div>
    </div>
  );
}
