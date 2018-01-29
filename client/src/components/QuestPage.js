import React, {Component} from 'react'
import styled from 'styled-components'

const QuestPageContainer = styled.div `
font-size: 40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.characterPortrait{
}
.questContent{
  width: 70vw;
  background-image: url("https://i.imgur.com/SfRMhgx.png");
  background-color: tan;
  padding: 10%;
  color: #250500;

}
.questObjective{
  margin: 5%;
}
`

class QuestPage extends Component {
  render() {
    return (
      <QuestPageContainer>
        <div className="header">
          <div className="characterPortrait">
            <img src="" alt=""/>
            <div>
              Brocier
            </div>
          </div>
        </div>
        <div className="questContent">
          <div className="questText">
            Quest Title: Beating Them Back!
            <br/>
            So you're the new recruit from Stormwind, eh?
            <br/>
            I'm Marshal McBride, commander of this garrison. Glad to have you on board...
            <br/>
            McBride looks through some papers.
            <br/>
            "Brocier."
            <br/>
            It is Brocier, right? You've arrived just in time.
            <br/>
            The Blackrock orcs have managed to sneak into Northshire through a break in the
            mountain. My soldiers are doing the best that they can to push them back, but I
            fear they will be overwhelmed soon.
            <br/>
            Head northwest into the forest and kill the attacking Blackrock worgs!
            <br/>
            Help my soldiers!
          </div>
          <div className="questObjective">
            Objective: Kill 6 Blackrock Worgs.
          </div>
          <div className="questExpository">
            The vorpal blade went snicker-snack!
            <br/>
            6 Less Worgs haunt these woods thanks to your quick handi-work.
          </div>
          <div className="questCompletion">
            Completion:
            <br/>
            You've bought us a little time, Brocier, but we've got even bigger problems to
            deal with now.
          </div>
        </div>
      </QuestPageContainer>
    )
  }
}
export default QuestPage