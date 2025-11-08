interface ResultCardProps {
  data: Record<string, any>
}

export default function ResultCard({ data }: ResultCardProps) {
  return (
    <div className="mt-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        Resultados
      </h2>

      {/* Seção: Ciclo Brayton */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Ciclo Brayton (Turbina a Gás)
        </h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li className="flex justify-between">
            <span>PCI calculado (kJ/kg)</span>
            <span className="font-medium text-gray-800">
              {data.brayton_efficiency ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Vazão de ar (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.brayton_work ?? "--"}
            </span>
          </li>
        </ul>
      </div>

      {/* Seção: Ciclo Rankine */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Ciclo Rankine
        </h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li className="flex justify-between">
            <span>Eficiência (%)</span>
            <span className="font-medium text-gray-800">
              {data.rankine_efficiency ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Vazão de vapor (kg/s)</span>
            <span className="font-medium text-gray-800">
              {data.rankine_flow ?? "--"}
            </span>
          </li>
        </ul>
      </div>

      {/* Seção: Resultados combinados */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Ciclo Combinado
        </h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li className="flex justify-between">
            <span>Eficiência combinada (%)</span>
            <span className="font-medium text-gray-800">
              {data.combined_efficiency ?? "--"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
