import React, { Component } from 'react'
import api from '../../services/api'
import { Link }  from 'react-router-dom'
import Loading  from '../../components/Loading'

import './styles.css'

export default class Main extends Component{
    state = {
        products : [],
        productInfo : {},
        page: 1,
        isLoading: false,
    }

    componentDidMount(){
        this.loadProducts()
    }

    loadProducts = async (page = 1) => {
        this.setState({
            isLoading : true
        })

        const response = await api.get(`/products?page=${page}`)
        
        const { docs, ...productInfo } = response.data

        this.setState({
            products: docs,
            productInfo,
            page,
        })


        const self = this
        setTimeout(()=>{
            self.setState({
                isLoading : false
            })
        },1000)

        //console.log(this.state.products)
    }

    prevPage = () =>{
        const { page } = this.state

        if(page === 1) return

        const pageNumber = page - 1

        this.loadProducts(pageNumber)
    }

    nextPage = () =>{
        const { page, productInfo } = this.state

        if(page === productInfo.pages) return

        const pageNumber = page + 1

        this.loadProducts(pageNumber)

    }

    render(){ 
        const { products , page, productInfo, isLoading} = this.state

        return (
            <div>
                { isLoading ?<Loading  /> : (
                    <div className="product-list">

                        {products.map(product => (
                        <article key={product._id}>
                            <strong>{product.title}</strong>

                            <p>{product.description}</p>

                            <Link to={`/products/${product._id}`}>Acessar</Link>
                        </article>   
                        ))}

                        <div className="actions">
                            <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                            <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                        </div>

                    
                    </div>
                )}
            </div>
        )
    }
}