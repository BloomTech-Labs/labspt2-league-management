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

const teamStyle = {
  fontSize: '1.2rem',
  padding: 10
  // border: '1px solid red'
};

const ShowTeams = props => {
  return (
    <div>
      {props.teams.map(team => (
        <div key={team.id} style={teamStyle}>
          {team.name}
        </div>
      ))}
    </div>
  );
};

export default ShowTeams;
