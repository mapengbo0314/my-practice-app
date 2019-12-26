import React from "react";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 4,
          name: "Foo",
          age: "20"
        },
        {
          id: 5,
          name: "Bar",
          age: "30"
        },
        {
          id: 6,
          name: "Baz",
          age: "40"
        }
      ]
    };
  }
  render() {
    var myStyle = {
      fontSize: 30,
      color: "#FF0000"
    };
    return (
      <div style={myStyle}>
        hello world
        <Example />
        <h1> this is the header</h1>
        <h2> this could be the content</h2>
        <table>
          <tbody>
            {this.state.data.map((person, i) => (
              <TableRow key={i} data={person} />
            ))}
          </tbody>
        </table>
        <h2>{this.props.pengbo}</h2>
      </div>
    );
  }
}
App.defaultProps = {
  pengbo: "pengbo very nice"
};
class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}
class Example extends React.Component {
  render() {
    return <h1>hello Pengbo</h1>;
  }
}
export default App;
