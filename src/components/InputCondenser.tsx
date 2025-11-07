import InputField from './InputField'

interface InputCondenserProps {
  value: string
  onChange: (val: string) => void
}

export default function InputCondenser({ value, onChange }: InputCondenserProps) {
  return (
    <div className='space-y-2'>
      <InputField
        label="Pressão de operação (bar)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Diferença de temperatura da água de resfriamento (°C)"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
