import React from 'react';
export default function History(props) {
  let history = localStorage.getItem('object') ? JSON.parse(localStorage.getItem('object')) : [];
  return (
    <>
      {history.map((items) => {
        return (
          <li className='method' key={items.method + items.url}>
            <span>{items.method}</span>
            <span>{items.url}</span>
          </li>
        );
      })}
    </>
  );
}