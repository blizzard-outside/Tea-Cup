import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VarietyBar from "../components/VarietyBar";
import ProductList from "../components/ProductList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchVarieties, fetchProducts} from "../http/productAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchVarieties().then(data => product.setVarieties(data))
        fetchProducts(null, null, 1, 2).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page, 2).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType, product.selectedVariety,])

    return (
        <Container>
            <Row className="mt-2">                
                <Col md={9}>
                    <VarietyBar/>
                    <ProductList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
