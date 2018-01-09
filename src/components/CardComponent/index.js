import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

function CardComponent(props) {
  const { title, publishedDate, url, logo } = props;
  return (
    <Card className="cardItem">
      <CardMedia
        image={logo}
        title={title}
      />
      <CardTitle title={title} subtitle={publishedDate} />

      <CardActions>
        <a href={url} target="blank">
          <FlatButton primary={true} label="Details" />
        </a>
      </CardActions>

    </Card>
  )
}

export default CardComponent;
