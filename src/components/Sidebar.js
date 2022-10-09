import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="row">
    <div className="col-2 list-group">
    <Link href="/" className="list-group-item list-group-item-action">Home</Link>
    <Link href="#" className="list-group-item list-group-item-action list-group-item-primary">Menu 1</Link>
    <Link href="#" className="list-group-item list-group-item-action list-group-item-secondary">Menu 2</Link>
    <Link href="#" className="list-group-item list-group-item-action list-group-item-success">Menu 3</Link>
    <Link href="#" className="list-group-item list-group-item-action list-group-item-danger">Menu 4</Link>
    <Link href="#" className="list-group-item list-group-item-action list-group-item-warning">Menu 5</Link>
    <Link href="#" className="list-group-item list-group-item-action list-group-item-info">Menu 6</Link>
    <Link href="#" className="list-group-item list-group-item-action list-group-item-success">Menu 7</Link>
    <Link href="#" className="list-group-item list-group-item-action list-group-item-danger">Menu 8</Link>
    <Link href="#" className="list-group-item list-group-item-action list-group-item-warning">Menu 9</Link>
    <Link href="#" className="list-group-item list-group-item-action list-group-item-info">Menu 10</Link>
    </div>
    </div>

  )
}

export default Sidebar