import InputField from './InputField'

interface InputPumpProps {
  data: Record<string, any>
  onChange: (key: string, value: string) => void
}

export default function InputPump({ data, onChange }: InputPumpProps) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-1">
        Bomba de alimentação
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end'>
        <InputField
          label="Eficiência da bomba (%)"
          name='pump_efficiency'
          value={data.pump_efficiency}
          onChange={(e) => onChange('pump_efficiency', e.target.value)}
        />
        <InputField
          label="Eficiência do motor da bomba (%)"
          name='engine_pump_efficiency'
          value={data.engine_pump_efficiency}
          onChange={(e) => onChange('engine_pump_efficiency', e.target.value)}
        />
        <InputField
          label="Fator de potência da bomba (0 a 1)"
          name='power_factor_pump_efficiency'
          value={data.power_factor_pump_efficiency}
          onChange={(e) => onChange('power_factor_pump_efficiency', e.target.value)}
        />
      </div>
    </div>
  )
}
