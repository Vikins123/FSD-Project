import React, {useState} from  "react";
import Header from "../components/Header";
import {Box , Typography, Button} from '@mui/material';
import AddInvoice from "../components/AddInvoice";


const Home = () => {

    const [addInvoice, setAddInvoice] = useState(false);

    const toggleInvoice = () => {
        setAddInvoice(true);
    }

    // const toggleInvoice=
  return (
    <>
          <Header />
          <Box  style={{ margin: 20}}>
            <Typography variant="h4">
                Pending Invoice
            </Typography>
            { !addInvoice && <Button 
                            variant="contained" 
                            onClick={() => toggleInvoice()}
                            style={{ marginTop: 15 }}
                        >Add Invoice</Button>
            }
            { addInvoice && <AddInvoice/> }
          </Box>
                    
    </>
      
    
  )
}

export default Home;
