# darn-simple-audio
Simple yet customizable audio player component for react

# Install
`npm install darn-simple-audio --save`

# Usage 
```
import React from "react";

import { SingleAudioPlayer } from "darn-simple-audio";

class App extends React.Component {

  render() {
    return (
      <SingleAudioPlayer source={this.props.audioUrl} />
    );
  }
}

export default App;

```

# Props

## SingleAudioPlayer

| props                 | type                    | default  |
|-----------------------|-------------------------|----------|
| autoPlay              | boolean                 | true     |
| showControls          | boolean                 | true     |
| showReplay            | boolean                 | true     |
| showPause             | boolean                 | true     |
| width                 | number / string         | 280      |
| height                | number / string         | 280      |
| source                | string                  | ""       |
| albumArt              | URL (string)            | ""       |
| playIcon              | string / func / element |          |
| pauseIcon             | string / func / element |          |
| replayIcon            | string / func / element |          |
| onCurrentTimeChange   | func                    |          |
| onTotalDurationChange | func                    |

# Who's using it 
* [Fluent.ai](https://fluent.ai)
