import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCourse extends Component {

    constructor(props) {
        super(props)

        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeCourseAuthor = this.onChangeCourseAuthor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            author: ''
        }
    }

    onChangeCourseName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeCourseAuthor(e) {
        this.setState({ author: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const courseObject = {
            name: this.state.name,
            author: this.state.author
        };

        axios.post(`${process.env.REACT_APP_API_URL}/courses/create`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                Accept: 'application/json'
            },
            data: courseObject
        })
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', author: '' })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Course Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeCourseName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Course Author</label>
                        <input type="text" value={this.state.author} onChange={this.onChangeCourseAuthor} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Course" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}