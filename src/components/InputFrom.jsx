export default function InputForm({ minCalories, setMinCalories, maxWeight, setMaxWeight, onCalculate }) {
  return (
    <>
      <div className="mb-4">
        <label className="block">Calorías mínimas:</label>
        <input
          type="number"
          value={minCalories}
          onChange={(e) => setMinCalories(parseInt(e.target.value))}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block">Peso máximo:</label>
        <input
          type="number"
          value={maxWeight}
          onChange={(e) => setMaxWeight(parseInt(e.target.value))}
          className="border px-2 py-1 w-full"
        />
      </div>

      <button
        onClick={onCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
      >
        Calcular
      </button>
    </>
  );
}
