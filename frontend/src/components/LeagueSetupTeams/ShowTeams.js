// import React from 'react';
// import axios from 'axios';

// const ShowTeams = props => {
//   return (
//     <div>
//       {props.teams.map(team => {
//         return <h5 key={team.id}>{team.name}</h5>;
//       })}
//     </div>
//   );
// };

// export default ShowTeams;

import React from 'react';

const ShowTeams = props => {
  return (
    <div>
      {props.teams.map(team => {
        return <h4 key={team.id}>Team {team.id} Name - {team.name}</h4>;
      })}
    </div>
  );
};

export default ShowTeams;
