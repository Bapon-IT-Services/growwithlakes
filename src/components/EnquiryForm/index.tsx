import { Button, Form, Input, Select } from 'antd';
import { enquiryMail } from '../../config/mailto';
import * as S from './index.style';

type EnquiryValues = {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
};

const interestOptions = [
  { value: 'Opportunities', label: 'Opportunities' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'Events', label: 'Events' },
  { value: 'Coaching / Consultation', label: 'Coaching / Consultation' },
  { value: 'Community / Collaboration', label: 'Community / Collaboration' },
  { value: 'General enquiry', label: 'General enquiry' },
];

export default function EnquiryForm() {
  const [form] = Form.useForm<EnquiryValues>();

  const onFinish = (values: EnquiryValues) => {
    window.location.href = enquiryMail(values);
  };

  return (
    <S.FormWrap>
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={onFinish}
        initialValues={{ interest: 'General enquiry' }}
      >
        <S.Row>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input size="large" placeholder="Your name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input size="large" placeholder="Your email" />
          </Form.Item>
        </S.Row>
        <S.Row>
          <Form.Item name="phone" label="Phone (optional)">
            <Input size="large" placeholder="+44" />
          </Form.Item>
          <Form.Item
            name="interest"
            label="I am interested in"
            rules={[{ required: true, message: 'Please select an option' }]}
          >
            <Select size="large" options={interestOptions} />
          </Form.Item>
        </S.Row>
        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please enter a message' }]}
        >
          <Input.TextArea rows={4} placeholder="Tell us a little about what you are looking for..." />
        </Form.Item>
        <Button type="primary" size="large" htmlType="submit" block>
          Send Enquiry
        </Button>
      </Form>
    </S.FormWrap>
  );
}
