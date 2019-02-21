import React from 'react';
import { Table } from 'reactstrap';

export default class SkillsTable extends React.Component {
    render() {
        return (
            <Table>

                <tbody>
                    <tr>
                        <td>Javascript</td>
                        <td>React</td>
                        <td>Redux</td>
                        <td>React Router</td>
                    </tr>
                    <tr>
                        <td>HTML</td>
                        <td>SVG</td>
                        <td>ES6</td>
                        <td>Git</td>
                    </tr>
                    <tr>
                        <td>Bootstrap</td>
                        <td>CSS</td>
                        <td>Flex-box</td>
                        <td>Css-Grid</td>
                    </tr>
                    <tr>
                        <td>Debugging</td>
                        <td>JQuery</td>
                        <td>VBA</td>
                        <td>Inkscape</td>
                    </tr>
                    <tr>
                        <td>Word</td>
                        <td>PowerPoint</td>
                        <td>SharePoint</td>
                        <td>Excel</td>
                    </tr>

                </tbody>
            </Table>
        );
    }
}