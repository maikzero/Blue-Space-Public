import React, { useEffect, useState } from "react";
import axios from "axios";
import Tags from "../components/Tags.js";
import PostArea from "../components/PostArea.js";
//import Question from "../components/Question.js";
import LoadingModal from "../components/LoadingModal.js";
import MessageModal from "../components/MessageModal.js";
import PlatformListArea from "../components/PlatformListArea.js";


function PlatformScreen(props) {
  //to check quiz _id matches _id of the url /quiz/_id
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [platform, setPlatform] = useState()
  //const platform = data.platforms.find( x => x._id === props.match.params._id)
  /*
  if (!platform) {
    return <div> Platform Not Found </div>
  }
  else{*/
/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/platforms");
        setPlatform(data.find( x => x._id === props.match.params.id))
        const questionsArray = await platform.findById(data.find( x => x._id === props.match.params.id).quizId)
        setLoading(false);
        console.log(questionsArray)
        //setQuestions(data);
        setQuestions(questionsArray)
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  */

  useEffect(() => {
    axios
         .get('/api/platforms')
         .then((res) => {
            setLoading(true)
            setPlatform(res?.data.find( x => x._id === props.match.params.id))
            setLoading(false)
            return res.data;
         })
         .catch((error) => {
           setError(
             "Error loading platform"
           );
           setLoading(false)
   console.log("Error loading platform");
         });
}, []);

  return (
    <div>
      {loading ? (
        <LoadingModal></LoadingModal>
      ) : error ? (
        <MessageModal variant="danger">{error}</MessageModal>
      ) : (
        <div>
          <Tags />
          <PostArea platform={platform}/>
        </div>
      )}
    </div>
  );
  

  //use react hooks to set data (empty array by default)
  
}

export default PlatformScreen;
