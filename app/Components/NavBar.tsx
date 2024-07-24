import { AppBar,Button,Box,Toolbar, IconButton,Typography } from "@mui/material";

export default function NavBar(){
    return(
        <Box sx={{ display: 'flex'}}>
            <AppBar 
            sx={{
                width:'20%',
                minHeight:'100%',
                position:'fixed',
                left:0,
                backgroundColor:'rgba(44,44,56,255)'
                }}>
                <Typography sx={{textTransform:'none',fontSize:'25px',margin:'2% 0 0 10%'}}>Kanban</Typography>
                <Toolbar 
                sx={{
                    flexDirection:'column',
                    alignItems:'flex-start',
                    margin:'10% 0 0 0%'
                    }}>
                    <Typography style={{fontSize:'12px',color:'gray'}}>ALL BOARDS (0)</Typography>
                    <Button sx={{fontSize:'13px',color:'white',textTransform:'none',width:'100%',textAlign:'left','&hover':{backgroundColor:'purple'}}}>-Platform Launch</Button>
                    <Button sx={{fontSize:'13px',color:'white',textTransform:'none',width:'100%'}}>-Marketing Plan</Button>
                    <Button sx={{fontSize:'13px',color:'white',textTransform:'none',width:'100%'}}>-Roadmap</Button>
                    <Button sx={{fontSize:'13px',color:'rgba(100,95,198,255)',textTransform:'none'}}>+ Create New Board</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}