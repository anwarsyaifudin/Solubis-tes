import React, {useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Content = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users'); 
        var address = response.data;
        console.log('alamat: ', address);
        setUser(response.data);
    }



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
    <Link href="#" className="list-group-item list-group-item-action list-group-item-success">Menu 11</Link>
    <Link href="#" className="list-group-item list-group-item-action list-group-item-danger">Menu 12</Link>
    </div>
    <div className="col-10">
    <div className='columns mt-5 is-centered'>
        <div className='column is-half'>
            <Link to={`add`} className='btn btn-success'>Tambah Data</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Username</th>
                          <th>E-mail</th>
                          <th>Alamat</th>
                    </tr>
                </thead>
                  <tbody>
                      {users.map((user, index) => (
                          <tr key={user.id}>
                              <td>{index + 1}</td>
                              <td>{user.name}</td>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>{user.address.city}</td>
                          </tr>
                      ))}
                  </tbody>
            </table>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Content