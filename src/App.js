import { Button, Radio } from "antd";
import './App.css';
import React from 'react';
import {getAllUsers} from "./client";
function App() {
  getAllUsers()
      .then(res => res.json()).then(console.log)
    return (
    <div className="App">
        <Radio.Group value='large'>
            <Radio.Button value="large">Tima</Radio.Button>
            <Radio.Button value="default">Is</Radio.Button>
            <Radio.Button value="small">Gay</Radio.Button>
        </Radio.Group>
    </div>
  );
}

export default App;
