import PropTypes from "prop-types"
import { useState } from "react";

export const GifItem = ({url, title, id, onDownload}) => {

  const [hidden, setHidden] = useState(true)

  const _showDownload = () => setHidden(false);
  const _hideDownload = () => setHidden(true);
  const _onDownload = () => onDownload({url, title});


  return (
    <div className="card" onMouseOver={_showDownload} onMouseLeave={_hideDownload}>
      <div>
        <img  key={id} src={url} alt={title}></img>
        <img hidden={hidden} onClick={_onDownload} id="download" src="./images/download.webp" alt="" />
      </div>
        <p> {title} </p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
