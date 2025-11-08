import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

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
  const [openSection, setOpenSection] = useState<string | null>('InputFuel')

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const sections = [
    { title: 'Combustível', key: 'InputFuel', component: <InputFuel data={data} onChange={onChange} /> },
    { title: 'Turbina a Gás', key: 'InputGasTurbine', component: <InputGasTurbine data={data} onChange={onChange} /> },
    { title: 'Caldeira de Recuperação (HRSG)', key: 'InputHRSG', component: <InputHRSG data={data} onChange={onChange} /> },
    { title: 'Turbina a Vapor', key: 'InputSteamTurbine', component: <InputSteamTurbine data={data} onChange={onChange} /> },
    { title: 'Bomba', key: 'InputPump', component: <InputPump data={data} onChange={onChange} /> },
    { title: 'Condensador', key: 'InputCondenser', component: <InputCondenser data={data} onChange={onChange} /> },
  ]

  return (
    <section className="space-y-4 p-4">
      {sections.map(({ title, key, component }) => (
        <div key={key} className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Cabeçalho do accordion */}
          <button
            onClick={() => toggleSection(key)}
            className="flex w-full items-center justify-between p-4 text-left text-gray-800 font-semibold transition-colors rounded-t-2xl"
          >
            <span>{title}</span>
            {openSection === key ? (
              <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200" />
            ) : (
              <ChevronRight className="h-5 w-5 text-gray-500 transition-transform duration-200" />
            )}
          </button>

          {/* Conteúdo expansível */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              openSection === key ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 border-t border-gray-100">{component}</div>
          </div>
        </div>
      ))}
    </section>
  )
}
