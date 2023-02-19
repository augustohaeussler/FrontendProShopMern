import { render } from "@testing-library/react"; 

import { getProducts } from "../api/products";


describe('Product APIS test', ()=> {
        test('Get the product', () =>{
        expect(getProducts).not.toBeNull()
    } )
})


