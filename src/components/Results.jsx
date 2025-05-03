export default function Result({ result }) {
    const totalWeight = result.reduce((sum, i) => sum + i.weight, 0);
    const totalCalories = result.reduce((sum, i) => sum + i.calories, 0);
  
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">Resultado:</h2>
        <ul className="list-disc list-inside">
          {result.map((item) => (
            <li key={item.id}>{item.id} - Peso: {item.weight}, Calorías: {item.calories}</li>
          ))}
        </ul>
  
        <div className="mt-4">
          <p><strong>Peso total:</strong> {totalWeight}</p>
          <p><strong>Calorías totales:</strong> {totalCalories}</p>
        </div>
      </div>
    );
  }
  
  