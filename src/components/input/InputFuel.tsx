import InputField from './InputField'

interface InputFuelProps {
  data: Record<string, any>
  onChange: (key: string, value: string) => void
}

export default function InputFuel({ data, onChange }: InputFuelProps) {
  return (
    <div className="mb-6 p-6 border rounded-xl bg-gray-50 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-1">
        Composição molar do combustível (% mol)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Metano"
          name="methane_molar_fraction_fuel"
          value={data.methane_molar_fraction_fuel}
          onChange={(e) => onChange('methane_molar_fraction_fuel', e.target.value)}
        />
        <InputField
          label="Etano"
          name="ethane_molar_fraction_fuel"
          value={data.ethane_molar_fraction_fuel}
          onChange={(e) => onChange('ethane_molar_fraction_fuel', e.target.value)}
        />
        <InputField
          label="Propano"
          name="propane_molar_fraction_fuel"
          value={data.propane_molar_fraction_fuel}
          onChange={(e) => onChange('propane_molar_fraction_fuel', e.target.value)}
        />
        <InputField
          label="Butano"
          name="n_butane_molar_fraction_fuel"
          value={data.n_butane_molar_fraction_fuel}
          onChange={(e) => onChange('n_butane_molar_fraction_fuel', e.target.value)}
        />
        <InputField
          label="Água"
          name="water_molar_fraction_fuel"
          value={data.water_molar_fraction_fuel}
          onChange={(e) => onChange('water_molar_fraction_fuel', e.target.value)}
        />
        <InputField
          label="Dióxido de Carbono"
          name="carbon_dioxide_molar_fraction_fuel"
          value={data.carbon_dioxide_molar_fraction_fuel}
          onChange={(e) => onChange('carbon_dioxide_molar_fraction_fuel', e.target.value)}
        />
        <InputField
          label="Hidrogênio"
          name="hydrogen_molar_fraction_fuel"
          value={data.hydrogen_molar_fraction_fuel}
          onChange={(e) => onChange('hydrogen_molar_fraction_fuel', e.target.value)}
        />
        <InputField
          label="Nitrogênio"
          name="nitrogen_molar_fraction_fuel"
          value={data.nitrogen_molar_fraction_fuel}
          onChange={(e) => onChange('nitrogen_molar_fraction_fuel', e.target.value)}
        />
      </div>
    </div>
  )
}
