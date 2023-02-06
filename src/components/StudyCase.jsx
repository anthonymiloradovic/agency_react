import React from 'react';
import { useParams } from 'react-router-dom';

const clientsData = {
  platon: {
    content: <div>Contenu de l'étude de cas pour Platon</div>
  },
  solane: {
    content: <div>Contenu de l'étude de cas pour Solane</div>
  },
  sedal: {
    content: <div>Contenu de l'étude de cas pour Sedal</div>
  },
};

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
      {content}
    </div>
  );
};

export default StudyCase;
