import * as React from 'react';

import Note from 'src/components/Note';

class App extends React.Component {
    render() {
        const uid: string = 'uniquer_id';
        return (
            <div className="App">
                <Note uid={uid} />
            </div>
        );
    }
}

export default App;
