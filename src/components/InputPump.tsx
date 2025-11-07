import InputField from './InputField'

interface InputPumpProps {
  value: string
  onChange: (val: string) => void
}

export default function InputPump({ value, onChange }: InputPumpProps) {
  return (
    <div className='space-y-2'>
      <InputField
        label="Eficiência da bomba (%)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Eficiência do motor da bomba (%)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Fator de potência da bomba (0 a 1)"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
