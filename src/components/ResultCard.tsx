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
              {data.LHV_fuel ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Vazão de ar (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.air_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Temperatura dos gases de exaustão (°C)</span>
            <span className="font-medium text-gray-800">
              {data.exhaustion_gas_temperature ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Vazão de gases de exaustão (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.exhaustion_gas_mass_flow ?? "--"}
            </span>
          </li>
        </ul>
      </div>

      {/* Seção: Condensador */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Condensador
        </h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li className="flex justify-between">
            <span>Carga térmica (kW)</span>
            <span className="font-medium text-gray-800">
              {data.thermal_charge ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Vazão de água saturada (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.saturated_water_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Vazão de água de reposição (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.make_up_water_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Vazão de água de resfriamento (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.cooling_water_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Título do vapor de saída da turbina (0 a 1)</span>
            <span className="font-medium text-gray-800">
              {data.quality_exhaustion_steam_turbine ?? "--"}
            </span>
          </li>
        </ul>
      </div>

      {/* Seção: Caldeira de Recuperação de Calor (HRSG) */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Caldeira de Recuperação de Calor (HRSG)
        </h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li className="flex justify-between">
            <span>Vazão de vapor de alta pressão (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.high_steam_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Vazão de vapor de média pressão (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.medium_steam_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Vazão de vapor de alta pressão (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.high_steam_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Variação de pressão da bomba (bar)</span>
            <span className="font-medium text-gray-800">
              {data.pump_variation_pressure ?? "--"}
            </span>
          </li>
        </ul>
      </div>

      {/* Seção: Potências geradas */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Potências geradas
        </h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li className="flex justify-between">
            <span>Potência líquida da turbina a gás (kW)</span>
            <span className="font-medium text-gray-800">
              {data.net_power_gas_turbine ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Potência bruta da turbina a vapor (kW)</span>
            <span className="font-medium text-gray-800">
              {data.gross_power_steam_turbine ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Potência líquida da turbina a vapor (kW)</span>
            <span className="font-medium text-gray-800">
              {data.net_power_steam_turbine ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Potência consumida pela bomba (kW)</span>
            <span className="font-medium text-gray-800">
              {data.power_consumed_pump ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Potência bruta total do ciclo combinado (kW)</span>
            <span className="font-medium text-gray-800">
              {data.gross_power_cycle_combined ?? "--"}
            </span>
          </li>
          <li className="flex justify-between underline font-semibold text-green-500">
            <span>Potência líquida total do ciclo combinado (kW)</span>
            <span className="font-medium">
              {data.net_power_cycle_combined ?? "--"}
            </span>
          </li>
        </ul>
      </div>

      {/* Seção: Eficiências do ciclo combinado */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Eficiências do ciclo combinado
        </h3>
        <ul className="space-y-1 text-sm text-gray-600 font-semibold">
          <li className="flex justify-between">
            <span>Eficiência bruta do ciclo combinado (%)</span>
            <span className="font-medium text-gray-800">
              {data.gross_cycle_combined_efficiency ?? "--"}
            </span>
          </li>
          <li className="flex justify-between underline font-semibold text-green-500">
            <span>Eficiência líquida do ciclo combinado (%)</span>
            <span className="font-medium">
              {data.net_cycle_combined_efficiency ?? "--"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
