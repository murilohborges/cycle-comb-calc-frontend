import InputField from './InputField'

interface InputHRSGProps {
  data: Record<string, any>
  onChange: (key: string, value: string) => void
}

export default function InputHRSG({ data, onChange }: InputHRSGProps) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-1">
        Caldeira de Recuperação de Calor (HRSG)
      </h3>

      <InputField
        label="Porcentagem da purga (%)"
        name='purge_level'
        value={data.purge_level}
        onChange={(e) => onChange('purge_level', e.target.value)}
      />

      <h4 className="text-base text-gray-600 underline mb-1 mt-4">Condições do nível alto de vapor</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end mb-6'>
        <InputField
          label="Pressão (bar)"
          name='high_steam_level_pressure'
          value={data.high_steam_level_pressure}
          onChange={(e) => onChange('high_steam_level_pressure', e.target.value)}
        />
        <InputField
          label="Temperatura (°C)"
          name='high_steam_level_temperature'
          value={data.high_steam_level_temperature}
          onChange={(e) => onChange('high_steam_level_temperature', e.target.value)}
        />
        <InputField
          label="Fração do vapor (%)"
          name='high_steam_level_fraction'
          value={data.high_steam_level_fraction}
          onChange={(e) => onChange('high_steam_level_fraction', e.target.value)}
        />
      </div>
      
      <h4 className='text-base text-gray-600 underline mb-1'>Condições do nível médio de vapor</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end mb-6'>
        <InputField
          label="Pressão (bar)"
          name='medium_steam_level_pressure'
          value={data.medium_steam_level_pressure}
          onChange={(e) => onChange('medium_steam_level_pressure', e.target.value)}
        />
        <InputField
          label="Temperatura (°C)"
          name='medium_steam_level_temperature'
          value={data.medium_steam_level_temperature}
          onChange={(e) => onChange('medium_steam_level_temperature', e.target.value)}
        />
        <InputField
          label="Fração do vapor (%)"
          name='medium_steam_level_fraction'
          value={data.medium_steam_level_fraction}
          onChange={(e) => onChange('medium_steam_level_fraction', e.target.value)}
        />
      </div>

      <h4 className='text-base text-gray-600 underline mb-1'>Condições do nível baixo de vapor</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end'>
        <InputField
          label="Pressão (bar)"
          name='low_steam_level_pressure'
          value={data.low_steam_level_pressure}
          onChange={(e) => onChange('low_steam_level_pressure', e.target.value)}
        />
        <InputField
          label="Temperatura (°C)"
          name='low_steam_level_temperature'
          value={data.low_steam_level_temperature}
          onChange={(e) => onChange('low_steam_level_temperature', e.target.value)}
        />
      </div>
      
    </div>
  )
}
