import React from 'react';
import SecondCard from "../../NewsCard/Secondcard";
import moment from 'moment';

const OptionTwo = () => {
    const [data, setData] = React.useState({ topics: [] });

  React.useEffect(() => {
    fetch("https://tipestry.com/api/topic")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
   
    return(
        <div>
        {data.topics.map((topic) => (
            <SecondCard
            title={topic.title}
            username={topic.userId ? topic.userId.username : ""}
            tags={topic.tags}
            websiteUrl={topic.siteId ? topic.siteId.url : ""}
            upVotes={topic.upVotes}
            commentsCount={topic.commentsCount}
            imageUrl={topic.url}
            dateCreated={moment(topic.createdAt).fromNow()}
            />
          ))}
          </div>
      
    )
}
export default OptionTwo;