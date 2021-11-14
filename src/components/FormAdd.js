import { Form, Input, InputNumber, Button } from 'antd'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}
/* eslint-enable no-template-curly-in-string */

const FormAdd = (props) => {
  const onFinish = (values) => {
    props.parentCall(values)
    // props.handelShowForm(false)
  }

  return (
    <Form
      {...layout}
      name='nest-messages'
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['user', 'title']}
        label='Title'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'rating']}
        label='rating'
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'posterURL']} label='posterURL'>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'description']} label='description'>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
export default FormAdd
