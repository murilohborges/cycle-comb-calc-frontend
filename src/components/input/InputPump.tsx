import InputField from './InputField'

interface InputPumpProps {
  data: Record<string, number>
  onChange: (key: string, value: number) => void
  errors?: Record<string, string>
  focusField?: string | null
}

export default function InputPump({ data, onChange, errors, focusField }: InputPumpProps) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-1">
        Inlet Pump
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end'>
        <InputField
          label="Pump efficiency (%)"
          name='pump_efficiency'
          value={data.pump_efficiency}
          errors={errors?.pump_efficiency}
          shouldFocus={focusField === 'pump_efficiency'}
          onChange={(e) => onChange('pump_efficiency', Number(e.target.value))}
        />
        <InputField
          label="Engine pump efficiency (%)"
          name='engine_pump_efficiency'
          value={data.engine_pump_efficiency}
          errors={errors?.engine_pump_efficiency}
          shouldFocus={focusField === 'engine_pump_efficiency'}
          onChange={(e) => onChange('engine_pump_efficiency', Number(e.target.value))}
        />
        <InputField
          label="Power factor of the pump (0 to 1)"
          name='power_factor_pump_efficiency'
          value={data.power_factor_pump_efficiency}
          errors={errors?.power_factor_pump_efficiency}
          shouldFocus={focusField === 'power_factor_pump_efficiency'}
          onChange={(e) => onChange('power_factor_pump_efficiency', Number(e.target.value))}
        />
      </div>
    </div>
  )
}
