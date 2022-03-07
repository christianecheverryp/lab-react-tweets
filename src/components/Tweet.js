import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import TimeStamp from "./Timestamp";
import User from "./User";

function Tweet(props) {
  console.log(props)
  return (
    
    <div className="tweet">

      <ProfileImage image={props.tweet.user.image}/>



      <div className="body">

        <div className="top">

          <User userData ={props.tweet.user}/>
          <TimeStamp time={props.tweet.timestamp}/>

        </div>

          <Message message={props.tweet.message}/>
          <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
