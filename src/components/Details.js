import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const {id,company,img,info,price,title,inCart}= value.detailProduct;
                    
                        return (
                                <div className="container py-5">
                                    {/*Title*/}
                                    <div className="row">
                                    <div className="col-10 mx-auto text-center
                                    text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                    </div>
                                    </div>
                                    {/*End Title*/}
                                    {/*Product Info*/}

                                    <div className="row">
                                        <div className="col-10 mx-auto col-md-6 my-3 ">
                                            <img src={img} className="img-fluid" alt="product"/>
                                        </div>

                                        {/*Product Text*/}
                                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                                <h2>Model: {title}</h2>
                                                <h3 className="text-title text-uppercase
                                                text-muted mt-3 mb-2">
                                                made by:<span className="text-uppercase">
                                                {company}
                                                </span>
                                                </h3>
                                                <h3 className="text-blue">
                                                    <strong>
                                                        price: <span>$</span>
                                                        {price}
                                                    </strong>
                                                </h3>
                                                <p className="text-capitalize font-weight-bold 
                                                mt-3 mb-0">
                                                    some info about product:
                                                </p>
                                                <p className="text-muted lead">{info}
                                                </p>
                                                {/*Buttons*/}
                                                <div>
                                                        
                                                <Link to="/">
                                                    <ButtonContainer>back to products</ButtonContainer>
                                                </Link>
                                                        <ButtonContainer
                                                            cart
                                                            disabled={inCart ? true : false}
                                                            onClick={() => {
                                                            value.addToCart(id);
                                                            value.openModal(id);
                                                            }}
                                                        >
                                                            {inCart ? "in cart" : "add to cart"}
                                                        </ButtonContainer>
                                                
                                                </div>
                                        </div>
                                    </div>
                                </div>

                        )
                    }
                }

            </ProductConsumer>
        )
    }
}
