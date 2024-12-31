import React from 'react';
import './Location.scss';
import texts from '../../../constants/texts';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Map from '../Map/Map';

const Location: React.FC = () => {
  return (
    <div className="location-container">
      <div className="address-section">
        <div className="location-icon">
          <FmdGoodOutlinedIcon sx={{ fontSize: '60px' }} />
        </div>
        <div className="location-text">
          <p className="p-primary">{texts.location.street}</p>
          <p className="p-secondary">{texts.location.neighborhood}</p>
          <p className="p-tertiary">{texts.location.state}</p>
        </div>
        <a
          href={texts.location.mapUrl}
          className="btn-location"
          target="_blank"
          rel="noopener noreferrer"
        >
          {texts.location.button}
        </a>
      </div>

      <Map latitude={32.452027} longitude={-117.018823} zoom={17} />      
    </div>
  );
}

export default Location;
