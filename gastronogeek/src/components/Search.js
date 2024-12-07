'use client'

import React, { useState, useRef, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import RecipeCard from '@/components/Card';
import styles from '@/app/page.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [visibleRecipes, setVisibleRecipes] = useState(3);
  const searchBarRef = useRef(null);

  // Animation GSAP de la barre de recherche
  useGSAP(() => {
    const menu = searchBarRef.current;
    gsap.fromTo(
      menu,
      { y: 50, opacity: 0 },
      { 
        duration: 2, 
        ease: "textReveal", 
        y: 0, 
        opacity: 1 
      }
    );
  }, []);

  // Fonction de recherche des recettes
  const fetchRecipes = async () => {
    if (searchTerm.trim() === '') {
      setFilteredRecipes([]);
      setVisibleRecipes(3);
      return;
    }

    try {
      const response = await fetch('https://api-gastronogeek.vercel.app/api/recipes/');
      const data = await response.json();

      const filtered = data.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.commonTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredRecipes(filtered);
      setVisibleRecipes(3);
    } catch (error) {
      console.error('Erreur de recherche des recettes:', error);
    }
  };

  // Effet de recherche dynamique
  useEffect(() => {
    fetchRecipes();
  }, [searchTerm]);

  // Réinitialisation de la recherche
  const resetSearch = () => {
    setSearchTerm('');
    setFilteredRecipes([]);
    setVisibleRecipes(3);
  };

  // Afficher plus de résultats
  const showMoreResults = () => {
    setVisibleRecipes(prev => prev + 3);
  };

  // Rendu des résultats de recherche
  const renderSearchResults = () => {
    if (searchTerm === '') return null;

    if (filteredRecipes.length === 0) {
      return <p className={styles.searchMessage}>Aucune recette trouvée</p>;
    }

    return (
      <div className={styles.searchResults}>
        <h2>Résultats de la recherche</h2>
        <div className={styles.recipeList}>
          {filteredRecipes.slice(0, visibleRecipes).map(recipe => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
        {filteredRecipes.length > visibleRecipes && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '1rem' 
          }}>
            <Button 
              variant="contained" 
              onClick={showMoreResults}
            >
              Voir plus de résultats
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.searchComponent}>
      <div className={styles.searchBar} ref={searchBarRef}>
        <TextField
          label="Rechercher une recette"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <Button
          variant="outlined"
          size="small"
          onClick={resetSearch}
          className={styles.resetButton}
        >
          Réinitialiser
        </Button>

      </div>

      {renderSearchResults()}
    </div>
  );
};

export default Search;