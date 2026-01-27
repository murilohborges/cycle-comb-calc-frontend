import { useState } from 'react'
import { ChevronDown, ChevronRight, Flame, Wind, Factory, Gauge, Droplet, Snowflake } from 'lucide-react'

import InputCondenser from './InputCondenser'
import InputFuel from './InputFuel'
import InputGasTurbine from './InputGasTurbine'
import InputHRSG from './InputHRSG'
import InputPump from './InputPump'
import InputSteamTurbine from './InputSteamTurbine'

interface InputSectionProps {
  data: Record<string, number>
  onChange: (key: string, value: number) => void
  errors?: Record<string, string>
  focusField?: string | null
}

export default function InputSection({ data, onChange, errors = {}, focusField = null }: InputSectionProps) {
  const [openSection, setOpenSection] = useState<string | null>('InputFuel')

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const sections = [
    { title: 'Fuel', icon: Flame, key: 'InputFuel', component: <InputFuel data={data} onChange={onChange} errors={errors} focusField={focusField} /> },
    { title: 'Gas Turbine', icon: Wind, key: 'InputGasTurbine', component: <InputGasTurbine data={data} onChange={onChange} errors={errors} focusField={focusField} /> },
    { title: 'Heat Recovery Steam Generator (HRSG)', icon: Factory, key: 'InputHRSG', component: <InputHRSG data={data} onChange={onChange} errors={errors} focusField={focusField} /> },
    { title: 'Steam Turbine', icon: Gauge, key: 'InputSteamTurbine', component: <InputSteamTurbine data={data} onChange={onChange} errors={errors} focusField={focusField} /> },
    { title: 'Pump', icon: Droplet, key: 'InputPump', component: <InputPump data={data} onChange={onChange} errors={errors} focusField={focusField} /> },
    { title: 'Condenser', icon: Snowflake, key: 'InputCondenser', component: <InputCondenser data={data} onChange={onChange} errors={errors} focusField={focusField} /> },
  ]

  return (
    <section
      className="
        space-y-5 
        p-2 sm:p-4 
        w-full 
        max-w-md sm:max-w-lg md:max-w-2xl 
        mx-auto
      "
    >
      {sections.map(({ title, icon: Icon, key, component }) => (
        <div
          key={key}
          className="
            rounded-2xl 
            border border-gray-200 
            bg-white 
            shadow-sm 
            transition-all 
            duration-200
            hover:shadow-md
          "
        >
          {/* Header of accordion */}
          <button
            type="button"
            onClick={() => toggleSection(key)}
            className="
              flex w-full items-center justify-between 
              p-3 sm:p-4 
              text-left text-gray-800 font-semibold 
              rounded-2xl 
              bg-gray-100 
              hover:bg-gray-200 
              transition-colors
            "
          >
            <div className="flex items-center gap-2">
              <Icon className="h-5 w-5 text-gray-600" />
              <span className="text-sm sm:text-base">{title}</span>
            </div>
            {openSection === key ? (
              <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200" />
            ) : (
              <ChevronRight className="h-5 w-5 text-gray-500 transition-transform duration-200" />
            )}
          </button>

          {/* Expanded content */}
          <div
            className={`
              transition-all duration-300 ease-in-out overflow-hidden
              ${openSection === key ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="p-3 sm:p-4 border-t border-gray-100">
              {component}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
