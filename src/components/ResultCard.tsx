interface ResultCardProps {
  data: Record<string, any>
}

export default function ResultCard({ data }: ResultCardProps) {
  return (
    <div className="mt-4 p-4 border rounded-lg bg-gray-50">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">Resultados</h2>
      <ul className="space-y-1">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="flex justify-between text-gray-600">
            <span>{key}</span>
            <span className="font-medium">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
