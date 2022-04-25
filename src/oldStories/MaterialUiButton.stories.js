import React from "react"
import Button from '@mui/material/Button';

export default {
    title :"Kosz/Input",
    component:Button,

    argTypes:{
        label: {
            defaultValue:"Submit",
            control:{type:"text"}
          },
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' }
          }
    }
}

export const Success = ({label}) => <Button variant="contained">{label}</Button>
