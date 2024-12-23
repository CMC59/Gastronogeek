import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import styles from '@/app/page.module.css'; // Import your styles

const Filter = ({ filterType, setFilterType, filterDifficulty, setFilterDifficulty }) => {
  const handleReset = () => {
    setFilterType('');
    setFilterDifficulty('');
  };

  return (
    <div>
      {/* Filter by Type */}
      <div className={styles.filterBar}>
        <FormControl fullWidth variant="outlined" style={{ marginBottom: '20px' }}>
          <InputLabel id="filter-type-label">Filtrer par type</InputLabel>
          <Select
            labelId="filter-type-label"
            label="Filtrer par type"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <MenuItem value="">Tous les types</MenuItem>
            <MenuItem value="Entrée">Entrée</MenuItem>
            <MenuItem value="Plat">Plat</MenuItem>
            <MenuItem value="Dessert">Dessert</MenuItem>
          </Select>
        </FormControl>

        {/* Filter by Difficulty */}
        <FormControl fullWidth variant="outlined" style={{ marginBottom: '20px' }}>
          <InputLabel id="filter-difficulty-label">Filtrer par difficulté</InputLabel>
          <Select
            labelId="filter-difficulty-label"
            label="Filtrer par difficulté"
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
          >
            <MenuItem value="">Toutes les difficultés</MenuItem>
            <MenuItem value={1}>Facile</MenuItem>
            <MenuItem value={2}>Moyenne</MenuItem>
            <MenuItem value={3}>Difficile</MenuItem>
          </Select>
        </FormControl>
        <div>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleReset}
          style={{ marginTop: '10px', width: '130px', marginLeft: "10px" }}
        >
          Réinitialiser
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
