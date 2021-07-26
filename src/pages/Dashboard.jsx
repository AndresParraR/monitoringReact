import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Map from '../components/Map';
import GraphCircle from '../components/GraphCircle';
import { useDispatch } from 'react-redux'
import { setNewValues } from '../redux/circularValuesDucks'
import { socket } from "../socketIO"


const Dashboard = () => {  

  const dispatch = useDispatch()

  useEffect(() => {
    socket.on("NEW_VALUES", (data) => {
      dispatch(setNewValues(data))
    });
  }, [])

  const ElementsCardGraphs = [1,2,3,4,5,6,7] 

  const useStyles = makeStyles(theme => ({
    container: {
      marginTop: 40,
      marginBottom: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    containCardMap:{
      width: '100%'
    },
    containCardGraphStatistics:{
      marginTop: '4rem',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      width: '100%'
    },
    containCardsGraphs:{
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      width: '100%',
    },
    containCardGraphAndInfo:{
      display: 'inline-grid',
      textAlign: 'center',
    },
    graphCircle:{
      margin: '0 2rem'
    },
    titleInfo:{
      fontSize: 17,
      fontWeight: 400,
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.containCardMap}>
        <Map/>
      </div>
      <div className={classes.containCardsGraphs}>
        {
          ElementsCardGraphs.map((el, index) => {
            return (
              <div className={classes.containCardGraphAndInfo}>
                <GraphCircle className={classes.graphCircle} index={index} key={el} />
                <h2 className={classes.titleInfo}>Some Values</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Dashboard