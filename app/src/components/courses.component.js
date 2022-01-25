import React, { Component } from 'react';
import { getMyCourses } from '../api/course.api';

export default class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = { coursesCollection: [] };
    }

    componentDidMount() {
        getMyCourses({ url: process.env.REACT_APP_API_URL, port: 4000, token: process.env.REACT_APP_API_TOKEN })
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
                                    <td data-cy="id">
                                        {data._id}
                                    </td>
                                    <td data-cy="name">
                                        {data.name}
                                    </td>
                                    <td data-cy="author">
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