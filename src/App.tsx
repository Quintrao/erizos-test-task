import React, { Component } from 'react'
import './App.css'
import data from '../Data.json'
import { CustomFolder } from './types/types'
import FolderComponent from './components/FolderComponent'
import { getFilesPathByFileName } from './fn/search'

const defaultExpandedFolders = ['/Common7/Tools', '/VC/bin']

class App extends Component {

  state: Readonly<{
    pathFilter: string[]
  }> = {
    pathFilter: []
  }

  render() {
    return (
      <div>
      <div className='search'>
        <input 
        type='text' 
        placeholder='Please enter at least 3 characters to search...' 
        className='search__input'
        onChange={(e) => {
          if (e.target.value === '' || e.target.value.length < 3) {
            this.setState({ pathFilter: [] })
            return
          } else {
            const pathArray = getFilesPathByFileName(e.target.value)
            this.setState({ pathFilter: pathArray })
          }
        }}
        />
      </div>
      <div className='folder-container'>
        {data.map((folder, index) => {
          const typedFolder = folder as CustomFolder
          return (
            <FolderComponent 
            key={index} 
            folder={typedFolder}
            path={`/${typedFolder.name}`}
            expandedFolders={defaultExpandedFolders}
            pathFilter={this.state.pathFilter}
            />
          )
        })}
      </div>
      </div>
    )
  }
}

export default App
