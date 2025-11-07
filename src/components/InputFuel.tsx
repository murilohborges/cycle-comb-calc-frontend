import InputField from '../components/InputField'

interface InputSectionProps {
  value: string
  onChange: (val: string) => void
}

export default function InputSection({ value, onChange }: InputSectionProps) {
  return (
    <div>
      <InputField
        label="Metano"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
