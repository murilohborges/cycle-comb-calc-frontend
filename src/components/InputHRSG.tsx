import InputField from './InputField'

interface InputHRSGProps {
  value: string
  onChange: (val: string) => void
}

export default function InputHRSG({ value, onChange }: InputHRSGProps) {
  return (
    <div className='space-y-2'>
      <div className='space-y-1 border rounded-2xl p-3'>
        <label className='block text-lg font-medium text-gray-700'>Condições do nível alto de vapor</label>
        <InputField
          label="Pressão do nível alto de vapor (bar)"
          value={value}
          onChange={onChange}
        />
        <InputField
          label="Temp. do nível alto de vapor (°C)"
          value={value}
          onChange={onChange}
        />
        <InputField
          label="Fração do nível alto de vapor (%)"
          value={value}
          onChange={onChange}
        />
      </div>
      
      <div className='space-y-1 border rounded-2xl p-3'>
        <label className='block text-lg font-medium text-gray-700'>Condições do nível médio de vapor</label>
        <InputField
          label="Pressão do nível médio de vapor (bar)"
          value={value}
          onChange={onChange}
        />
        <InputField
          label="Temp. do nível médio de vapor (°C)"
          value={value}
          onChange={onChange}
        />
        <InputField
          label="Fração do nível médio de vapor (%)"
          value={value}
          onChange={onChange}
        />
      </div>

      <div className='space-y-1 border rounded-2xl p-3'>
        <label className='block text-lg font-medium text-gray-700'>Condições do nível baixo de vapor</label>
        <InputField
          label="Pressão do nível baixo de vapor (bar)"
          value={value}
          onChange={onChange}
        />
        <InputField
          label="Temp. do nível baixo de vapor (°C)"
          value={value}
          onChange={onChange}
        />
      </div>
      
      
      <InputField
        label="Porcentagem da purga (%)"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
