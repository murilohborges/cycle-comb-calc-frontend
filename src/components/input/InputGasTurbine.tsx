import InputField from './InputField'

interface InputGasTurbineProps {
  data: Record<string, number>
  onChange: (key: string, value: number) => void
  errors?: Record<string, string>
  focusField?: string | null
}

export default function InputGasTurbine({ data, onChange, errors, focusField }: InputGasTurbineProps) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-1">
        Gas Turbine
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end'>
        <InputField
          label="Fuel mass flow (kg/h)"
          name='fuel_mass_flow'
          value={data.fuel_mass_flow}
          errors={errors?.fuel_mass_flow}
          shouldFocus={focusField === 'fuel_mass_flow'}
          onChange={(e) => onChange('fuel_mass_flow', Number(e.target.value))}
        />
        <InputField
          label="Fuel input temperature (°C)"
          name='fuel_input_temperature'
          value={data.fuel_input_temperature}
          errors={errors?.fuel_input_temperature}
          shouldFocus={focusField === 'fuel_input_temperature'}
          onChange={(e) => onChange('fuel_input_temperature', Number(e.target.value))}
        />
        <InputField
          label="Air input temperature (°C)"
          name='air_input_temperature'
          value={data.air_input_temperature}
          errors={errors?.air_input_temperature}
          shouldFocus={focusField === 'air_input_temperature'}
          onChange={(e) => onChange('air_input_temperature', Number(e.target.value))}
        />
        <InputField
          label="Percent excess air (%)"
          name='percent_excess_air'
          value={data.percent_excess_air}
          errors={errors?.percent_excess_air}
          shouldFocus={focusField === 'percent_excess_air'}
          onChange={(e) => onChange('percent_excess_air', Number(e.target.value))}
        />
        <InputField
          label="Local atmospheric pressure (atm)"
          name='local_atmospheric_pressure'
          value={data.local_atmospheric_pressure}
          errors={errors?.local_atmospheric_pressure}
          shouldFocus={focusField === 'local_atmospheric_pressure'}
          onChange={(e) => onChange('local_atmospheric_pressure', Number(e.target.value))}
        />
        <InputField
          label="Local temperature (°C)"
          name='local_temperature'
          value={data.local_temperature}
          errors={errors?.local_temperature}
          shouldFocus={focusField === 'local_temperature'}
          onChange={(e) => onChange('local_temperature', Number(e.target.value))}
        />
        <InputField
          label="Relative humidity (%)"
          name='relative_humidity'
          value={data.relative_humidity}
          errors={errors?.relative_humidity}
          shouldFocus={focusField === 'relative_humidity'}
          onChange={(e) => onChange('relative_humidity', Number(e.target.value))}
        />
        <InputField
          label="Gas turbine efficiency (%)"
          name='gas_turbine_efficiency'
          value={data.gas_turbine_efficiency}
          errors={errors?.gas_turbine_efficiency}
          shouldFocus={focusField === 'gas_turbine_efficiency'}
          onChange={(e) => onChange('gas_turbine_efficiency', Number(e.target.value))}
        />
        <InputField
          label="Chimney gas temperature (°C)"
          name='chimney_gas_temperature'
          value={data.chimney_gas_temperature}
          errors={errors?.chimney_gas_temperature}
          shouldFocus={focusField === 'chimney_gas_temperature'}
          onChange={(e) => onChange('chimney_gas_temperature', Number(e.target.value))}
        />
      </div>
    </div>
  )
}
