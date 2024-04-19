import React, { Component } from 'react'
import { CustomFile } from '../types/types'
import { FaFile } from 'react-icons/fa6'

export default class FileComponent extends Component <CustomFile>{
  render() {
    return (
      <div className='file'>
        <div className='btn'>
          <FaFile className='icon file-icon'/>
        </div>
        <span>{this.props.name}</span>
      </div>
    )
  }
}
