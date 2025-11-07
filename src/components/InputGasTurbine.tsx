import InputField from './InputField'

interface InputGasTurbineProps {
  value: string
  onChange: (val: string) => void
}

export default function InputGasTurbine({ value, onChange }: InputGasTurbineProps) {
  return (
    <div className='space-y-1'>
      <InputField
        label="Vazão de combustível (kg/h)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Temp. de entrada do combustível (°C)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Temp. de entrada do ar (°C)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Porcentagem de excesso de ar (%)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Pressão atmosférica local (atm)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Temperatura local (°C)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Umidade relativa (%)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Eficiência da turbina a gás (%)"
        value={value}
        onChange={onChange}
      />
      <InputField
        label="Temperatura de chaminé (°C)"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
