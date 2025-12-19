const FilterCards = ({ value,setValue}) => {
  return (
    <label htmlFor="category-select">
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);

        }}
        name="category"
        id="category-select"
      >
        <option value=""> Все товары </option>
        <option value="clothes">Одежда</option>
        <option value="books">Книги</option>
        <option value="electronics">Электроника</option>
        <option value="sports">Спорт</option>
      </select>
    </label>
  );
};

export default FilterCards;
