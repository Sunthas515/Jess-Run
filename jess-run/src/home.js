import React from 'react';
import { useState } from 'react';
import { Input } from 'reactstrap';

export default function Home() {
    const [names, setInput] = useState('');
    return (
      <div className="Home">
        <h1>CYA Cancer Baton</h1>
        <Input type="text" name="runnerNames" value={names} onInput={e => setInput(e.target.value)}/>
        <h2>{names}</h2>
      </div>
    );
}