import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form,Button } from "semantic-ui-react";

const FormCard=()=>{

    return(
<Form fluid>
    <Form.Field>
      <label>Text</label>
      <input placeholder='Enter text here' />
    </Form.Field>
   
   
    <Button type='submit'>Submit</Button>
  </Form>

        );
}

export default FormCard;
    
