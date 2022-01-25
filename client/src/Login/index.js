import { Button, Checkbox, Input, Form } from "antd"
import './styles.less';

export const Login = () => {

    const onFinish = (val) => {
        console.log(val)
    }

    const onFinishFailed = (val) => {
        console.log(val)
    }

    return (
        <Form
            className='login'
          name='login'
          initialValues={{
            email: undefined,
            password: undefined,
            rememberMe: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          >
            <Form.Item
                name='email'
                rules={[{
                    required: true,
                    message: 'Email required'
                }, {
                    type: 'email',
                    message: 'Must be valid email'
                }]}>
                    <Input
                        placeholder='Username' />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{
                    required: true,
                    message: 'Password required',
                }]}>
                    <Input.Password 
                        placeholder='Password' />
            </Form.Item>
            <Form.Item
                name='rememberMe'
                valuePropName='checked'>
                    <Checkbox>Remember Me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit'>Submit</Button> 
            </Form.Item>
          </Form>
    )
}