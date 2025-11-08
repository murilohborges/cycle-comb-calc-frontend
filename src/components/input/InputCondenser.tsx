import InputField from './InputField'

interface InputCondenserProps {
  data: Record<string, any>
  onChange: (key: string, value: string) => void
}

export default function InputCondenser({ data, onChange }: InputCondenserProps) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-1">
        Condensador
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end'>
        <InputField
          label="Pressão de operação (bar)"
          name="condenser_operation_pressure"
          value={data.condenser_operation_pressure}
          onChange={(e) => onChange('condenser_operation_pressure', e.target.value)}
        />
        <InputField
          label="Diferença de temperatura da água de resfriamento (°C)"
          name="range_temperature_cooling_tower"
          value={data.range_temperature_cooling_tower}
          onChange={(e) => onChange('range_temperature_cooling_tower', e.target.value)}
        />
      </div>
    </div>
  )
}
