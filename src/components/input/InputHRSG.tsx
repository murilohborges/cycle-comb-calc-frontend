import InputField from './InputField'

interface InputHRSGProps {
  data: Record<string, number>
  onChange: (key: string, value: number) => void
}

export default function InputHRSG({ data, onChange }: InputHRSGProps) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-1">
        Heat Recovery Steam Generator (HRSG)
      </h3>

      <InputField
        label="Purge level (%)"
        name='purge_level'
        value={data.purge_level}
        onChange={(e) => onChange('purge_level', Number(e.target.value))}
      />

      <h4 className="text-base text-gray-600 underline mb-1 mt-4">High steam level conditions</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end mb-6'>
        <InputField
          label="Pressure (bar)"
          name='high_steam_level_pressure'
          value={data.high_steam_level_pressure}
          onChange={(e) => onChange('high_steam_level_pressure', Number(e.target.value))}
        />
        <InputField
          label="Temperature (°C)"
          name='high_steam_level_temperature'
          value={data.high_steam_level_temperature}
          onChange={(e) => onChange('high_steam_level_temperature', Number(e.target.value))}
        />
        <InputField
          label="Steam fraction (%)"
          name='high_steam_level_fraction'
          value={data.high_steam_level_fraction}
          onChange={(e) => onChange('high_steam_level_fraction', Number(e.target.value))}
        />
      </div>

      <h4 className='text-base text-gray-600 underline mb-1'>Medium steam level conditions</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end mb-6'>
        <InputField
          label="Pressure (bar)"
          name='medium_steam_level_pressure'
          value={data.medium_steam_level_pressure}
          onChange={(e) => onChange('medium_steam_level_pressure', Number(e.target.value))}
        />
        <InputField
          label="Temperature (°C)"
          name='medium_steam_level_temperature'
          value={data.medium_steam_level_temperature}
          onChange={(e) => onChange('medium_steam_level_temperature', Number(e.target.value))}
        />
        <InputField
          label="Steam fraction (%)"
          name='medium_steam_level_fraction'
          value={data.medium_steam_level_fraction}
          onChange={(e) => onChange('medium_steam_level_fraction', Number(e.target.value))}
        />
      </div>

      <h4 className='text-base text-gray-600 underline mb-1'>Low steam level conditions</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-end'>
        <InputField
          label="Pressure (bar)"
          name='low_steam_level_pressure'
          value={data.low_steam_level_pressure}
          onChange={(e) => onChange('low_steam_level_pressure', Number(e.target.value))}
        />
        <InputField
          label="Temperature (°C)"
          name='low_steam_level_temperature'
          value={data.low_steam_level_temperature}
          onChange={(e) => onChange('low_steam_level_temperature', Number(e.target.value))}
        />
      </div>
      
    </div>
  )
}
