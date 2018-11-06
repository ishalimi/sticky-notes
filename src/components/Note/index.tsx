import * as React from 'react';

interface INoteOwnProps {
    uid: string;
}

class Note extends React.Component<INoteOwnProps> {
    render() {
        return (
            <div id={this.props.uid} className="note">
                {this.props.children}
                <h1>This is a note</h1>
            </div>
        );
    }
}

export default Note;
