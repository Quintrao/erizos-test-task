import { Component } from 'react'
import { CustomFolder } from '../types/types'
import FileComponent from './FileComponent'
import { FaFolderMinus, FaFolderPlus } from 'react-icons/fa'

type FolderComponentProps = {
  folder: CustomFolder
  path: string
  expandedFolders: string[]
  pathFilter: string[]
}

export default class FolderComponent extends Component <FolderComponentProps> {
  constructor(props: FolderComponentProps) {
    super(props)
   {
      this.state = {
        isExpanded: this.props.expandedFolders.some(folder => folder.includes(this.props.path))
      }
    }
  }

updateFolderState = (pathFilter: string[], path: string) => {
  if (pathFilter.length === 0) {
    this.setState({ isExpanded: false })
  }
  if (pathFilter.length > 0 ) {
    if (pathFilter.some(filter => filter.includes(path))) {
      this.setState({ isExpanded: true })
    } else {
      this.setState({ isExpanded: false })
    }
  }
}

componentDidMount(): void {
  if (this.props.pathFilter.length === 0) {
    return
  }
  this.updateFolderState(this.props.pathFilter, this.props.path)
}

componentDidUpdate(prevProps: Readonly<FolderComponentProps>): void {
  if (prevProps.pathFilter !== this.props.pathFilter) {
    this.updateFolderState(this.props.pathFilter, this.props.path)
  }
}

  state: Readonly<{
    isExpanded: boolean
  }> = {
    isExpanded: false
  }

  render() {
    return (
        <div className='folder'>
          <div className='folder__header'>
          <button
            onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}
            className='btn'
          >
            {this.state.isExpanded ? (
              <FaFolderMinus className='icon'/>
            ) : (
              <FaFolderPlus className='icon'/>
            )}
          </button>
            <div>
              {this.props.folder.name}
            </div>
            </div>
            {this.state.isExpanded && (
              <div className='folder__content'>
                {this.props.folder.children?.map((child, index) => {
                  if (child.type === 'FOLDER') {
                    return (
                    <FolderComponent 
                    key={index} 
                    folder={child} 
                    path={`${this.props.path}/${child.name}`}
                    expandedFolders={this.props.expandedFolders}
                    pathFilter={this.props.pathFilter}
                    />
                    )
                  } else {
                    const filePath = `${this.props.path}/${child.name}`
                    if (this.props.pathFilter.length > 0 && !this.props.pathFilter.some(filter => filter.includes(filePath))) {
                      return null
                    }
                    return (
                    <FileComponent 
                    key={index}  
                    {...child}
                    />
                    )
                  }
                })}
            </div>
                )}
        </div>
    )
  }
}
