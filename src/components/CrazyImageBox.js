import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            tabIndex={0}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://c.wallhere.com/photos/26/d5/man_trekking_earth_under_hike_explore_climbing_cave-774901.jpg!d',
    title: 'Deep In A Cave',
  },
  {
    img: 'https://c.wallhere.com/photos/1f/f7/autumn_mountain_fall_nature_trekking_landscape_norge_hiking-1051863.jpg!s',
    title: 'On A Mountain',
  },
  {
    img: 'https://c.wallhere.com/photos/df/25/david_dave_shoes_rocks_gear_rope_cliffs_climbing-882227.jpg!s',
    title: 'Rock climbing shoes and nuts',
  },
  {
    img: 'https://c.wallhere.com/photos/c7/51/1920x1080_px_mountains_Rock_Climbing-1274967.jpg!s',
    title: 'Climber',
  },
  {
    img: 'https://c.wallhere.com/photos/c5/60/1280x1024_px_Climbing_nature_rock-732862.jpg!s',
    title: 'Climber on an arret',
  },
  {
    img: 'https://c.wallhere.com/photos/a7/79/1400x1050_px_Rock_Climbing-602613.jpg!s',
    title: 'Out door bouldering',
  },
  {
    img: 'https://c.wallhere.com/photos/3d/4e/cliff_climbing-292190.jpg!s',
    title: 'Deep water solo',
  },
  {
    img: 'https://c.wallhere.com/photos/05/63/nature_landscape_mountains_sunset_mist_Spain_shrubs_rock_climbing-130075.jpg!s',
    title: 'Dusk Mountain scene',
  },
  {
    img: 'https://c.wallhere.com/photos/d3/83/1920x1080_px_cave_Climbing_ropes-555774.jpg!s',
    title: 'repelling in a dark cave',
  },
  {
    img: 'https://c.wallhere.com/photos/ad/87/1920x1080_px_Horizon_lake_landscape_mountain_nature_rock_Rock_Climbing-707199.jpg!s',
    title: 'Sitting on top of a climb',
  },
  {
    img: 'https://c.wallhere.com/photos/55/3b/rocks_ibex_rock_climbing_rock_formation_canyon_Zion_National_Park_Utah_USA-1802307.jpg!d',
    title: 'Original Climbers',
  },
  {
    img: 'https://c.wallhere.com/photos/23/f3/women_brunette_short_hair_women_outdoors_sports_rock_climbing_climbing_rock-1217669.jpg!s',
    title: 'Fighting for the next hold a mile up!',
  },
];