import React from 'react';
import EmailAndName from "../components/formComponents/EmailAndName"
import Message_Input from "./MessageInput.stories"
import { Name_Input, Email_Input } from "./Input.stories"

export default {
    title: "Kosz/Input",
    component: EmailAndName,

};
const Template = (args) => <EmailAndName {...args} />;

export const Simpul = Template.bind({});


