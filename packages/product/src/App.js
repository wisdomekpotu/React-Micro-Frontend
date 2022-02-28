import React, { Component } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Product from "./Components/Product"

export default class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <Product />
      </ChakraProvider>
    )
  }
}
