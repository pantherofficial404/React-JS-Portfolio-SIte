import * as React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid, Button } from '@material-ui/core';
import { WorkStyle } from '../Style/Index';
import { P1, P2, P3 } from '../Constants/Images';
const data = [
  { id: 1, title: 'Hospital Management System', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P1, tags: 'React JS' },
  { id: 2, title: 'Library Management System', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P2, tags: 'React Native' },
  { id: 3, title: 'Parking System', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P3, tags: 'React JS' },
  { id: 4, title: 'Portfolio Site', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P2, tags: 'Angular' },
  { id: 5, title: 'Apty Lens', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P1, tags: 'Node JS' },
  { id: 6, title: 'Estate Management System', desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', image: P3, tags: 'Angular' },
]
const Work: React.FC<{}> = () => {
  const style = WorkStyle();
  const [selectedIndex, setIndex] = React.useState(0);
  const filters = ['All', 'React JS', 'React Native', 'Angular', 'Node JS'];
  const handleFilter = value => {
    setIndex(value);
  };
  return (
    <div className={style.container}>
      <div className={style.filterContainer}>
        {filters.map((filter, index) => {
          return (
            <Typography variant="body2" className={selectedIndex === index ? style.selectedFilter : style.filter} onClick={() => handleFilter(index)}>{filter}</Typography>
          )
        })}
      </div>
      <Grid container >
        {data.map(d => {
          return (
            <Grid item xs={12} sm={4} md={4} className={style.projectContainer} key={d.id}>
              <Card>
                <CardMedia className={style.imageContainer}>
                  <img src={d.image} alt="react" className={style.image} />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={style.projectTitle}>{d.title}</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {d.desc}
                  </Typography>
                  <div className={style.buttonContainer}>
                    <Button className={style.moreButton}>Read More</Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
};
export default Work;
