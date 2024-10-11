// src/app/recipes/[slug]/page.js
import React from 'react';
import { notFound } from 'next/navigation';

// Fetching a single recipe by slug
async function getRecipe(slug) {
  let res = await fetch(`https://api-gastronogeek.vercel.app/api/recipes/${slug}`);
  
  if (!res.ok) {
    return undefined;
  }
  
  let recipe = await res.json();
  
  if (!recipe) {
    notFound();  // Automatically handle 404 if the recipe isn't found
  }
  
  return recipe;
}

// Generating static params for dynamic pages
export async function generateStaticParams() {
  let res = await fetch('https://api-gastronogeek.vercel.app/api/recipes/');
  
  if (!res.ok) {
    throw new Error("Failed to fetch recipes"); // Handle fetch error
  }

  let recipes = await res.json();

  // Return the list of slugs for static generation
  return recipes.map((recipe) => ({
    slug: recipe.slug, // Ensure slug is used for dynamic routing
  }));
}

// Generating metadata for SEO purposes
export async function generateMetadata({ params }) {
  let recipe = await getRecipe(params.slug);

  return {
    title: recipe ? recipe.title : 'Recipe Not Found',
  };
}

// Page component to display a single recipe
export default async function Page({ params }) {
  let recipe = await getRecipe(params.slug);

  if (!recipe) {
    return <h1>Recipe not found</h1>;
  }

  return (
    <article>
      <h1>{recipe.title}</h1>
      <p>{recipe.license}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.quantity ? `${ingredient.quantity} ${ingredient.unit}` : ''} {ingredient.name}
          </li>
        ))}
      </ul>
      <h2>Preparation Steps</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </article>
  );
}
