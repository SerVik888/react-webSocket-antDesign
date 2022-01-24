import { Col, Row, Table, Typography } from 'antd'
import React, { useEffect } from 'react'
import { Preloader } from './preloader/Preloader'

export const Events = ({ handlerDate, events, setEvents }) => {
  useEffect(() => {
    setEvents()
  }, [])

  const columns = [
    {
      title: 'Дата',
      dataIndex: 'ctime',
      key: 'ctime',
      render: (ctime) => handlerDate(new Date(ctime * 1000)),
    },
    {
      title: 'Событие',
      dataIndex: 'event',
      key: 'event',
    },
  ]

  const dataSource = events.map((item) => ({ ...item, key: item.ctime }))

  return (
    <>
      <Row justify="center">
        <Col>
          <Typography.Title level={4}>События</Typography.Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          {events.length === 0 ? (
            <Preloader />
          ) : (
            <Table dataSource={dataSource} columns={columns} pagination={false} />
          )}
        </Col>
      </Row>
    </>
  )
}
