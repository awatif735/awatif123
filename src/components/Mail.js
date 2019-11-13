import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

class Mail extends Component {
  state = {
    inbox: [ 
      {
        picture: "profile.jpeg",
        Reciever: "Awatif",
        Sender: "Niyamath",
        message: "How are you today?",
        deleted:false
      },
      {
        picture: "profile2.jpg",
        Reciever: "Niyamath",
        Sender: "Awatif",
        message: "Amazingly good",
        deleted:false
      }
    ]
  };
  style = {
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: "Grey"
    },
    inline: {
      display: "inline"
    }
  };
  handleDelete(index){
      var i=this.state.picture
      i[index].delete=true;
    this.setState({delete:i})
    
  }

  render() {
    return (
      <List>
        <ListItem alignItems="flex-start">  
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="./images/profile.jpeg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="./images/profile.jpeg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="./images/profile.jpeg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
          <IconButton aria-label="delete" onClick={this.handleDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </List>
    );
  }
}

export default Mail;
