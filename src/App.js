import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Photo from './composant_prod/photos';
import Navbar from './composant_prod/nav';
import { useForm } from 'react-hook-form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


const api = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos'
});

function App() {
  const key = 'C8do7rYWidLAoBHHy2-dWQ_YLwsXmP-gbWCRoeTfGJo';
  const [val, setPhotos] = useState([]);
  const [cle, setcle] = useState('sea');
  const { register, handleSubmit, watch } = useForm();

  const onSub = (data) => {
    console.log(data);
    console.log(watch('rech'));
    setcle(watch('rech'));
  };

  useEffect(() => {
    const getAllPhotos = async () => {
      const query = cle || 'sea';
      const response = await api.get(`/?client_id=${key}&query=${query}`);
      setPhotos(response.data.results);
    };

    getAllPhotos();
  }, [cle]);

  return (
    <Container>
      <Navbar />
      <br></br>

      <form onSubmit={handleSubmit(onSub)}>
  <div className="input-group mb-3" style={{ width: '500px' }}>
    <input
      type="text"
      {...register('rech')}
      className="form-control"
      placeholder="Search..."
    />
    <button className="btn btn-primary" type="submit">Search</button>
  </div>
</form>

      <Row>
        {val.map((photo) => (
          <Photo
            pic={photo.urls.small}
            name={photo.user.name}
            description={photo.alt_description}
            key={photo.id}
          />
        ))}
      </Row>
    </Container>
  );
}

export default App;
