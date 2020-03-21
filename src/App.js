import React from 'react';
import './App.css';
import { Grid,Container } from "semantic-ui-react";
import FormCard from './Components/FormCard';
import InfoCard from './Components/InfoCard';

function App() {
  return (
  <React.Fragment>
    <Container fluid>
    <Grid fluid>
      <Grid.Column width={4}>
    <FormCard>

    </FormCard>
      </Grid.Column>
      <Grid.Column width={4}>
      <InfoCard>

</InfoCard>
      </Grid.Column>
    </Grid>
    </Container>
  
    
  </React.Fragment>
    
  );
}

export default App;
