interface InputFieldProps {
  label: string
  value: string
  onChange: (val: string) => void
}

export default function InputField({ label, value, onChange }: InputFieldProps) {
  return (
    <div className="text-center">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-2/5 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  )
}
