import { useState } from 'react'
import InputSection from '../components/input/InputSection'
import ResultCard from '../components/ResultCard'

export default function SimulationPage() {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [results, setResults] = useState<Record<string, any> | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleClear = () => {
    setFormData({})
    setResults(null)
    setError(null)
  }

  const handlePreset = () => {
    const presetData = {
      methane_molar_fraction_fuel: 90,
      ethane_molar_fraction_fuel: 0,
      propane_molar_fraction_fuel: 0,
      n_butane_molar_fraction_fuel: 0,
      water_molar_fraction_fuel: 0,
      carbon_dioxide_molar_fraction_fuel: 5,
      hydrogen_molar_fraction_fuel: 0,
      nitrogen_molar_fraction_fuel: 5,
      fuel_mass_flow: 50000,
      fuel_input_temperature: 25,
      air_input_temperature: 25,
      percent_excess_air: 150,
      local_atmospheric_pressure: 1,
      local_temperature: 15,
      relative_humidity: 60,
      gas_turbine_efficiency: 37.5,
      chimney_gas_temperature: 100,
      purge_level: 5,
      high_steam_level_pressure: 98,
      medium_steam_level_pressure: 24,
      low_steam_level_pressure: 4,
      high_steam_level_temperature: 565,
      medium_steam_level_temperature: 565,
      low_steam_level_temperature: 312.5,
      high_steam_level_fraction: 70,
      medium_steam_level_fraction: 15,
      high_steam_level_efficiency: 89,
      medium_steam_level_efficiency: 90,
      low_steam_level_efficiency: 91,
      reductor_generator_set_efficiency: 90,
      pump_efficiency: 75,
      engine_pump_efficiency: 80,
      power_factor_pump_efficiency: 0.84,
      condenser_operation_pressure: 0.074,
      range_temperature_cooling_tower: 10,
    }
    setFormData(presetData)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResults(null)

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 120000)

    try {
      const response = await fetch('https://cycle-comb-calc.onrender.com/simulation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      clearTimeout(timeout)

      if (!response.ok) {
        let errorMsg = `Error${response.status}: ${response.statusText}`
        try {
          const errorData = await response.json()
          errorMsg = `${errorData.type} (${response.status}): ${errorData.error}`
        } catch {
          errorMsg = await response.text()
        }
        throw new Error(errorMsg)
      }

      const data = await response.json()
      setResults(data)
    } catch (err: any) {
      if (err.name === 'AbortError') {
        setError('Timeout reached. The server took too long to respond.')
      } else {
        setError(err.message || 'Failed to obtain results. Check the data or try again.')
      }
    } finally {
      clearTimeout(timeout)
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-800 py-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className='flex justify-center items-end'>
          <img
            src="/logo_title.png"
            alt="Logo"
            className="w-8 h-8 sm:w-30 sm:h-30"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
            Simulador de Ciclo Combinado Brayton-Rankine
          </h1>
        </div>
        
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-8 text-gray-200">
          Obtenha dados simulados de uma termoelétrica a gás
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Layout responsivo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* Inputs */}
            <div className="bg-gray-400 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg md:max-w-none mx-auto">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 text-center">
                Dados de Entrada
              </h3>

              <InputSection data={formData} onChange={handleChange} />

              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg 
                             hover:bg-blue-700 disabled:bg-blue-400 transition-colors w-full sm:w-auto"
                >
                  {loading ? 'Aguarde...' : 'Calcular'}
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="px-6 py-2 bg-gray-600 text-white font-medium rounded-lg 
                             hover:bg-gray-700 transition-colors w-full sm:w-auto"
                >
                  Limpar
                </button>

                <button
                  type="button"
                  onClick={handlePreset}
                  className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg 
                             hover:bg-green-700 transition-colors w-full sm:w-auto"
                >
                  Valores padrão
                </button>
              </div>

              {error && (
                <p className="text-red-600 mt-4 text-center font-medium">{error}</p>
              )}
            </div>

            {/* Results */}
            <div className="w-full max-w-md sm:max-w-lg md:max-w-none mx-auto">
              {results && <ResultCard data={results} />}
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
