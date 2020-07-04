import React, { Component } from "react";

import { SketchField, Tools } from 'react-sketch';
import "./Canvas.css";


class Canvas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lineWidth: 10,
            lineColor: 'black',
            fillColor: '#68CCCA',
            backgroundColor: 'transparent',
            tool: Tools.Pencil,
            controlledSize: false,
            sketchWidth: 600,
            sketchHeight: 600,
            stretched: true,
            stretchedX: false,
            stretchedY: false,
            originX: 'left',
            originY: 'top',
            imageUrl: '',
        };
    }

    addImage = (img) => {
        this._sketch.addImg(img)
    }

    onBackgroundImageDrop = (e ) => {
        debugger
        let accepted = e.target.files;
        if (accepted) {
            debugger
            let sketch = this._sketch;
            let reader = new FileReader();
            let { stretched, stretchedX, stretchedY, originX, originY } = this.state;
            reader.addEventListener(
                'load',
                () =>
                    sketch.setBackgroundFromDataUrl(reader.result, {
                        stretched: stretched,
                        stretchedX: stretchedX,
                        stretchedY: stretchedY,
                        originX: originX,
                        originY: originY,
                    }),
                false,
            );
            reader.readAsDataURL(accepted[0]);
        }
    };

    render() {
        return (
            <>
                <SketchField width='1200px'
                    height='768px'
                    tool={Tools.Select}
                    ref={c => (this._sketch = c)}

                    backgroundColor={
                        this.state.fillWithBackgroundColor
                            ? this.state.backgroundColor
                            : 'transparent'
                    }
                    lineColor='black'
                    lineWidth={3} />

           
            </>
        )
    }
}

export default Canvas;