interface ResultCardProps {
  data: Record<string, any>
}

export default function ResultCard({ data }: ResultCardProps) {
  return (
    <div className="mt-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        Results
      </h2>

      {/* Brayton Cycle */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Brayton Cycle (Gas Turbine)
        </h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li className="flex justify-between">
            <span>Calculated LHV (kJ/kg)</span>
            <span className="font-medium text-gray-800">
              {data.LHV_fuel ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Air mass flow (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.air_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Exhaust gas temperature (°C)</span>
            <span className="font-medium text-gray-800">
              {data.exhaustion_gas_temperature ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Exhaust gas mass flow (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.exhaustion_gas_mass_flow ?? "--"}
            </span>
          </li>
        </ul>
      </div>

      {/* Condenser */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Condenser
        </h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li className="flex justify-between">
            <span>Thermal charge (kW)</span>
            <span className="font-medium text-gray-800">
              {data.thermal_charge ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Saturated water mass flow (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.saturated_water_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Make-up water mass flow (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.make_up_water_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Cooling water mass flow (ton/h)</span>
            <span className="font-medium text-gray-800">
              {data.cooling_water_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Quality of exhaust steam from turbine (0 to 1)</span>
            <span className="font-medium text-gray-800">
              {data.quality_exhaustion_steam_turbine ?? "--"}
            </span>
          </li>
        </ul>
      </div>

      {/* Heat Recovery Steam Generator (HRSG) */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Heat Recovery Steam Generator (HRSG)
        </h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li className="flex justify-between">
            <span>High pressure steam mass flow (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.high_steam_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Medium pressure steam mass flow (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.medium_steam_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Low pressure steam mass flow (kg/h)</span>
            <span className="font-medium text-gray-800">
              {data.low_steam_mass_flow ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Pump pressure variation (bar)</span>
            <span className="font-medium text-gray-800">
              {data.pump_variation_pressure ?? "--"}
            </span>
          </li>
        </ul>
      </div>

      {/* Generated Powers */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Generated Powers
        </h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li className="flex justify-between">
            <span>Net power of gas turbine (kW)</span>
            <span className="font-medium text-gray-800">
              {data.net_power_gas_turbine ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Gross power of steam turbine (kW)</span>
            <span className="font-medium text-gray-800">
              {data.gross_power_steam_turbine ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Net power of steam turbine (kW)</span>
            <span className="font-medium text-gray-800">
              {data.net_power_steam_turbine ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Power consumed by pump (kW)</span>
            <span className="font-medium text-gray-800">
              {data.power_consumed_pump ?? "--"}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Gross power of combined cycle (kW)</span>
            <span className="font-medium text-gray-800">
              {data.gross_power_cycle_combined ?? "--"}
            </span>
          </li>
          <li className="flex justify-between underline font-semibold text-green-500">
            <span>Net power of combined cycle (kW)</span>
            <span className="font-medium">
              {data.net_power_cycle_combined ?? "--"}
            </span>
          </li>
        </ul>
      </div>

      {/* Combined Cycle Efficiencies */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b border-gray-200 pb-1">
          Combined Cycle Efficiencies
        </h3>
        <ul className="space-y-1 text-sm text-gray-600 font-semibold">
          <li className="flex justify-between">
            <span>Gross efficiency of combined cycle (%)</span>
            <span className="font-medium text-gray-800">
              {data.gross_cycle_combined_efficiency ?? "--"}
            </span>
          </li>
          <li className="flex justify-between underline font-semibold text-green-500">
            <span>Net efficiency of combined cycle (%)</span>
            <span className="font-medium">
              {data.net_cycle_combined_efficiency ?? "--"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
