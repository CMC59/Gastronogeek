import React from 'react';
import { notFound } from 'next/navigation';
import RecipeDetailCard from '@/components/CardDetail'; // Assurez-vous que le chemin est correct
import styles from '@/app/page.module.css'; // Importez vos styles

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
    throw new Error("Failed to fetch recipes");
  }

  let recipes = await res.json();

  // Return the list of slugs for static generation
  return recipes.map((recipe) => ({
    slug: recipe.slug,
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
    <div className={styles.pageContainer}>
      {/* Utiliser le composant RecipeDetailCard ici */}
      <RecipeDetailCard recipe={recipe} />
    </div>
  );
}
