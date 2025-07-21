import React, { Component } from 'react';
import './Myapp.css';
class Myapp extends Component {
    render() {
        return (
            <div className='myInfo'>
                <img className='photo' src='img.webp' alt='photo' /><br/><br/>
                <label className='mystyle'>My Info</label>
                <table>
                    <tr>
                        <td> <label>Name</label></td>
                        <td> <label>gayathri</label></td>
                    </tr>
                <tr>
                    <td><label>Program</label></td>
                    <td><label>BTECH</label></td>
                </tr>
                <tr>
                    <td><label>email</label></td>
                    <td><label>2400032368@kluniversity.in</label></td>
                                    </tr>
                <tr>
                    <td><label>Mobile no</label> </td>
                    <td><label>918598985</label></td>
                </tr>
                <tr>
                    <td><label>Group</label></td>
                    <td><label>CSE</label></td>
                </tr>
                <tr>
                    <td><label>Course</label></td>
                    <td><label>front End Development Frameworks</label></td>
                </tr>
                </table>
            </div>
        );
    }
}

export default Myapp;