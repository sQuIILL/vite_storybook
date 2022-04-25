import Button from "../components/Button"
import { Name_Input, Email_Input } from "./Input.stories"

export default {
  title: "Kosz/Input",
  component: Button,
  decorators: [
    (Story) => (
      <Name_Input {...Name_Input.args}>
        <Story />
      </Name_Input>
    ),
  ],
};

const Template = args => <Story {...args} />

export const Green = Template.bind({})
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
  Name_Input:{label:"qutos"}
}

// export const Small = Template.bind({})
// Small.args = {
//   backgroundColor: "red",
//   label: "Press Me",
//   size: "sm",
// }

// export const Large = Template.bind({})
// Large.args = {
//   backgroundColor: "red",
//   label: "Press Me",
//   size: "lg",
// }

// export const LongLabel = Template.bind({})
// LongLabel.args = {
//   backgroundColor: "red",
//   label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
//   size: "md",
// }