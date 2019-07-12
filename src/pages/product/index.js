import React, { Component } from 'react'

import api from '../../services/api'
import Loading  from '../../components/Loading'

import './styles.css'

export default class Product extends Component {

    state = {
        product: {},
        isLoading : false
    }

    async componentDidMount(){
        const { id } = this.props.match.params

        this.setState({
            isLoading : true
        })

        const response = await api.get(`/products/${id}`)

        this.setState({
            product: response.data
        })


        const self = this
        setTimeout(()=>{
            self.setState({
                isLoading : false
            })
        },1000)
    }

    render() {
        const { product, isLoading } = this.state
        
        return (
            <div>
                { isLoading ? <Loading  /> : (
                    <div className="product-info">
                        <h1>{product.title}</h1>
                        <h1>{product.description}</h1>
                        <p>
                            URL: <a href={product.url}>{product.url}</a>
                        </p>
                    </div>
                )}
            </div>
        )
    }
}