import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import CircularProgress from '@mui/material/CircularProgress'; // Import de la barre de progression circulaire
import Box from '@mui/material/Box'; // Import de Box pour centrer la barre de progression

// Un composant pour afficher les détails des lignes extensibles
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

// Composant de filtrage
const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <div>
    <input
      id="search"
      type="text"
      placeholder="Search"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <button onClick={onClear}>X</button>
  </div>
);

const Recipes = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [veganFilter, setVeganFilter] = useState('all'); // 'all', 'yes', 'no'
  const [yearFilter, setYearFilter] = useState('all'); // 'all' or specific year
  const [filterText, setFilterText] = useState(''); // State pour le texte de filtrage
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  useEffect(() => {
    const loadRecipes = async () => {
      // Simule un chargement de données
      await new Promise(resolve => setTimeout(resolve, 1000));
      const fakeRecipes = [
        { id: 1, title: 'Vegan Salad', year: '2020', description: 'A healthy salad', isVegan: true },
        { id: 2, title: 'Chicken Curry', year: '2018', description: 'Spicy chicken curry', isVegan: false },
        { id: 3, title: 'Tofu Stir Fry', year: '2021', description: 'Delicious tofu with vegetables', isVegan: true },
        { id: 4, title: 'Beef Stew', year: '2019', description: 'Hearty beef stew', isVegan: false },
        { id: 5, title: 'Fruit Smoothie', year: '2022', description: 'A refreshing fruit smoothie', isVegan: true },
        { id: 6, title: 'Vegan Pasta', year: '2020', description: 'Pasta with a vegan sauce', isVegan: true },
        { id: 7, title: 'Pork Chops', year: '2017', description: 'Grilled pork chops with spices', isVegan: false },
        { id: 8, title: 'Quinoa Bowl', year: '2021', description: 'Nutritious quinoa with vegetables', isVegan: true },
        { id: 9, title: 'Chicken Salad', year: '2019', description: 'Fresh chicken salad with dressing', isVegan: false },
        { id: 10, title: 'Veggie Burger', year: '2020', description: 'Delicious plant-based burger', isVegan: true },
        { id: 11, title: 'Shrimp Tacos', year: '2018', description: 'Spicy shrimp tacos', isVegan: false },
        { id: 12, title: 'Chickpea Curry', year: '2022', description: 'Spicy chickpea curry', isVegan: true },
        { id: 13, title: 'Steak Frites', year: '2017', description: 'Classic steak with fries', isVegan: false },
        { id: 14, title: 'Lentil Soup', year: '2019', description: 'Hearty lentil soup', isVegan: true },
        { id: 15, title: 'Pasta Carbonara', year: '2018', description: 'Creamy carbonara pasta', isVegan: false },
        { id: 16, title: 'Veggie Stir Fry', year: '2021', description: 'Stir-fried vegetables with tofu', isVegan: true },
        { id: 17, title: 'BBQ Ribs', year: '2016', description: 'Tender BBQ ribs', isVegan: false },
        { id: 18, title: 'Mushroom Risotto', year: '2020', description: 'Creamy mushroom risotto', isVegan: true },
        { id: 19, title: 'Fish Tacos', year: '2018', description: 'Tacos filled with fish', isVegan: false },
        { id: 20, title: 'Spinach Salad', year: '2021', description: 'Fresh spinach salad', isVegan: true },
        { id: 21, title: 'Chicken Stir Fry', year: '2017', description: 'Stir-fried chicken with vegetables', isVegan: false },
        { id: 22, title: 'Vegan Pizza', year: '2022', description: 'Pizza topped with vegan ingredients', isVegan: true },
        { id: 23, title: 'Meatball Sub', year: '2019', description: 'Sub sandwich with meatballs', isVegan: false },
        { id: 24, title: 'Cauliflower Tacos', year: '2020', description: 'Tacos filled with cauliflower', isVegan: true },
        { id: 25, title: 'Chicken Alfredo', year: '2018', description: 'Creamy chicken Alfredo pasta', isVegan: false },
        { id: 26, title: 'Zucchini Noodles', year: '2021', description: 'Healthy zucchini noodles', isVegan: true },
        { id: 27, title: 'Bacon Cheeseburger', year: '2017', description: 'Juicy cheeseburger with bacon', isVegan: false },
        { id: 28, title: 'Sweet Potato Fries', year: '2019', description: 'Crispy sweet potato fries', isVegan: true },
        { id: 29, title: 'Pork Ramen', year: '2022', description: 'Delicious pork ramen', isVegan: false },
        { id: 30, title: 'Vegetable Curry', year: '2020', description: 'Spicy vegetable curry', isVegan: true },
        { id: 31, title: 'BBQ Chicken', year: '2018', description: 'Grilled BBQ chicken', isVegan: false },
        { id: 32, title: 'Greek Salad', year: '2021', description: 'Fresh Greek salad', isVegan: true },
        { id: 33, title: 'Pulled Pork Sandwich', year: '2019', description: 'Sandwich with pulled pork', isVegan: false },
        { id: 34, title: 'Minestrone Soup', year: '2020', description: 'Vegetable minestrone soup', isVegan: true },
        { id: 35, title: 'Chicken Fajitas', year: '2018', description: 'Spicy chicken fajitas', isVegan: false },
        { id: 36, title: 'Vegan Chili', year: '2022', description: 'Spicy vegan chili', isVegan: true },
        { id: 37, title: 'Steak Tacos', year: '2019', description: 'Tacos filled with steak', isVegan: false },
        { id: 38, title: 'Cabbage Rolls', year: '2020', description: 'Stuffed cabbage rolls', isVegan: true },
        { id: 39, title: 'Stuffed Peppers', year: '2018', description: 'Peppers stuffed with meat', isVegan: false },
        { id: 40, title: 'Vegetable Stir Fry', year: '2021', description: 'Mixed vegetable stir fry', isVegan: true },
        { id: 41, title: 'Pasta Primavera', year: '2017', description: 'Pasta with fresh vegetables', isVegan: false },
        { id: 42, title: 'Falafel Wrap', year: '2022', description: 'Wrap filled with falafel', isVegan: true },
        { id: 43, title: 'Grilled Salmon', year: '2019', description: 'Grilled salmon fillet', isVegan: false },
        { id: 44, title: 'Quinoa Salad', year: '2020', description: 'Quinoa mixed with vegetables', isVegan: true },
        { id: 45, title: 'Chicken Quesadilla', year: '2018', description: 'Cheesy chicken quesadilla', isVegan: false },
        { id: 46, title: 'Vegetable Samosas', year: '2021', description: 'Crispy vegetable samosas', isVegan: true },
        { id: 47, title: 'Beef Tacos', year: '2017', description: 'Tacos filled with beef', isVegan: false },
        { id: 48, title: 'Pumpkin Soup', year: '2022', description: 'Creamy pumpkin soup', isVegan: true },
        { id: 49, title: 'Seafood Paella', year: '2019', description: 'Delicious seafood paella', isVegan: false },
        { id: 50, title: 'Vegan Chocolate Cake', year: '2020', description: 'Rich vegan chocolate cake', isVegan: true },
      ];
      setRecipes(fakeRecipes);
      setLoading(false);
    };

    loadRecipes();
  }, []);

  // Filtrage des recettes en fonction des filtres actifs
  const filteredRecipes = recipes.filter(recipe => {
    const veganMatch =
      veganFilter === 'all' ||
      (veganFilter === 'yes' && recipe.isVegan) ||
      (veganFilter === 'no' && !recipe.isVegan);

    const yearMatch = yearFilter === 'all' || recipe.year === yearFilter;

    const textMatch = recipe.title && recipe.title.toLowerCase().includes(filterText.toLowerCase());

    return veganMatch && yearMatch && textMatch;
  });

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
    },
    {
      name: 'Vegan',
      selector: row => (row.isVegan ? 'Yes' : 'No'),
      sortable: true,
    },
  ];

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };
    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div>
      <h1>Recipes</h1>

      {/* Filtres */}
      <div>
        <label>
          Vegan:
          <select value={veganFilter} onChange={e => setVeganFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <label>
          Year:
          <select value={yearFilter} onChange={e => setYearFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            {/* Ajoutez d'autres années si nécessaire */}
          </select>
        </label>
      </div>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="200px">
          <CircularProgress /> {/* Affichage de la barre de progression circulaire */}
        </Box>
      ) : (
        <DataTable
          title="Recipe List"
          columns={columns}
          data={filteredRecipes} // Utiliser les recettes filtrées
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          selectableRows
          persistTableHead
        />
      )}
    </div>
  );
};

export default Recipes;