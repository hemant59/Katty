import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var FontAwesome = require('react-fontawesome')
const pdfSample = "http://www.africau.edu/images/default/sample.pdf";

export default class pdfFiles extends Component {
    download = (pdfFile) => {
        console.log("Force Download PDF");
        window.open(pdfFile, "_blank");

    }
    
    delete = () => {
        console.log("Delete PDF");
    }
    render() {
        return (
            <div className='container table-responsive'>
            <h1>PDF Files</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Number</th>
                    <th>Document Name</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>jan_2022_brok_doc_1</td>
                        <td>
                            <Button onClick={() => this.download(pdfSample)} variant="outline-secondary">
                                <FontAwesome 
                                    className="super-crazy-colors"
                                    name="download"
                                />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>jan_2022_brok_doc_1</td>
                        <td>
                            <Button onClick={() => this.download(pdfSample)} variant="outline-secondary">
                                <FontAwesome 
                                    className="super-crazy-colors"
                                    name="download"
                                />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>jan_2022_brok_doc_1</td>
                        <td>
                            <Button onClick={() => this.download(pdfSample)} variant="outline-secondary">
                                <FontAwesome 
                                    className="super-crazy-colors"
                                    name="download"
                                />
                            </Button>
                        </td>
                    </tr>
                </tbody>
                </Table>
            </div>
        )
    }
}