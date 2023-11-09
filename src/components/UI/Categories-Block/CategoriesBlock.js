const categories = [
  "Owerwatch 2",
  "Diablo 4",
  "World of Warcraft",
  "Hearthstone",
  "StarCraft 2",
];

function CategoriesBlock() {
  return (
    <div className="item-card-type">
      <div className="mb-4 text-sm font-semibold">Categories</div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className="button-card-type rounded-lg px-2 py-1 text-base"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoriesBlock;
