import React from 'react'
import './styles.css'
import { Button } from 'reactstrap'



export default () => ( 
    <footer id="main-footer">
        <Button color="warning">Todos os direitos reservados {new Date().getFullYear()}</Button>
    </footer>
)