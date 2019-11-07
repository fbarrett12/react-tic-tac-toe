import React from 'react';

export default class GameContainer extends React.Component {
    state = {
        history: [{
          squares: Array(9).fill(null) 
        }],
        stepNumber: 0,
        xIsNext: true
    }

}