import React from 'react';
import { useDataLayerValue } from '../../DataLayer';
import './style.css';

function Spinner({ loading }) {
  const [{ loader }] = useDataLayerValue();
  return loader || loading ? (
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
