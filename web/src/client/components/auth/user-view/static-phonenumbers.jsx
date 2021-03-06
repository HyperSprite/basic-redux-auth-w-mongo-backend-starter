import React, { PropTypes } from 'react';

import StaticPhoneNumber from '../../form/static-phonenumber';

const propTypes = {
  content: PropTypes.array,
  setPage: PropTypes.func,
  thisPage: PropTypes.number,
};

const staticPhoneNumbers = ({ content = [], setPage, thisPage }) => {

  const setPageFunc = thisPage ?
    () => setPage(thisPage) :
    null;

  return (
    <div  onClick={setPageFunc} >
      Phone Numbers:
      <ul>
        {content.map((pN) => {
          return (
            <li key={pN.phoneNumber} >
              <StaticPhoneNumber
                phoneType={pN.phoneType}
                phoneNumber={pN.phoneNumber}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

staticPhoneNumbers.propTypes = propTypes;

export default staticPhoneNumbers;
