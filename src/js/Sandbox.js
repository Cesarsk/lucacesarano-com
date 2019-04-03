import React, { Component } from 'react';

//REAL USE CASE:
//You need to call a GET REQUEST for some reason which requires time and you can't afford to block the execution of the program.
//A callback gets called only after the flow of the first func ends; so that, in our case, ONLY AFTER the GET REQUEST ends, whether it's successful or not,
//the second function gets executed, possibly to handle that data.
//Note: this avoids polling (to passively check on a desired condition) or threading your code

class Sandbox extends Component {
    render() {
        //The function alertFinished is our second param.
        doJob('ISS', alertFinished);
        alert(`[main] This proves the main execution is still going`);
        return(
            <h></h>
        );
    }
}

function doJob(name, callback) {
    //First function to get called
    alert(`[doJob] Starting my ${name} Job.`);
    setTimeout(() => {
        callback();
    }, 2000);
}

//This func gets executed ONLY AFTER the execution of the first function ends.
function alertFinished() {
    alert('[alertFinished] Finished my job');
}

export default Sandbox;