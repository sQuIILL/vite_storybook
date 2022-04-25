import PopoverComponent from "../components/PopoverComonent"

export default {
  title: "Kosz/Input",
  component: PopoverComponent,
}
const Template = args => <PopoverComponent {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
}