import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Checkbox, Form, Container, Table } from 'semantic-ui-react';
const axios = require("axios");

function App() {
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [posts, setPosts] = useState("");
  const [tableCells, setTableCells] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }

    const post = {
      content: content,
      source: source
    };

    setPosts(oldPosts => [...oldPosts, post]);
    // axios.post(`http://127.0.0.1:3003/addPost`, { post }, config)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
  };

  return (
    <div className="App">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Conteudo</label>
            <input placeholder='Conteudo' value={content} onChange={e => setContent(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label>Fonte</label>
            <input placeholder='Fonte' value={source} onChange={e => setSource(e.target.value)} />
          </Form.Field>
          <Button type='submit'>Cadastrar</Button>
        </Form>
        
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Conteudo</Table.HeaderCell>
              <Table.HeaderCell>Fonte</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { posts.length > 0 ?
              posts.map(post => (
                <Table.Row>
                  <Table.Cell>{post.content}</Table.Cell>
                  <Table.Cell>{post.source}</Table.Cell>
                </Table.Row>
              )) : null
            }
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}

export default App;
