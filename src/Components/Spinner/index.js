import React from 'react';
import { useDataLayerValue } from '../../DataLayer';
import './style.css';

function Spinner(props) {
  const [{ loader }] = useDataLayerValue();
  return loader ? (
    <div className='spinner'>
      <div className='loader'>
        <span></span>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Spinner;
