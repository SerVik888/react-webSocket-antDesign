import { Button, Col, Row, Table, Typography } from 'antd'
import React from 'react'
import { Preloader } from './preloader/Preloader'

export const Users = ({ users, removeUser, limit, handlerDate }) => {
  if (!users) {
    return <Preloader />
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Роль',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Дата создания',
      dataIndex: 'ctime',
      key: 'ctime',
      render: (ctime) => handlerDate(new Date(ctime * 1000)),
    },
    {
      title: 'Действия',
      dataIndex: '',
      key: 'action',
      render: (_, user) => (
        <Button
          type="primary"
          danger
          onClick={() => {
            removeUser(user.id)
          }}
        >
          удалить
        </Button>
      ),
    },
  ]

  const dataSource = users.map((item) => ({ ...item, key: item.id }))

  return (
    <>
      <Row justify="center">
        <Col>
          <Typography.Title level={4}>Список пользователей</Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: String(limit) }}
          />
        </Col>
      </Row>
    </>
  )
}
