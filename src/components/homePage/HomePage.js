import { Col, Row } from 'antd'
import React from 'react'
import { Events } from './Events'
import { Users } from './Users'

const handlerDate = (date) => {
  const addLeadingZero = (d) => {
    return d < 10 ? '0' + d : d
  }
  let Y = date.getFullYear()
  let M = addLeadingZero(date.getMonth() + 1)
  let D = addLeadingZero(date.getDate())
  let h = addLeadingZero(date.getHours())
  let m = addLeadingZero(date.getMinutes())
  return `${D}.${M}.${Y} ${h}:${m}`
}

export const HomePage = ({ data, removeUser, limit, events, setEvents, setData }) => {
  return (
    <Row>
      <Col span={16}>
        <Users
          data={data}
          setData={setData}
          removeUser={removeUser}
          limit={limit}
          handlerDate={handlerDate}
        />
      </Col>
      <Col span={8}>
        <Events handlerDate={handlerDate} events={events} setEvents={setEvents} />
      </Col>
    </Row>
  )
}
