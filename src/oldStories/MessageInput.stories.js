import MessageInput from "../components/formComponents/MessageInput"

export default {
    title: "Kosz/Input",
    component: MessageInput,
}

const Template = args => 
<MessageInput {...args} >
</MessageInput>

export const Message_Input = Template.bind({})
Message_Input.args = {
    label: "Wiadomość",
    type: "text",
    name: "message",
    rows: 7
}

export const Big_Message_Input = Template.bind({})
Big_Message_Input.args = {
    label: "Wiadomość",
    type: "text",
    name: "message",
    rows: 12,
}
