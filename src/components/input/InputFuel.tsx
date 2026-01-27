import InputField from './InputField'

interface InputFuelProps {
  data: Record<string, number>
  onChange: (key: string, value: number) => void
  errors?: Record<string, string>
  focusField?: string | null
}

export default function InputFuel({ data, onChange, errors, focusField }: InputFuelProps) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-1">
        Molar composition of the fuel (% mol)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Methane"
          name="methane_molar_fraction_fuel"
          value={data.methane_molar_fraction_fuel}
          errors={errors?.methane_molar_fraction_fuel}
          shouldFocus={focusField === 'methane_molar_fraction_fuel'}
          onChange={(e) => onChange('methane_molar_fraction_fuel', Number(e.target.value))}
        />
        <InputField
          label="Ethane"
          name="ethane_molar_fraction_fuel"
          value={data.ethane_molar_fraction_fuel}
          errors={errors?.ethane_molar_fraction_fuel}
          shouldFocus={focusField === 'ethane_molar_fraction_fuel'}
          onChange={(e) => onChange('ethane_molar_fraction_fuel', Number(e.target.value))}
        />
        <InputField
          label="Propane"
          name="propane_molar_fraction_fuel"
          value={data.propane_molar_fraction_fuel}
          errors={errors?.propane_molar_fraction_fuel}
          shouldFocus={focusField === 'propane_molar_fraction_fuel'}
          onChange={(e) => onChange('propane_molar_fraction_fuel', Number(e.target.value))}
        />
        <InputField
          label="Butane"
          name="n_butane_molar_fraction_fuel"
          value={data.n_butane_molar_fraction_fuel}
          errors={errors?.n_butane_molar_fraction_fuel}
          shouldFocus={focusField === 'n_butane_molar_fraction_fuel'}
          onChange={(e) => onChange('n_butane_molar_fraction_fuel', Number(e.target.value))}
        />
        <InputField
          label="Water"
          name="water_molar_fraction_fuel"
          value={data.water_molar_fraction_fuel}
          errors={errors?.water_molar_fraction_fuel}
          shouldFocus={focusField === 'water_molar_fraction_fuel'}
          onChange={(e) => onChange('water_molar_fraction_fuel', Number(e.target.value))}
        />
        <InputField
          label="Carbon Dioxide"
          name="carbon_dioxide_molar_fraction_fuel"
          value={data.carbon_dioxide_molar_fraction_fuel}
          errors={errors?.carbon_dioxide_molar_fraction_fuel}
          shouldFocus={focusField === 'carbon_dioxide_molar_fraction_fuel'}
          onChange={(e) => onChange('carbon_dioxide_molar_fraction_fuel', Number(e.target.value))}
        />
        <InputField
          label="Hydrogen"
          name="hydrogen_molar_fraction_fuel"
          value={data.hydrogen_molar_fraction_fuel}
          errors={errors?.hydrogen_molar_fraction_fuel}
          shouldFocus={focusField === 'hydrogen_molar_fraction_fuel'}
          onChange={(e) => onChange('hydrogen_molar_fraction_fuel', Number(e.target.value))}
        />
        <InputField
          label="Nitrogen"
          name="nitrogen_molar_fraction_fuel"
          value={data.nitrogen_molar_fraction_fuel}
          errors={errors?.nitrogen_molar_fraction_fuel}
          shouldFocus={focusField === 'nitrogen_molar_fraction_fuel'}
          onChange={(e) => onChange('nitrogen_molar_fraction_fuel', Number(e.target.value))}
        />
      </div>
    </div>
  )
}
