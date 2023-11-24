function App() {
  return (
    <div className="max-w-xs mx-auto my-8 bg-gray-200 p-4 rounded-lg">
      <input type="text" className="bg-white p-2 text-right rounded-lg mb-4" disabled />
      <div className="grid grid-cols-4 gap-2">
        <button className="col-span-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">1</button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">C</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">2</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">3</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">4</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">5</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">6</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">7</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">8</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">9</button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">C</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">0</button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">=</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">+</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">-</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">*</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">/</button>
      </div>
    </div>
  );
}

export default App
