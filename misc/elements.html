import React, { useState, useEffect, useRef } from 'react';

// --- DATA ---
// Complete Periodic Table Dataset
const elementsData = [
  { n: 1, s: 'H', nm: 'Hydrogen', c: 'Diatomic Nonmetal', r: 1, col: 1 },
  { n: 2, s: 'He', nm: 'Helium', c: 'Noble Gas', r: 1, col: 18 },
  { n: 3, s: 'Li', nm: 'Lithium', c: 'Alkali Metal', r: 2, col: 1 },
  { n: 4, s: 'Be', nm: 'Beryllium', c: 'Alkaline Earth Metal', r: 2, col: 2 },
  { n: 5, s: 'B', nm: 'Boron', c: 'Metalloid', r: 2, col: 13 },
  { n: 6, s: 'C', nm: 'Carbon', c: 'Polyatomic Nonmetal', r: 2, col: 14 },
  { n: 7, s: 'N', nm: 'Nitrogen', c: 'Diatomic Nonmetal', r: 2, col: 15 },
  { n: 8, s: 'O', nm: 'Oxygen', c: 'Diatomic Nonmetal', r: 2, col: 16 },
  { n: 9, s: 'F', nm: 'Fluorine', c: 'Halogen', r: 2, col: 17 },
  { n: 10, s: 'Ne', nm: 'Neon', c: 'Noble Gas', r: 2, col: 18 },
  { n: 11, s: 'Na', nm: 'Sodium', c: 'Alkali Metal', r: 3, col: 1 },
  { n: 12, s: 'Mg', nm: 'Magnesium', c: 'Alkaline Earth Metal', r: 3, col: 2 },
  { n: 13, s: 'Al', nm: 'Aluminum', c: 'Post-Transition Metal', r: 3, col: 13 },
  { n: 14, s: 'Si', nm: 'Silicon', c: 'Metalloid', r: 3, col: 14 },
  { n: 15, s: 'P', nm: 'Phosphorus', c: 'Polyatomic Nonmetal', r: 3, col: 15 },
  { n: 16, s: 'S', nm: 'Sulfur', c: 'Polyatomic Nonmetal', r: 3, col: 16 },
  { n: 17, s: 'Cl', nm: 'Chlorine', c: 'Halogen', r: 3, col: 17 },
  { n: 18, s: 'Ar', nm: 'Argon', c: 'Noble Gas', r: 3, col: 18 },
  { n: 19, s: 'K', nm: 'Potassium', c: 'Alkali Metal', r: 4, col: 1 },
  { n: 20, s: 'Ca', nm: 'Calcium', c: 'Alkaline Earth Metal', r: 4, col: 2 },
  { n: 21, s: 'Sc', nm: 'Scandium', c: 'Transition Metal', r: 4, col: 3 },
  { n: 22, s: 'Ti', nm: 'Titanium', c: 'Transition Metal', r: 4, col: 4 },
  { n: 23, s: 'V', nm: 'Vanadium', c: 'Transition Metal', r: 4, col: 5 },
  { n: 24, s: 'Cr', nm: 'Chromium', c: 'Transition Metal', r: 4, col: 6 },
  { n: 25, s: 'Mn', nm: 'Manganese', c: 'Transition Metal', r: 4, col: 7 },
  { n: 26, s: 'Fe', nm: 'Iron', c: 'Transition Metal', r: 4, col: 8 },
  { n: 27, s: 'Co', nm: 'Cobalt', c: 'Transition Metal', r: 4, col: 9 },
  { n: 28, s: 'Ni', nm: 'Nickel', c: 'Transition Metal', r: 4, col: 10 },
  { n: 29, s: 'Cu', nm: 'Copper', c: 'Transition Metal', r: 4, col: 11 },
  { n: 30, s: 'Zn', nm: 'Zinc', c: 'Transition Metal', r: 4, col: 12 },
  { n: 31, s: 'Ga', nm: 'Gallium', c: 'Post-Transition Metal', r: 4, col: 13 },
  { n: 32, s: 'Ge', nm: 'Germanium', c: 'Metalloid', r: 4, col: 14 },
  { n: 33, s: 'As', nm: 'Arsenic', c: 'Metalloid', r: 4, col: 15 },
  { n: 34, s: 'Se', nm: 'Selenium', c: 'Polyatomic Nonmetal', r: 4, col: 16 },
  { n: 35, s: 'Br', nm: 'Bromine', c: 'Halogen', r: 4, col: 17 },
  { n: 36, s: 'Kr', nm: 'Krypton', c: 'Noble Gas', r: 4, col: 18 },
  { n: 37, s: 'Rb', nm: 'Rubidium', c: 'Alkali Metal', r: 5, col: 1 },
  { n: 38, s: 'Sr', nm: 'Strontium', c: 'Alkaline Earth Metal', r: 5, col: 2 },
  { n: 39, s: 'Y', nm: 'Yttrium', c: 'Transition Metal', r: 5, col: 3 },
  { n: 40, s: 'Zr', nm: 'Zirconium', c: 'Transition Metal', r: 5, col: 4 },
  { n: 41, s: 'Nb', nm: 'Niobium', c: 'Transition Metal', r: 5, col: 5 },
  { n: 42, s: 'Mo', nm: 'Molybdenum', c: 'Transition Metal', r: 5, col: 6 },
  { n: 43, s: 'Tc', nm: 'Technetium', c: 'Transition Metal', r: 5, col: 7 },
  { n: 44, s: 'Ru', nm: 'Ruthenium', c: 'Transition Metal', r: 5, col: 8 },
  { n: 45, s: 'Rh', nm: 'Rhodium', c: 'Transition Metal', r: 5, col: 9 },
  { n: 46, s: 'Pd', nm: 'Palladium', c: 'Transition Metal', r: 5, col: 10 },
  { n: 47, s: 'Ag', nm: 'Silver', c: 'Transition Metal', r: 5, col: 11 },
  { n: 48, s: 'Cd', nm: 'Cadmium', c: 'Transition Metal', r: 5, col: 12 },
  { n: 49, s: 'In', nm: 'Indium', c: 'Post-Transition Metal', r: 5, col: 13 },
  { n: 50, s: 'Sn', nm: 'Tin', c: 'Post-Transition Metal', r: 5, col: 14 },
  { n: 51, s: 'Sb', nm: 'Antimony', c: 'Metalloid', r: 5, col: 15 },
  { n: 52, s: 'Te', nm: 'Tellurium', c: 'Metalloid', r: 5, col: 16 },
  { n: 53, s: 'I', nm: 'Iodine', c: 'Halogen', r: 5, col: 17 },
  { n: 54, s: 'Xe', nm: 'Xenon', c: 'Noble Gas', r: 5, col: 18 },
  { n: 55, s: 'Cs', nm: 'Cesium', c: 'Alkali Metal', r: 6, col: 1 },
  { n: 56, s: 'Ba', nm: 'Barium', c: 'Alkaline Earth Metal', r: 6, col: 2 },
  { n: 57, s: 'La', nm: 'Lanthanum', c: 'Lanthanide', r: 9, col: 4 },
  { n: 58, s: 'Ce', nm: 'Cerium', c: 'Lanthanide', r: 9, col: 5 },
  { n: 59, s: 'Pr', nm: 'Praseodymium', c: 'Lanthanide', r: 9, col: 6 },
  { n: 60, s: 'Nd', nm: 'Neodymium', c: 'Lanthanide', r: 9, col: 7 },
  { n: 61, s: 'Pm', nm: 'Promethium', c: 'Lanthanide', r: 9, col: 8 },
  { n: 62, s: 'Sm', nm: 'Samarium', c: 'Lanthanide', r: 9, col: 9 },
  { n: 63, s: 'Eu', nm: 'Europium', c: 'Lanthanide', r: 9, col: 10 },
  { n: 64, s: 'Gd', nm: 'Gadolinium', c: 'Lanthanide', r: 9, col: 11 },
  { n: 65, s: 'Tb', nm: 'Terbium', c: 'Lanthanide', r: 9, col: 12 },
  { n: 66, s: 'Dy', nm: 'Dysprosium', c: 'Lanthanide', r: 9, col: 13 },
  { n: 67, s: 'Ho', nm: 'Holmium', c: 'Lanthanide', r: 9, col: 14 },
  { n: 68, s: 'Er', nm: 'Erbium', c: 'Lanthanide', r: 9, col: 15 },
  { n: 69, s: 'Tm', nm: 'Thulium', c: 'Lanthanide', r: 9, col: 16 },
  { n: 70, s: 'Yb', nm: 'Ytterbium', c: 'Lanthanide', r: 9, col: 17 },
  { n: 71, s: 'Lu', nm: 'Lutetium', c: 'Lanthanide', r: 9, col: 18 },
  { n: 72, s: 'Hf', nm: 'Hafnium', c: 'Transition Metal', r: 6, col: 4 },
  { n: 73, s: 'Ta', nm: 'Tantalum', c: 'Transition Metal', r: 6, col: 5 },
  { n: 74, s: 'W', nm: 'Tungsten', c: 'Transition Metal', r: 6, col: 6 },
  { n: 75, s: 'Re', nm: 'Rhenium', c: 'Transition Metal', r: 6, col: 7 },
  { n: 76, s: 'Os', nm: 'Osmium', c: 'Transition Metal', r: 6, col: 8 },
  { n: 77, s: 'Ir', nm: 'Iridium', c: 'Transition Metal', r: 6, col: 9 },
  { n: 78, s: 'Pt', nm: 'Platinum', c: 'Transition Metal', r: 6, col: 10 },
  { n: 79, s: 'Au', nm: 'Gold', c: 'Transition Metal', r: 6, col: 11 },
  { n: 80, s: 'Hg', nm: 'Mercury', c: 'Transition Metal', r: 6, col: 12 },
  { n: 81, s: 'Tl', nm: 'Thallium', c: 'Post-Transition Metal', r: 6, col: 13 },
  { n: 82, s: 'Pb', nm: 'Lead', c: 'Post-Transition Metal', r: 6, col: 14 },
  { n: 83, s: 'Bi', nm: 'Bismuth', c: 'Post-Transition Metal', r: 6, col: 15 },
  { n: 84, s: 'Po', nm: 'Polonium', c: 'Metalloid', r: 6, col: 16 },
  { n: 85, s: 'At', nm: 'Astatine', c: 'Halogen', r: 6, col: 17 },
  { n: 86, s: 'Rn', nm: 'Radon', c: 'Noble Gas', r: 6, col: 18 },
  { n: 87, s: 'Fr', nm: 'Francium', c: 'Alkali Metal', r: 7, col: 1 },
  { n: 88, s: 'Ra', nm: 'Radium', c: 'Alkaline Earth Metal', r: 7, col: 2 },
  { n: 89, s: 'Ac', nm: 'Actinium', c: 'Actinide', r: 10, col: 4 },
  { n: 90, s: 'Th', nm: 'Thorium', c: 'Actinide', r: 10, col: 5 },
  { n: 91, s: 'Pa', nm: 'Protactinium', c: 'Actinide', r: 10, col: 6 },
  { n: 92, s: 'U', nm: 'Uranium', c: 'Actinide', r: 10, col: 7 },
  { n: 93, s: 'Np', nm: 'Neptunium', c: 'Actinide', r: 10, col: 8 },
  { n: 94, s: 'Pu', nm: 'Plutonium', c: 'Actinide', r: 10, col: 9 },
  { n: 95, s: 'Am', nm: 'Americium', c: 'Actinide', r: 10, col: 10 },
  { n: 96, s: 'Cm', nm: 'Curium', c: 'Actinide', r: 10, col: 11 },
  { n: 97, s: 'Bk', nm: 'Berkelium', c: 'Actinide', r: 10, col: 12 },
  { n: 98, s: 'Cf', nm: 'Californium', c: 'Actinide', r: 10, col: 13 },
  { n: 99, s: 'Es', nm: 'Einsteinium', c: 'Actinide', r: 10, col: 14 },
  { n: 100, s: 'Fm', nm: 'Fermium', c: 'Actinide', r: 10, col: 15 },
  { n: 101, s: 'Md', nm: 'Mendelevium', c: 'Actinide', r: 10, col: 16 },
  { n: 102, s: 'No', nm: 'Nobelium', c: 'Actinide', r: 10, col: 17 },
  { n: 103, s: 'Lr', nm: 'Lawrencium', c: 'Actinide', r: 10, col: 18 },
  { n: 104, s: 'Rf', nm: 'Rutherfordium', c: 'Transition Metal', r: 7, col: 4 },
  { n: 105, s: 'Db', nm: 'Dubnium', c: 'Transition Metal', r: 7, col: 5 },
  { n: 106, s: 'Sg', nm: 'Seaborgium', c: 'Transition Metal', r: 7, col: 6 },
  { n: 107, s: 'Bh', nm: 'Bohrium', c: 'Transition Metal', r: 7, col: 7 },
  { n: 108, s: 'Hs', nm: 'Hassium', c: 'Transition Metal', r: 7, col: 8 },
  { n: 109, s: 'Mt', nm: 'Meitnerium', c: 'Unknown', r: 7, col: 9 },
  { n: 110, s: 'Ds', nm: 'Darmstadtium', c: 'Unknown', r: 7, col: 10 },
  { n: 111, s: 'Rg', nm: 'Roentgenium', c: 'Unknown', r: 7, col: 11 },
  { n: 112, s: 'Cn', nm: 'Copernicium', c: 'Transition Metal', r: 7, col: 12 },
  { n: 113, s: 'Nh', nm: 'Nihonium', c: 'Unknown', r: 7, col: 13 },
  { n: 114, s: 'Fl', nm: 'Flerovium', c: 'Unknown', r: 7, col: 14 },
  { n: 115, s: 'Mc', nm: 'Moscovium', c: 'Unknown', r: 7, col: 15 },
  { n: 116, s: 'Lv', nm: 'Livermorium', c: 'Unknown', r: 7, col: 16 },
  { n: 117, s: 'Ts', nm: 'Tennessine', c: 'Unknown', r: 7, col: 17 },
  { n: 118, s: 'Og', nm: 'Oganesson', c: 'Unknown', r: 7, col: 18 },
];

const categoryColors = {
  'Diatomic Nonmetal': 'bg-green-600/30 border-green-500/70 text-green-100',
  'Polyatomic Nonmetal': 'bg-green-600/30 border-green-500/70 text-green-100',
  'Noble Gas': 'bg-purple-600/30 border-purple-500/70 text-purple-100',
  'Alkali Metal': 'bg-red-600/30 border-red-500/70 text-red-100',
  'Alkaline Earth Metal': 'bg-orange-600/30 border-orange-500/70 text-orange-100',
  'Metalloid': 'bg-teal-600/30 border-teal-500/70 text-teal-100',
  'Halogen': 'bg-cyan-600/30 border-cyan-500/70 text-cyan-100',
  'Transition Metal': 'bg-yellow-600/30 border-yellow-500/70 text-yellow-100',
  'Post-Transition Metal': 'bg-blue-600/30 border-blue-500/70 text-blue-100',
  'Lanthanide': 'bg-pink-600/30 border-pink-500/70 text-pink-100',
  'Actinide': 'bg-rose-600/30 border-rose-500/70 text-rose-100',
  'Unknown': 'bg-gray-600/30 border-gray-500/70 text-gray-100',
};

export default function App() {
  const [rangeInput, setRangeInput] = useState('1-118');
  const [activeRange, setActiveRange] = useState({ min: 1, max: 118 });
  const [quizOrder, setQuizOrder] = useState('random'); // 'random' or 'sequential'
  const [currentElement, setCurrentElement] = useState(null);
  
  // Game field inputs
  const [inputNum, setInputNum] = useState('');
  const [inputSymbol, setInputSymbol] = useState('');
  const [inputName, setInputName] = useState('');

  // Scores & UI feedback states
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Validation status for each field
  const [grading, setGrading] = useState({
    numCorrect: false,
    symbolCorrect: false,
    nameCorrect: false,
  });

  const numInputRef = useRef(null);

  // Pick a random or sequential element from the active range
  const pickNextElement = (customRange = activeRange, customOrder = quizOrder) => {
    const filteredElements = elementsData.filter(
      el => el.n >= customRange.min && el.n <= customRange.max
    );
    if (filteredElements.length === 0) return;

    let nextElement = null;

    if (customOrder === 'sequential') {
      // Find what the previous element was to increment
      if (currentElement && currentElement.n >= customRange.min && currentElement.n < customRange.max) {
        const nextNum = currentElement.n + 1;
        nextElement = elementsData.find(el => el.n === nextNum);
      } else {
        // If out of range, wrap back to the range's minimum
        nextElement = elementsData.find(el => el.n === customRange.min);
      }
    } else {
      // Pick randomly
      const randomIndex = Math.floor(Math.random() * filteredElements.length);
      nextElement = filteredElements[randomIndex];
    }

    if (nextElement) {
      setCurrentElement(nextElement);
      setInputNum('');
      setInputSymbol('');
      setInputName('');
      setIsSubmitted(false);
      setGrading({ numCorrect: false, symbolCorrect: false, nameCorrect: false });

      // Focus first input box
      setTimeout(() => {
        if (numInputRef.current) numInputRef.current.focus();
      }, 50);
    }
  };

  // Safe range filter applicator
  const applyRangeAndOrder = (minVal, maxVal, nextOrder = quizOrder) => {
    let min = parseInt(minVal, 10);
    let max = parseInt(maxVal, 10);

    if (isNaN(min)) min = 1;
    if (isNaN(max)) max = 118;

    if (min < 1) min = 1;
    if (max > 118) max = 118;
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }

    const nextRange = { min, max };
    setActiveRange(nextRange);
    setRangeInput(`${min}-${max}`);
    setStreak(0);
    
    // Pass the fresh values directly to avoid waiting on state update rendering
    pickNextElement(nextRange, nextOrder);
  };

  const handleRangeInputChange = (val) => {
    setRangeInput(val);
  };

  const parseAndApplyRangeInput = () => {
    if (rangeInput.includes('-')) {
      const parts = rangeInput.split('-');
      applyRangeAndOrder(parts[0], parts[1]);
    } else {
      applyRangeAndOrder(1, rangeInput);
    }
  };

  // Trigger change when switching between random and sequential order
  const handleOrderChange = (newOrder) => {
    setQuizOrder(newOrder);
    setStreak(0);
    pickNextElement(activeRange, newOrder);
  };

  // Initialize on mount
  useEffect(() => {
    pickNextElement();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentElement || isSubmitted) return;

    // Normalize comparison strings
    const answerNum = parseInt(inputNum.trim(), 10);
    const answerSymbol = inputSymbol.trim().toLowerCase();
    const answerName = inputName.trim().toLowerCase();

    const isNumCorrect = answerNum === currentElement.n;
    const isSymbolCorrect = answerSymbol === currentElement.s.toLowerCase();
    const isNameCorrect = answerName === currentElement.nm.toLowerCase();

    setGrading({
      numCorrect: isNumCorrect,
      symbolCorrect: isSymbolCorrect,
      nameCorrect: isNameCorrect,
    });

    setIsSubmitted(true);

    const allCorrect = isNumCorrect && isSymbolCorrect && isNameCorrect;

    if (allCorrect) {
      setScore(s => s + 1);
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
  };

  const handleSkip = () => {
    setStreak(0);
    setIsSubmitted(true);
    setGrading({
      numCorrect: false,
      symbolCorrect: false,
      nameCorrect: false
    });
  };

  const isCurrentAllCorrect = grading.numCorrect && grading.symbolCorrect && grading.nameCorrect;

  // Custom table element render handler
  const renderCellContent = (el) => {
    const isTarget = currentElement && currentElement.n === el.n;
    const inRange = el.n >= activeRange.min && el.n <= activeRange.max;

    if (isTarget) {
      return (
        <div className="flex flex-col items-center justify-center h-full w-full relative z-10 font-bold bg-blue-500/20">
          <span className="text-[10px] text-blue-300">?</span>
          <span className="text-lg text-white animate-bounce font-extrabold">?</span>
          <span className="text-[8px] text-blue-300 uppercase tracking-widest font-black">GUESS</span>
        </div>
      );
    }

    if (inRange) {
      // Blind mode: Details of elements in active range are fully hidden!
      return (
        <div className="flex flex-col items-center justify-center h-full w-full opacity-90 hover:opacity-100 bg-gray-950/50">
          <div className="text-[9px] text-indigo-400 font-bold">{el.n}</div>
          <div className="text-xs text-gray-600 font-semibold">•</div>
          <div className="text-[8px] truncate w-full text-center px-0.5 text-gray-700">???</div>
        </div>
      );
    }

    // Reference elements outside of active range: showing full details but transparent
    return (
      <div className="flex flex-col items-center justify-center h-full w-full opacity-35 hover:opacity-60">
        <div className="text-[9px] opacity-70">{el.n}</div>
        <div className="font-bold text-sm md:text-base">{el.s}</div>
        <div className="text-[8px] truncate w-full text-center px-0.5 opacity-80">{el.nm}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-slate-100 font-sans flex flex-col selection:bg-blue-500 selection:text-white">
      {/* Header Panel */}
      <header className="bg-gray-900/90 backdrop-blur-md border-b border-gray-800 p-4 sticky top-0 z-30 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20">
              <span className="font-black text-white text-lg">BR</span>
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
                Periodic Table Quiz Practice <span className="text-xs bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 px-2 py-0.5 rounded-full font-medium">Partially vibe-coded by Bobby Reichert ('◡')</span>
              </h1>
              <p className="text-xs text-gray-400">To practice for my chem class.</p>
            </div>
          </div>

          {/* Quick Ranges, Order Selector & Custom inputs */}
          <div className="flex flex-wrap items-center gap-3 bg-gray-950/60 p-2 rounded-xl border border-gray-800">
            {/* Range controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400 px-1">Range:</span>
              <button 
                onClick={() => { applyRangeAndOrder(1, 20); }}
                className={`px-2 py-1 text-xs rounded-lg font-semibold transition ${
                  activeRange.min === 1 && activeRange.max === 20 ? 'bg-blue-600 text-white' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                1-20
              </button>
              <button 
                onClick={() => { applyRangeAndOrder(1, 54); }}
                className={`px-2 py-1 text-xs rounded-lg font-semibold transition ${
                  activeRange.min === 1 && activeRange.max === 54 ? 'bg-blue-600 text-white' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                1-54
              </button>
              <button 
                onClick={() => { applyRangeAndOrder(1, 118); }}
                className={`px-2 py-1 text-xs rounded-lg font-semibold transition ${
                  activeRange.min === 1 && activeRange.max === 118 ? 'bg-blue-600 text-white' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                All 118
              </button>
              <input
                type="text"
                value={rangeInput}
                onChange={(e) => handleRangeInputChange(e.target.value)}
                onBlur={parseAndApplyRangeInput}
                onKeyDown={(e) => e.key === 'Enter' && parseAndApplyRangeInput()}
                className="w-16 bg-gray-900 border border-gray-700 rounded px-1.5 py-0.5 text-xs text-center font-bold text-blue-300 focus:outline-none focus:border-blue-500"
                placeholder="1-118"
              />
            </div>

            <div className="h-4 w-px bg-gray-850 hidden sm:block" />

            {/* Order Toggle */}
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-gray-400 pr-1">Order:</span>
              <button
                onClick={() => handleOrderChange('random')}
                className={`px-2 py-1 text-xs rounded-lg font-semibold transition ${
                  quizOrder === 'random' ? 'bg-indigo-600 text-white' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
                title="Quiz elements in random order"
              >
              Random
              </button>
              <button
                onClick={() => handleOrderChange('sequential')}
                className={`px-2 py-1 text-xs rounded-lg font-semibold transition ${
                  quizOrder === 'sequential' ? 'bg-indigo-600 text-white' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
                title="Quiz elements in sequence of atomic number"
              >
                In Order
              </button>
            </div>
          </div>

          {/* Leaderboard stats */}
          <div className="flex items-center gap-6 bg-gray-950/60 p-2 px-4 rounded-xl border border-gray-800">
            <div className="text-center">
              <div className="text-[10px] text-gray-500 uppercase font-black">Score</div>
              <div className="text-xl font-extrabold text-blue-400">{score}</div>
            </div>
            <div className="h-6 w-px bg-gray-800" />
            <div className="text-center">
              <div className="text-[10px] text-gray-500 uppercase font-black">Streak</div>
              <div className="text-xl font-extrabold text-orange-400 flex items-center justify-center gap-1">
                {streak}
                <span className="text-xs">🔥</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center p-4 md:p-6">
        
        {/* Quiz Board */}
        <div className="w-full max-w-3xl bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl mb-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold mb-3 border border-indigo-500/20">
              Study Range: {activeRange.min} - {activeRange.max}, in {quizOrder === 'random' ? 'Random' : 'Sequential'} Order
            </div>
            <h2 className="text-lg md:text-xl font-medium text-gray-300">
              Try not to fail :)
            </h2>
            <p className="text-xs text-indigo-300/80 mt-1">
              Find the glowing target element in the table and provide all three answers:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Guess 1: Atomic Number */}
              <div className="relative">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  1. Atomic Number
                </label>
                <input
                  ref={numInputRef}
                  type="number"
                  value={inputNum}
                  onChange={(e) => setInputNum(e.target.value)}
                  placeholder="e.g. 6"
                  disabled={isSubmitted}
                  className={`w-full bg-gray-950 text-white rounded-xl px-4 py-3 border-2 focus:outline-none transition-all ${
                    isSubmitted 
                      ? grading.numCorrect 
                        ? 'border-green-500/80 bg-green-950/20' 
                        : 'border-red-500/80 bg-red-950/20'
                      : 'border-gray-800 focus:border-blue-500'
                  }`}
                  required
                />
                {isSubmitted && (
                  <div className={`mt-1.5 text-xs font-bold ${grading.numCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {grading.numCorrect ? '✓ Correct' : `✗ Correct: ${currentElement?.n}`}
                  </div>
                )}
              </div>

              {/* Guess 2: Chemical Symbol */}
              <div className="relative">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  2. Chemical Symbol
                </label>
                <input
                  type="text"
                  value={inputSymbol}
                  onChange={(e) => setInputSymbol(e.target.value)}
                  placeholder="e.g. C"
                  disabled={isSubmitted}
                  className={`w-full bg-gray-950 text-white rounded-xl px-4 py-3 border-2 focus:outline-none transition-all ${
                    isSubmitted 
                      ? grading.symbolCorrect 
                        ? 'border-green-500/80 bg-green-950/20' 
                        : 'border-red-500/80 bg-red-950/20'
                      : 'border-gray-800 focus:border-blue-500'
                  }`}
                  required
                />
                {isSubmitted && (
                  <div className={`mt-1.5 text-xs font-bold ${grading.symbolCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {grading.symbolCorrect ? '✓ Correct' : `✗ Correct: ${currentElement?.s}`}
                  </div>
                )}
              </div>

              {/* Guess 3: Element Name */}
              <div className="relative">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  3. Element Name
                </label>
                <input
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  placeholder="e.g. Carbon"
                  disabled={isSubmitted}
                  className={`w-full bg-gray-950 text-white rounded-xl px-4 py-3 border-2 focus:outline-none transition-all ${
                    isSubmitted 
                      ? grading.nameCorrect 
                        ? 'border-green-500/80 bg-green-950/20' 
                        : 'border-red-500/80 bg-red-950/20'
                      : 'border-gray-800 focus:border-blue-500'
                  }`}
                  required
                />
                {isSubmitted && (
                  <div className={`mt-1.5 text-xs font-bold ${grading.nameCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {grading.nameCorrect ? '✓ Correct' : `✗ Correct: ${currentElement?.nm}`}
                  </div>
                )}
              </div>

            </div>

            {/* Actions panel */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-800/80 gap-3">
              <div className="text-xs text-gray-400 text-center sm:text-left">
                Check your spelling! Capitalization does not matter.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {!isSubmitted ? (
                  <>
                    <button
                      type="button"
                      onClick={handleSkip}
                      className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 font-bold text-sm text-gray-300 hover:text-white transition"
                    >
                      Skip Element
                    </button>
                    <button
                      type="submit"
                      className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-indigo-500/10 transition"
                    >
                      Check All Answers
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => pickNextElement()}
                    className="w-full sm:w-auto px-10 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-extrabold text-sm shadow-lg shadow-green-500/20 transition animate-pulse"
                  >
                    Next Mystery Element →
                  </button>
                )}
              </div>
            </div>
          </form>

          {/* Submission Banner Message */}
          {isSubmitted && (
            <div className={`mt-6 p-4 rounded-xl text-center font-bold border ${
              isCurrentAllCorrect 
                ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border-red-500/20 text-red-400'
            }`}>
              {isCurrentAllCorrect ? (
                <span>🎉 Perfect Score! All three answers match the element! (+1 Score & Streak)</span>
              ) : (
                <span>⚠️ Some values were incorrect or skipped. Study them above and try the next one!</span>
              )}
            </div>
          )}
        </div>

        {/* Periodic Table Grid Layout */}
        <div className="w-full max-w-7xl overflow-x-auto pb-6 custom-scrollbar">
          <div 
            className="grid gap-1 min-w-[960px] p-2 bg-gray-900/50 rounded-2xl border border-gray-800/60" 
            style={{ 
              gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
              gridTemplateRows: 'repeat(10, minmax(0, 1fr))'
            }}
          >
            {/* Render Elements */}
            {elementsData.map(el => {
              const isTarget = currentElement && currentElement.n === el.n;
              const colorClass = categoryColors[el.c] || categoryColors['Unknown'];
              
              return (
                <div 
                  key={el.n}
                  style={{ gridColumn: el.col, gridRow: el.r }}
                  className={`
                    relative rounded-lg border aspect-square flex flex-col 
                    transition-all duration-300 ease-in-out cursor-default overflow-hidden
                    ${colorClass}
                    ${isTarget 
                      ? 'ring-4 ring-blue-400 ring-offset-4 ring-offset-gray-950 scale-110 z-20 bg-opacity-100 shadow-[0_0_25px_rgba(59,130,246,0.6)] border-blue-400' 
                      : 'border-gray-800/50'}
                  `}
                >
                  {renderCellContent(el)}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Legend */}
        <div className="w-full max-w-5xl mt-2 flex flex-wrap justify-center gap-2.5 text-[11px] font-medium">
            {Object.entries(categoryColors).map(([name, cls]) => {
              const colorMatches = cls.match(/bg-([a-z]+)-/);
              const colorName = colorMatches ? colorMatches[1] : 'gray';
              return (
                <div key={name} className="flex items-center gap-1.5 bg-gray-900/80 px-2.5 py-1 rounded-full border border-gray-800/80 text-gray-300">
                  <span className={`w-2.5 h-2.5 rounded-full bg-${colorName}-500 inline-block`} />
                  {name}
                </div>
              )
            })}
        </div>

      </main>
      
      {/* Dynamic styles fallback simulation for Tailwind safelists */}
      <style dangerouslySetInnerHTML={{__html: `
        .bg-green-500 { background-color: #22c55e; }
        .bg-purple-500 { background-color: #a855f7; }
        .bg-red-500 { background-color: #ef4444; }
        .bg-orange-500 { background-color: #f97316; }
        .bg-teal-500 { background-color: #14b8a6; }
        .bg-cyan-500 { background-color: #06b6d4; }
        .bg-yellow-500 { background-color: #eab308; }
        .bg-blue-500 { background-color: #3b82f6; }
        .bg-pink-500 { background-color: #ec4899; }
        .bg-rose-500 { background-color: #f43f5e; }
        .bg-gray-500 { background-color: #6b7280; }
        
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0b0f19; 
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b; 
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155; 
        }
      `}} />
    </div>
  );
}
