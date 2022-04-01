
import { Button, Table, Input, InputNumber, Radio, Form,Progress, Divider, Breadcrumb } from 'antd'

const previewFields = {
  Input,
  InputNumber,
  Radio: Radio.Group,
  Button,
  Table,
  Form,
  'Form.Item': Form.Item,
  Progress,
  Divider,
  Breadcrumb
}

export default previewFields
