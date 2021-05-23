import InboxProfile from "./InboxProfile";
import classes from "./Inbox.module.css";

const Messages = () => {
  return (
    <div className={classes.Messages}>
      <InboxProfile
        image="ravi.jpg"
        username="malhotraravi842"
        message="How are you ravi chaudhary ??"
        time="8h"
      />
      <InboxProfile
        image="ravi1.jpg"
        username="ravichaudhary"
        message="Follow Me"
        time="21h"
      />
      <InboxProfile
        image="ravi2.jpg"
        username="malhotraravi842"
        message="Liked a Message"
        time="8h"
      />
      <InboxProfile
        image="ravi3.jpg"
        username="ravichaudhary"
        message="Follow Me"
        time="21h"
      />
      <InboxProfile
        image="ravi4.jpg"
        username="malhotraravi842"
        message="Liked a Message"
        time="8h"
      />
      <InboxProfile
        image="ravi1.jpg"
        username="ravichaudhary"
        message="Follow Me"
        time="21h"
      />
      <InboxProfile
        image="ravi.jpg"
        username="malhotraravi842"
        message="Liked a Message"
        time="8h"
      />
      <InboxProfile
        image="ravi1.jpg"
        username="ravichaudhary"
        message="Follow Me"
        time="21h"
      />
    </div>
  );
};

export default Messages;
