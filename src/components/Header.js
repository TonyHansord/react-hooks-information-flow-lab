import React, {useState} from "React";


function Header({onDarkModeClick}) {
  
  return (
    <div>
          <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
          </button>
    </div>

  )
  }