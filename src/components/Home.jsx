import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
  
        <Container>
            <Section
              title="model S"
              description="order online with touchless delivery"
              backgroundImage="model-s.jpg"
              leftBtnText="Customer Order"
              rightBtnText="Existing Inventory"
            />
       
            <Section
              title="model X"
              description="order online with touchless delivery"
              backgroundImage="model-x.jpg"
              leftBtnText="Customer Order"
              rightBtnText="Existing Inventory"
            />
       
            <Section
              title="model Y"
              description="order online with touchless delivery"
              backgroundImage="model-y.jpg"
              leftBtnText="Customer Order"
              rightBtnText="Existing Inventory"
            />
       
            <Section
              title="model 3"
              description="order online with touchless delivery"
              backgroundImage="model-3.jpg"
              leftBtnText="Customer Order"
              rightBtnText="Existing Inventory"
            />
            <Section
              title="Lowest Cost Solar Panels in America "
              description="Money-back guarantee"
              backgroundImage="solar-panel.jpg"
              leftBtnText="Order Now"
              rightBtnText="Learn More"
            />
            <Section
              title="Solar for New Roofs "
              description="Solar Roof Costs Less Than a New Roof Plus Solar Panels "
              backgroundImage="solar-roof.jpg"
              leftBtnText="Order Now"
              rightBtnText="Learn More"
            />
            <Section
              title="Accessories "
              description=" "
              backgroundImage="accessories.jpg"
              leftBtnText="Shop Now"
              
            />
       
        </Container>
  )
}

export default Home
const Container = styled.div`
    height:100vh;

`