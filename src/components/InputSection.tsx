interface InputSectionProps {
  label: string
  children: React.ReactNode
}

export default function InputSection({ label, children }: InputSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <label className="block text-2xl font-medium text-gray-700 mb-2 underline">{label}</label>
      {children}
    </div>
  )
}
