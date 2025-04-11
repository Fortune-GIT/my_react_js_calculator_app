import { useState } from 'react'
import './App.css'
import { evaluate } from 'mathjs'

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <div className='calculator'>
        <form action="">
          <div className='display'>
            {/* <input type="text" value={value} /> */}
            <textarea rows="4" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => setValue('')} />
            <input type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
            <input type="button" value="." onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)} />
            <input
                type="button"
                value="_"
                onClick={() => {
                  // Only allow "_" if the last character is a number
                  const lastChar = value.slice(-1);
                  if (/\d/.test(lastChar)) {
                    setValue(value + "_");
                  }
                }}
              />
            <input
              type="button"
              value="="
              className="equal"
              onClick={() => {
                try {
                  const sanitized = value.replaceAll('_', '');
                  const result = evaluate(sanitized);
                  setValue(result.toString());
                } catch (error) {
                  setValue("Error");
                  console.error("Evaluation error:", error);
                }
              }}
            />
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
