import { useState,useCallback,useEffect } from "react";

function Cards() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [letters, setLetters] = useState(false);
  const[password,setPassword]=useState("");

  const generatePassword=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numbers) str+="0123456789";
    if(letters) str+="!@#$%^&*";
    for(let i=1;i<=length;i++){
        const ch=Math.floor(Math.random()*str.length)
        pass+=str.charAt(ch)
    }
    setPassword(pass);
  },[length,numbers,letters]);

  useEffect(()=>{generatePassword()},[length,numbers,letters]);

  const copyPassword=()=>{
    window.navigator.clipboard.writeText(password);
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-6">
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-6 w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-white text-center mb-4">
          Password Generator
        </h1>

        {/* Password box */}
        <input
          type="text"
          value={password}
          readOnly
          className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white/70 outline-none mb-4"
          placeholder="Generated password"
        />

        {/* Stylish Button */}
        <button onClick={copyPassword} className="w-full py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 transition">
          Copy
        </button>

        {/* Range Slider */}
        <div className="mt-4">
          <label className="text-white font-medium">Length: {length}</label>
          <input
            type="range"
            min="7"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full mt-2 accent-purple-500"
          />
        </div>

        {/* Number Checkbox */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
            className="accent-green-500 h-4 w-4"
          />
          <label className="text-white">Include Numbers</label>
        </div>

        {/* Letters Checkbox */}
        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            checked={letters}
            onChange={() => setLetters(!letters)}
            className="accent-yellow-400 h-4 w-4"
          />
          <label className="text-white">Include Letters</label>
        </div>

      </div>
    </div>
  );
}

export default Cards;
