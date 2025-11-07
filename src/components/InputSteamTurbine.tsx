import InputField from './InputField'

interface InputSteamTurbineProps {
  value: string
  onChange: (val: string) => void
}

export default function InputSteamTurbine({ value, onChange }: InputSteamTurbineProps) {
  return (
    <div className='space-y-2'>
      <InputField
        label="Eficiência do nível alto (%)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Eficiência do nível médio (%)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Eficiência do nível baixo (%)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Eficiência do conjunto redutor/gerador (%)"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
