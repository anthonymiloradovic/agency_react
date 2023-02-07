import React from 'react';
import { useParams } from 'react-router-dom';
import clientsData from '../data/data';

const StudyCase = () => {
  const { clientName } = useParams();
  const client = clientsData[clientName];

  let content;
  if (client) {
    content = client.content;
   
    
  } else {
    content = <div>Client non trouvé</div>;

  }

  return (
    <div>
      
      {client.content}
      
    </div>
  );
};

export default StudyCase;
