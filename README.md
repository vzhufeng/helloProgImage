# helloProgImage

a react component, a progressive image

## Install

```bash
npm install hello-prog-image
```

## Usage

pass `src` to `<hello-prog-image />`, it should be an array, with images url in order of image quality.

other props will be passed without modifying.

an example as below

```jsx
import React, { Component } from "react";

import Image from "hello-prog-image";

class App extends Component {
  render() {
    return (
      <div>
        <Image
          alt={"haha"}
          className="test-image"
          src={[
            "http://odum9helk.qnssl.com/resource/gogopher.jpg?imageView2/1/q/1",
            "http://odum9helk.qnssl.com/resource/gogopher.jpg?imageView2/1/q/10",
            "http://odum9helk.qnssl.com/resource/gogopher.jpg?imageView2/1/q/30",
            "http://odum9helk.qnssl.com/resource/gogopher.jpg?imageView2/1/q/50"
          ]}
        />
      </div>
    );
  }
}
```
