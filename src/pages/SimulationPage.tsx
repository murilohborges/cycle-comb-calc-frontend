import { useState } from 'react'
import InputSection from '../components/input/InputSection'
import ResultCard from '../components/ResultCard'

export default function SimulationPage() {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [results, setResults] = useState<Record<string, any> | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Function to update the fields
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  // Function to clear all fields
  const handleClear = () => {
    setFormData({})
    setResults(null)
    setError(null)
  }

  // Function to fill in preset values (mock)
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
      range_temperature_cooling_tower: 10
    }
    setFormData(presetData)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResults(null)

    // 🔹 Timeout in milliseconds
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000) // 15s

    try {
      const response = await fetch('https://cycle-comb-calc.onrender.com/simulation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal, // <- necessary for the timeout to work
      })

      clearTimeout(timeout)

      // 🔸 If the backend returns an error (status >= 400)
      if (!response.ok) {
        let errorMsg = `Error in request (HTTP ${response.status})`
        try {
          const errorData = await response.json()
          // tries to get the message sent by FastAPI
          errorMsg = errorData.detail || errorData.message || errorMsg
        } catch {
          // if the backend does not return JSON
          errorMsg = await response.text()
        }
        throw new Error(errorMsg)
      }

      // 🔸 Everything's fine → reads the JSON normally.
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
    <main className="min-h-screen bg-gray-800 py-10 px-15">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-white">
          Simulador de Ciclo Combinado Brayton-Rankine
        </h1>
        <h2 className="text-xl font-semibold text-center mb-6 text-white">
          Obtenha dados simulados de uma termoelétrica a gás
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Responsive 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-gray-400 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-1 text-gray-800 text-center">Dados de Entrada</h3>
              <InputSection data={formData} onChange={handleChange} />


              {/* 🔹 Botões de ação */}
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg 
                             hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
                >
                  {loading ? 'Aguarde...' : 'Calcular'}
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="px-6 py-2 bg-gray-600 text-white font-medium rounded-lg 
                             hover:bg-gray-700 transition-colors"
                >
                  Limpar
                </button>

                <button
                  type="button"
                  onClick={handlePreset}
                  className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg 
                             hover:bg-green-700 transition-colors"
                >
                  Valores padrão
                </button>
              </div>

              {/* 🔹 Mensagem de erro */}
              {error && (
                <p className="text-red-600 mt-4 text-center font-medium">{error}</p>
              )}
            </div>

            {/* Results */}
            <div>
              {results && <ResultCard data={results} />}
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
