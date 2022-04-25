import Input from "../components/formComponents/Input"

export default {
  title: "Kosz/Input",
  component: Input,
}

const Template = args => <Input {...args} />

export const Name_Input = Template.bind({})
Name_Input.args = {
    label: "Imię i nazwisko",
    type:"text",
    name:"user_name",
}

export const Email_Input = Template.bind({})
Email_Input.args = {
  label: "E-mail",
  type: "email",
  name:"user_email",

}
