import { useState } from 'react'
import InputSection from '../components/InputSection'
import InputFuel from '../components/InputFuel'
import ResultCard from '../components/ResultCard'

export default function SimulationPage() {
  const [temperature, setTemperature] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCalculate = async () => {
    setLoading(true)
    setError('')
    setResult(null)

    try {
      await new Promise(r => setTimeout(r, 800)) 
      setResult({
        enthalpy: '2800 kJ/kg',
        work_output: '350 kJ/kg',
      })
    } catch {
      setError('Erro ao calcular. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Cycle Comb Calculator
      </h1>

      <div className="space-y-4">
        <InputSection label="Composição molar do combustível em (%)">
          <InputFuel
            value={temperature}
            onChange={setTemperature}
          />
        </InputSection>

        <button
          onClick={handleCalculate}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition disabled:opacity-60"
        >
          {loading ? 'Calculando...' : 'Calcular'}
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {result && <ResultCard data={result} />}
      </div>
    </div>
  )
}
