import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'icon.png',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'favicon.ico',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'icon.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'icon.png',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'icon.png',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'icon.png',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'icon.png',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'icon.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


const GridListSimple = () => (
  <div >
    <GridList
      cellHeight={200}
      cols={3}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListSimple
