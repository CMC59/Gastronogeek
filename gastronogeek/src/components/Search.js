import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';
import RecipeCard from '@/components/Card'; // Assurez-vous que le chemin est correct
import styles from '@/app/page.module.css'; // Importez vos styles

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = async () => {
    setSearchLoading(true);
    try {
      let response = await fetch('https://api-gastronogeek.vercel.app/api/recipes/');
      let data = await response.json();

      const filtered = data.filter((recipe) => {
        const matchesSearchTerm =
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.commonTitle.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesSearchTerm;
      });

      setFilteredRecipes(filtered); // Update the filtered recipes
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setSearchLoading(false); // Disable loading state
    }
  };

  const resetSearch = () => {
    setSearchTerm(''); // Reset search term
    setFilteredRecipes([]); // Optionally reset filtered recipes
  };

  return (
    <div>
      <div className={styles.searchBar}>
        <TextField
          label="Rechercher une recette"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ marginRight: '10px' }}
        >
          Rechercher
        </Button>
        <Button
          variant="outlined"
          onClick={resetSearch}
        >
          Réinitialiser
        </Button>
        </div>
      </div>


      {searchLoading ? (
        <CircularProgress />
      ) : filteredRecipes.length > 0 ? (
        <div>
          <h2>Résultats de la recherche</h2>
          <div className={styles.recipeGrid}>
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </div>
      ) : (
        searchTerm && <p>Aucune recette trouvée</p>
      )}
    </div>
  );
};

export default Search;
