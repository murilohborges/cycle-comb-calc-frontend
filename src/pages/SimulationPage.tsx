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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResults(null)

    try {
      const response = await fetch('https://cycle-comb-calc.onrender.com/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Erro na requisição')

      const data = await response.json()
      setResults(data)
    } catch (err) {
      setError('Falha ao obter resultados. Verifique os dados ou tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-800 py-10 px-15">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-white">
          Simulador de Ciclo Combinado Brayton-Rankine
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Layout responsivo 2 colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-gray-400 rounded-xl shadow-md p-6">
              <InputSection data={formData} onChange={handleChange} />
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg 
                             hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
                >
                  {loading ? 'Calculando...' : 'Calcular'}
                </button>
              </div>
              {error && (
                <p className="text-red-600 mt-4 text-center font-medium">{error}</p>
              )}
            </div>

            {/* Resultados */}
            <div>
              <ResultCard data={{}} />
              {results && <ResultCard data={results} />}
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
