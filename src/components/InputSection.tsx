interface InputSectionProps {
  label: string
  children: React.ReactNode
}

export default function InputSection({ label, children }: InputSectionProps) {
  return (
    <div>
      <label className="block text-2xl font-medium text-gray-700 mb-1">{label}</label>
      {children}
    </div>
  )
}
