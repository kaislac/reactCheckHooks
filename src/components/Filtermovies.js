import { Select, Divider, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import React from 'react'

const { Option } = Select

const Filtermovies = (props) => {
  function handleChange(value) {
    props.showDropdowntitle && props.titleChecked(value)
    !props.showDropdowntitle && props.ratingChecked(value)
    console.log([...new Set(props.titleSelected)])
    console.log(props.showDropdowntitle)
    console.log(value) // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }

  return (
    <Select
      labelInValue
      defaultValue={{ value: 'Title' }}
      style={{ width: 120 }}
      onChange={handleChange}
    >
      {props.showDropdowntitle &&
        [...new Set(props.titleSelected)].map((movie) => {
          const { id, title, description, posterURL, rating } = movie
          return <Option value={title}>{title}</Option>
        })}
      {!props.showDropdowntitle &&
        [...new Set(props.titleSelected)].map((movie) => {
          const { id, title, description, posterURL, rating } = movie
          return <Option value={rating}>{rating}</Option>
        })}
    </Select>
  )
}
export default Filtermovies
