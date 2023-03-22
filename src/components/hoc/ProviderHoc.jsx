import React, { Component } from "react";

const cool = (Fra) => {
  return class ProviderHoc extends Component {
    render() {
      return (
        <div>
          <Fra value="night manager"></Fra>
        </div>
      );
    }
  };
};

export default cool;



// --------------------




// const ProviderHoc = (hoc) => {
//   return class ProviderHoc extends Component {
//     render() {
//       return (
//         <div>
          
//         </div>
//       )
//     }
//   }
// }

// export default cool


