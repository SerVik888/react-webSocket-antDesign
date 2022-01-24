import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'
import s from './auth.module.css'
import { Preloader } from '../preloader/Preloader'

export const Auth = ({ authRequest, authProgress }) => {
  const onFinish = (values) => {
    values.password = values.password.replace(/\s/g, '')
    authRequest()
  }

  const validatePassword = (rule, value) => {
    const reg = /(?=.*[A-Z]){8,}/g
    return reg.test(value)
      ? Promise.resolve(value)
      : Promise.reject(
          'Пароль должен содержать не менее 8 символов и иметь хотя бы одну заглавную букву'
        )
  }

  return (
    <div className={s.loginForm}>
      {authProgress && <Preloader />}

      <Form layout="vertical" name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="email"
          label="Электронная почта :"
          rules={[
            {
              type: 'email',
              message: 'Некорректный адрес электронной почты',
            },
            {
              required: true,
              message: 'Введите ваш адрес электронной почты',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Пароль :"
          name="password"
          type="password"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите пароль',
            },
            {
              validator: validatePassword,
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Авторизация
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
