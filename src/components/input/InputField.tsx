import { useEffect, useRef } from "react"

interface InputFieldProps {
  label: string
  name: string
  type?: 'number'
  value: number | string
  errors?: string
  shouldFocus?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputField({
  label,
  name,
  type = 'number',
  value,
  errors,
  shouldFocus,
  onChange,
}: InputFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [shouldFocus])

  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        value={value ?? ''}
        onChange={onChange}
        className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-shadow shadow-sm hover:shadow-md"
      />

      {errors && (
        <p className="text-sm text-red-600 mt-1">
          {errors}
        </p>
      )}
    </div>
  )
}
