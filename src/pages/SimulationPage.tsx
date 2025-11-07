import { useState } from 'react'
import InputSection from '../components/InputSection'
import InputFuel from '../components/InputFuel'
import ResultCard from '../components/ResultCard'
import InputCycleBrayton from '../components/InputGasTurbine'
import InputHRSG from '../components/InputHRSG'
import InputSteamTurbine from '../components/InputSteamTurbine'
import InputPump from '../components/InputPump'
import InputCondenser from '../components/InputCondenser'

export default function SimulationPage() {
  const [fuelComposition, setFuelComposition] = useState('')
  const [cycleBraytonSettings, setCycleBraytonSettings] = useState('')
  const [HRSGSettings, setHRSGSettings] = useState('')
  const [steamTurbineSettings, setSteamTurbineSettings] = useState('')
  const [pumpSettings, setPumpSettings] = useState('')
  const [condenserSettings, setCondenserSettings] = useState('')
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
    <div className="bg-white shadow-md rounded-xl p-6 w-150 justify-center">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Cycle Comb Calculator
      </h1>

      <div className="space-y-4">
        <InputSection label="Composição molar do combustível em (%)">
          <InputFuel
            value={fuelComposition}
            onChange={setFuelComposition}
          />
        </InputSection>

        <InputSection label="Ciclo Brayton (Turbina a gás)">
          <InputCycleBrayton
            value={cycleBraytonSettings}
            onChange={setCycleBraytonSettings}
          />
        </InputSection>

        <InputSection label="Caldeira de Recuperação de Calor (HRSG)">
          <InputHRSG
            value={HRSGSettings}
            onChange={setHRSGSettings}
          />
        </InputSection>

        <InputSection label="Turbina a Vapor">
          <InputSteamTurbine
            value={steamTurbineSettings}
            onChange={setSteamTurbineSettings}
          />
        </InputSection>

        <InputSection label="Bomba">
          <InputPump
            value={pumpSettings}
            onChange={setPumpSettings}
          />
        </InputSection>

        <InputSection label="Condensador">
          <InputCondenser
            value={condenserSettings}
            onChange={setCondenserSettings}
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
