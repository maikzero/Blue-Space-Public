import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Tags from "../components/Tags.js";
import PostArea from "../components/PostArea.js";
import Question from "../components/Question.js";
import LoadingModal from '../components/LoadingModal.js';
import MessageModal from '../components/MessageModal.js';
import { load } from 'dotenv';
import { useIsMounted } from '../components/useIsMounted.js';
import Platform from '../components/Platform.js';


function HomeScreenTmp(props) {   
  //to check quiz _id matches _id of the url /quiz/_id  
  //const quiz = data.quizzes.find( x => x._id === props.match.params._id)

  /*
  if (!quiz) {
    return <div> Quiz Not Found </div>
  }
  */

  //use react hooks to set data (empty array by default)
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const isMounted = useIsMounted();

  useEffect( () => {
    const fetchData = async () => {
      try{
        const { data } = await axios.get('/api/platforms');
        setPlatforms(data);
        setLoading(false)
      } catch (err){
        setError(err.message);
        setLoading(false);
      }
      
    };
    fetchData().then(data => {
      if (isMounted.current) { setPlatforms(data); }
    });
  }, [])


  return(
    <div>
      {loading ? (
        <LoadingModal></LoadingModal>
      ) : error ? (
        <MessageModal variant="danger">{error}</MessageModal>
      ) : (
        <div>
          <Platform platforms = {platforms}></Platform>
        </div>
      )}
    </div>
  )
}

export default HomeScreenTmp