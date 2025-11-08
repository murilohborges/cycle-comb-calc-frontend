
import InputCondenser from './InputCondenser'
import InputFuel from './InputFuel'
import InputGasTurbine from './InputGasTurbine'
import InputHRSG from './InputHRSG'
import InputPump from './InputPump'
import InputSteamTurbine from './InputSteamTurbine'

interface InputSectionProps {
  data: Record<string, any>
  onChange: (key: string, value: string) => void
}

export default function InputSection({ data, onChange }: InputSectionProps) {
  return (
    <section className="space-y-8">
      <InputFuel data={data} onChange={onChange} />
      <InputGasTurbine data={data} onChange={onChange} />
      <InputHRSG data={data} onChange={onChange} />
      <InputSteamTurbine data={data} onChange={onChange} />
      <InputPump data={data} onChange={onChange} />
      <InputCondenser data={data} onChange={onChange} />
    </section>
  )
}
