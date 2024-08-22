"use client";

import React, { useState } from 'react';
"use client"
 


import useSWR from 'swr';
import {fetcher} from '@/utils/fetcher';

function MyComponent() {
  const { data, error } = useSWR('/api/data', fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return <div>Data: {JSON.stringify(data)}</div>;
}

const Tournament = () => {
  const [time, setTime] = useState('');
  const [players, setPlayers] = useState('');
  const [entryFee, setEntryFee] = useState('');
  const [duration, setDuration] = useState('');
  const [success, setSuccess] = useState<boolean>(false);



  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Send data to the server-side API route

    // const { data, error } = useSWR('/api/data', fetcher);
    const response = await fetcher('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ time, players, entryFee, duration }),
    });

    if (response.ok) {
      setSuccess(true);
      console.log(success);
    }
  };
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     console.log('Tournament Time:', time);
//     console.log('Number of Players:', players);
//     console.log('Entry Fee (SOL):', entryFee);
//     console.log('Duration:', duration);
//   };

return (
    <div>
        <h1>Create Tournament</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Start Time of Tournament:</label>
                <input
                    type="datetime-local"
                    value={time}
                    onChange={(e) => setTime((e.target as HTMLInputElement).value)}
                    required
                />
            </div>
            <div>
                <label>Duration (hours or days):</label>
                <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Number of Players:</label>
                <input
                    type="number"
                    value={players}
                    onChange={(e) => setPlayers(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Entry Fee (SOL):</label>
                <input
                    type="number"
                    step="0.01"
                    value={entryFee}
                    onChange={(e) => setEntryFee(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Tournament</button>
        </form>
    </div>
);
};



export default Tournament;

// make an api post request to create a tournament
