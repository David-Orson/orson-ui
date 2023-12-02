Orson UI is a React component library designed to simplify the development of modern web applications. It leverages the power of React and Styled Components to provide a set of reusable and customizable UI components.

Installation
To use Orson UI in your project, you'll need to install it via npm. You also need to ensure that styled-components is installed, as it's a peer dependency of this library.

bash
Copy code
npm install orson-ui styled-components
This will add both Orson UI and Styled Components to your project's dependencies.

Usage
Import the components you need from Orson UI and use them in your React application just like any other React component.

javascript
Copy code
import React from 'react';
import { Button } from 'orson-ui';

function MyApp() {
return (
<div>
<Button onClick={() => console.log('Button clicked!')}>
Click Me
</Button>
</div>
);
}

export default MyApp;
Components
Currently, Orson UI includes the following components:

Button: A customizable button component.
More components are planned for future releases.

Contributing
Contributions to Orson UI are welcome! If you have a feature request, bug report, or a pull request, please feel free to contribute.

License
Orson UI is MIT licensed.
