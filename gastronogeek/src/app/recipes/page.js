// src/app/recipes/page.js
"use client";
import React from 'react';
import Loading from '@/components/CircularProgressWithLabel';
import Recipes from '@/components/Recipes'; // Importez le composant Recipes

const RecipesPage = () => {
  return (
    <div>
      <Recipes /> {/* Utilisez le composant Recipes ici */}
    </div>
  );
};

export default RecipesPage;
