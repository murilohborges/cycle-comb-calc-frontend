import InputField from './InputField'

interface InputCondenserProps {
  data: Record<string, number>
  onChange: (key: string, value: number) => void
  errors?: Record<string, string>
  focusField?: string | null
}

export default function InputCondenser({ data, onChange, errors, focusField }: InputCondenserProps) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-1">
        Condenser
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end'>
        <InputField
          label="Operation pressure (bar)"
          name="condenser_operation_pressure"
          value={data.condenser_operation_pressure}
          errors={errors?.condenser_operation_pressure}
          shouldFocus={focusField === 'condenser_operation_pressure'}
          onChange={(e) => onChange('condenser_operation_pressure', Number(e.target.value))}
        />
        <InputField
          label="Range temperature cooling tower (°C)"
          name="range_temperature_cooling_tower"
          value={data.range_temperature_cooling_tower}
          errors={errors?.range_temperature_cooling_tower}
          shouldFocus={focusField === 'range_temperature_cooling_tower'}
          onChange={(e) => onChange('range_temperature_cooling_tower', Number(e.target.value))}
        />
      </div>
    </div>
  )
}
