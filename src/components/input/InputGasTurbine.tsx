import InputField from './InputField'

interface InputGasTurbineProps {
  data: Record<string, any>
  onChange: (key: string, value: string) => void
}

export default function InputGasTurbine({ data, onChange }: InputGasTurbineProps) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-1">
        Turbina a gás
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end'>
        <InputField
          label="Vazão de combustível (kg/h)"
          name='fuel_mass_flow'
          value={data.fuel_mass_flow}
          onChange={(e) => onChange('fuel_mass_flow', e.target.value)}
        />
        <InputField
          label="Temp. de entrada do combustível (°C)"
          name='fuel_input_temperature'
          value={data.fuel_input_temperature}
          onChange={(e) => onChange('fuel_input_temperature', e.target.value)}
        />
        <InputField
          label="Temp. de entrada do ar (°C)"
          name='air_input_temperature'
          value={data.air_input_temperature}
          onChange={(e) => onChange('air_input_temperature', e.target.value)}
        />
        <InputField
          label="Porcentagem de excesso de ar (%)"
          name='percent_excess_air'
          value={data.percent_excess_air}
          onChange={(e) => onChange('percent_excess_air', e.target.value)}
        />
        <InputField
          label="Pressão atmosférica local (atm)"
          name='local_atmospheric_pressure'
          value={data.local_atmospheric_pressure}
          onChange={(e) => onChange('local_atmospheric_pressure', e.target.value)}
        />
        <InputField
          label="Temperatura local (°C)"
          name='local_temperature'
          value={data.local_temperature}
          onChange={(e) => onChange('local_temperature', e.target.value)}
        />
        <InputField
          label="Umidade relativa (%)"
          name='relative_humidity'
          value={data.relative_humidity}
          onChange={(e) => onChange('relative_humidity', e.target.value)}
        />
        <InputField
          label="Eficiência da turbina a gás (%)"
          name='gas_turbine_efficiency'
          value={data.gas_turbine_efficiency}
          onChange={(e) => onChange('gas_turbine_efficiency', e.target.value)}
        />
        <InputField
          label="Temperatura de chaminé (°C)"
          name='chimney_gas_temperature'
          value={data.chimney_gas_temperature}
          onChange={(e) => onChange('chimney_gas_temperature', e.target.value)}
        />
      </div>
    </div>
  )
}
