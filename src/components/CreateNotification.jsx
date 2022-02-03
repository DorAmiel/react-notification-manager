import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




const useStyles = makeStyles({
    root:{
        width:'100vw',
        display:'flex',
        justifyContent:'center'
    },
    paper: {
        padding:10,
        marginTop: 200,
        width: 300,
        height: 200,
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around'
    }
});
const CreateNotification = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" component="div" >
                        Create New Notification
        </Typography>
        <TextField id="outlined-basic" label="Message" variant="outlined" />
        <Button variant="outlined">Create</Button>

        </Paper>
        </div>
 
    )
}

export default CreateNotification