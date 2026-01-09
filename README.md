# 🧮 Combined Cycle Brayton–Rankine Simulator

Web interface to simulate thermodynamic properties and performance of a combined gas–steam cycle (Brayton–Rankine), consuming a Python/FastAPI microservice hosted on Render.

**Live Demo:** [https://cyclecombcalc.netlify.app/](https://cyclecombcalc.netlify.app/)

---

## 🚀 Tech Stack

- **React (Vite + TypeScript)** — reactive and modular frontend  
- **TailwindCSS** — responsive and modern styling 
- **Fetch API** — backend communication with timeout  
- **FastAPI (Render)** — Python microservice for thermodynamic calculations  

---

## ⚙️ Features

✅ Input of thermodynamic parameters (pressures, temperatures, fuel composition, etc.)  
✅ Buttons to **clear all inputs** or **load default preset values**  
✅ Request handling via `fetch()` with a **15-second timeout**  
✅ Dynamic and responsive result display in a result card  
✅ Error messages displayed directly from the backend API  

---

## 🧰 Project Structure

```bash
cycle-comb-calc-frontend/
│
├── src/
│ ├── components/
│ │ ├── input/
│ │ └── ResultCard.tsx
│ ├── pages/
│ │ └── SimulationPage.tsx
│ ├── styles/
│ │ └── global.css
│ ├── App.tsx
│ └── main.tsx
├── public/
├── index.html
└── package.json
```

---

## 🖥️ Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/murilohborges/cycle-comb-calc-frontend.git
cd yourrepo

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

- App will be available at:
👉 http://localhost:5173

---

## 🌐 Backend (FastAPI)

This frontend consumes the following API hosted on Render:
```bash
https://cycle-comb-calc.onrender.com/simulation
```

---

## ⚠️ Error Handling and Timeout

The backend communication includes:

- 15-second timeout to prevent freezing.

- Automatic capture of API error messages (from FastAPI’s "detail" field).

- User-friendly error display in the UI.

Example error message:

```bash
"Failed to fetch results. Please check your inputs or try again."
```

## 🧠 Thermodynamic Concept

The Combined Brayton–Rankine Cycle integrates a gas turbine (Brayton cycle) with a steam turbine (Rankine cycle), using waste heat from the gas turbine exhaust to generate additional power — significantly increasing overall plant efficiency.
