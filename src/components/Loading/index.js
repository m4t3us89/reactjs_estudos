import React from 'react';
import ReactLoading from 'react-loading';
import './styles.css'

export default ({ type="bars", color="#999" }) => (
	<div className="loading">
        <ReactLoading type={type} color={color} height={40} width={40} />
    </div>
);

