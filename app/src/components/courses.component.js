import React, { Component } from 'react';
import axios from 'axios';

export default class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = { coursesCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/courses')
            .then(res => {
                this.setState({ coursesCollection: res.data.courses });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="wrapper-courses">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Author</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.coursesCollection.map((data, i) => {
                                return (
                                <tr key={i}>
                                    <td>
                                        {data._id}
                                    </td>
                                    <td>
                                        {data.name}
                                    </td>
                                    <td>
                                        {data.author}
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}