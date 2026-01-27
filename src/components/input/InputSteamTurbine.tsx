import InputField from './InputField'

interface InputSteamTurbineProps {
  data: Record<string, number>
  onChange: (key: string, value: number) => void
  errors?: Record<string, string>
  focusField?: string | null
}

export default function InputSteamTurbine({ data, onChange, errors, focusField }: InputSteamTurbineProps) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-1">
        Steam Turbine
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end'>
        <InputField
          label="High steam level efficiency (%)"
          name='high_steam_level_efficiency'
          value={data.high_steam_level_efficiency}
          errors={errors?.high_steam_level_efficiency}
          shouldFocus={focusField === 'high_steam_level_efficiency'}
          onChange={(e) => onChange('high_steam_level_efficiency', Number(e.target.value))}
        />
        <InputField
          label="Medium steam level efficiency (%)"
          name='medium_steam_level_efficiency'
          value={data.medium_steam_level_efficiency}
          errors={errors?.medium_steam_level_efficiency}
          shouldFocus={focusField === 'medium_steam_level_efficiency'}
          onChange={(e) => onChange('medium_steam_level_efficiency', Number(e.target.value))}
        />
        <InputField
          label="Low steam level efficiency (%)"
          name='low_steam_level_efficiency'
          value={data.low_steam_level_efficiency}
          errors={errors?.low_steam_level_efficiency}
          shouldFocus={focusField === 'low_steam_level_efficiency'}
          onChange={(e) => onChange('low_steam_level_efficiency', Number(e.target.value))}
        />
        <InputField
          label="Reductor/generator set efficiency (%)"
          name='reductor_generator_set_efficiency'
          value={data.reductor_generator_set_efficiency}
          errors={errors?.reductor_generator_set_efficiency}
          shouldFocus={focusField === 'reductor_generator_set_efficiency'}
          onChange={(e) => onChange('reductor_generator_set_efficiency', Number(e.target.value))}
        />
      </div>
    </div>
  )
}
