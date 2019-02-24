import React from 'react';
import posed from 'react-pose';

const B1 = posed.path({
  hidden: {
    fill: '#94B2FF',
    strokeDasharray: 500,
    strokeWidth: 10,
    strokeDashoffset: 50,
    stroke: '#94B2FF',
    delay: 200,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 500,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const B2 = posed.path({
  hidden: {
    fill: '#94B2FF',
    strokeDasharray: 100,
    strokeWidth: 20,
    strokeDashoffset: 150,
    stroke: '#94B2FF',
    delay: 400,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 500,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const B3 = posed.path({
  hidden: {
    fill: '#94B2FF',
    strokeDasharray: 100,
    strokeWidth: 20,
    strokeDashoffset: 150,
    stroke: '#94B2FF',
    delay: 600,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 500,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const B4 = posed.path({
  hidden: {
    fill: '#94B2FF',
    strokeDasharray: 100,
    strokeWidth: 20,
    strokeDashoffset: 150,
    stroke: '#94B2FF',
    delay: 800,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 500,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const B5 = posed.path({
  hidden: {
    fill: '#94B2FF',
    strokeDasharray: 100,
    strokeWidth: 20,
    strokeDashoffset: 150,
    stroke: '#92FF',
    delay: 1000,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 500,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const B6 = posed.path({
  hidden: {
    fill: '#94B2FF',
    strokeDasharray: 100,
    strokeWidth: 20,
    strokeDashoffset: 150,
    stroke: '#94B2FF',
    delay: 1200,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 500,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const C1 = posed.path({
  hidden: {
    fill: '#fff',
    stroke: '#FF009E',
    delay: 200,
    strokeDasharray: 10,
    strokeDashoffset: 10,
    strokeWidth: 10,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 20,
    strokeDashoffset: 0,
    strokeWidth: 0,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const C2 = posed.path({
  hidden: {
    fill: '#fff',
    stroke: '#FF009E',
    delay: 400,
    strokeDasharray: 10,
    strokeDashoffset: 10,
    strokeWidth: 10,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 30,
    strokeDashoffset: 10,
    strokeWidth: 0,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const C3 = posed.path({
  hidden: {
    fill: '#fff',
    stroke: '#FF009E',
    strokeDasharray: 10,
    delay: 600,
    strokeDashoffset: 10,
    strokeWidth: 10,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 30,
    strokeDashoffset: 0,
    strokeWidth: 0,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const C4 = posed.path({
  hidden: {
    fill: '#fff',
    stroke: '#FF009E',
    delay: 800,
    strokeDasharray: 10,
    strokeDashoffset: 10,
    strokeWidth: 10,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 30,
    strokeDashoffset: 0,
    strokeWidth: 0,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const C5 = posed.path({
  hidden: {
    fill: '#fff',
    stroke: '#FF009E',
    delay: 1000,
    strokeDasharray: 10,
    strokeDashoffset: 10,
    strokeWidth: 10,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 30,
    strokeDashoffset: 0,
    strokeWidth: 0,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const C6 = posed.path({
  hidden: {
    fill: '#fff',
    stroke: '#FF009E',
    delay: 1200,
    strokeDasharray: 10,
    strokeDashoffset: 10,
    strokeWidth: 10,
    transition: { duration: 5000, ease: 'anticipate' }
  },
  visible: {
    fill: '#fff',
    strokeDasharray: 30,
    strokeDashoffset: 0,
    strokeWidth: 0,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});

const E1 = posed.path({
  visible: {
    fill: '#fff',
    strokeDasharray: 110,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  },
  hidden: {
    fill: '#9FFFD2',
    strokeDasharray: 510,
    delay: 200,
    strokeDashoffset: 520,
    strokeWidth: 10,
    stroke: '#9FFFD2',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const E2 = posed.path({
  visible: {
    fill: '#fff',
    strokeDasharray: 110,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  },
  hidden: {
    fill: '#9FFFD2',
    strokeDasharray: 510,
    delay: 400,
    strokeDashoffset: 520,
    strokeWidth: 20,
    stroke: '#9FFFD2',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const E3 = posed.path({
  visible: {
    fill: '#fff',
    strokeDasharray: 110,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  },
  hidden: {
    fill: '#9FFFD2',
    strokeDasharray: 510,
    delay: 600,
    strokeDashoffset: 520,
    strokeWidth: 20,
    stroke: '#9FFFD2',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const E4 = posed.path({
  visible: {
    fill: '#fff',
    strokeDasharray: 110,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  },
  hidden: {
    fill: '#9FFFD2',
    strokeDasharray: 510,
    delay: 800,
    strokeDashoffset: 520,
    strokeWidth: 20,
    stroke: '#9FFFD2',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const E5 = posed.path({
  visible: {
    fill: '#fff',
    strokeDasharray: 110,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  },
  hidden: {
    fill: '#9FFFD2',
    strokeDasharray: 510,
    delay: 1000,
    strokeDashoffset: 520,
    strokeWidth: 20,
    stroke: '#9FFFD2',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});
const E6 = posed.path({
  visible: {
    fill: '#fff',
    strokeDasharray: 110,
    strokeDashoffset: 500,
    strokeWidth: 1,
    stroke: '#fff',
    transition: { duration: 5000, ease: 'anticipate' }
  },
  hidden: {
    fill: '#9FFFD2',
    strokeDasharray: 510,
    delay: 1200,
    strokeDashoffset: 520,
    strokeWidth: 20,
    stroke: '#9FFFD2',
    transition: { duration: 5000, ease: 'anticipate' }
  }
});

class Skurrt extends React.Component {
  state = {
    isVisible: true
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }, 5000);
  }
  render() {
    return (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 907.62 217.74"
      >
        <g>
          <B1
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-1"
            d="M488.13,639.9c-.2,22.84-21.75,40.21-49.4,40-12-.11-28.34-3.85-37-8.5l9.52-17a39,39,0,0,0,16.3,5.92,66.51,66.51,0,0,0,10.57.81c17.79.15,30.13-8.4,30.24-20.9.07-8.65-6.56-20-18.19-37.18-6.89-10.16-9.74-14.27-11.6-22-17.09,29.9-37.51,56.41-52.76,67.58l-14.77-16c26.13-18.53,50.24-53.19,64.52-92.74l26.45-.25c-4.92,12.94-6.88,17.73-6.95,26.15-.07,7.45,2.05,13,9.65,23.17C479.75,607.13,488.22,628.84,488.13,639.9Z"
            transform="translate(-370.41 -488.63)"
          />
          <B2
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-1"
            d="M612.87,644.83c8.06,12.81,16.86,24.67,28.08,33.42H612.34c-7.88-6.08-14.28-16.71-21.15-28.55-2.89.21-6,.43-9.14.4a56.64,56.64,0,0,1-26.15-7l-7.27,34.32-20.44-.17,40.1-188.65,20.19,1.62-13.29,62.64c9.45-8.81,20.1-15.93,32.12-15.83,38,.33,51.88,33.87,44.45,59.05C644.57,620.82,631.93,637.06,612.87,644.83ZM560.16,623A39.75,39.75,0,0,0,582,632.78c-5.44-9.67-11.37-19.34-18-27.09Zm43.17-70.8c-10.82-.09-21.45,5.35-30.9,13.92l-3,14.16C583,592.15,593,611,603.86,629.6c12.56-5.9,20.12-18.58,25.31-35.13C634.61,577,627.37,552.38,603.33,552.17Z"
            transform="translate(-370.41 -488.63)"
          />
          <B3
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-1"
            d="M729.58,549.66c4.53,4.37,12.42,8.76,10.39,21,13.15-18.64,42.32-28.25,52.18-28.17,6,.06,14.19.13,28.31,7l-15.79,19.58c-4.31-2.44-9.35-3.44-14.88-3.49-20.68-.18-46,14.51-52.92,30.8l-17.31,82.56-19.71-.17,19.61-99.62c2.76-13.2-3-17.09-10.39-22Z"
            transform="translate(-370.41 -488.63)"
          />
          <B4
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-1"
            d="M888.25,551c4.53,4.37,12.43,8.76,10.4,21,13.14-18.64,42.32-28.25,52.18-28.16,6,0,14.18.12,28.31,7l-15.8,19.58C959,568,954,567,948.46,566.94c-20.67-.18-46.05,14.51-52.92,30.8l-17.3,82.56-19.72-.17,19.62-99.61c2.75-13.2-3-17.1-10.39-22Z"
            transform="translate(-370.41 -488.63)"
          />
          <B5
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-1"
            d="M1046.92,552.4c4.53,4.37,12.43,8.77,10.4,21,13.14-18.64,42.32-28.25,52.18-28.16,6,0,14.18.12,28.31,7L1122,571.81c-4.31-2.45-9.35-3.45-14.88-3.5-20.67-.18-46.05,14.51-52.92,30.8l-17.3,82.56-19.72-.17,19.62-99.61c2.76-13.2-3-17.1-10.39-22Z"
            transform="translate(-370.41 -488.63)"
          />
          <B6
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-1"
            d="M1214.92,642.82c-1.58,16.09,3.87,24.8,17.1,24.91,11.78.1,24.83-8.2,33.37-22.31l5.23,7.26c-8.81,18.19-21.7,34.43-42.37,34.25-24.29-.21-35.94-15.46-34.53-39.49a107.75,107.75,0,0,1,1.54-11.28c1.77-10.09,7.51-33.6,13.26-59,1-4.8,2.24-9.36,3.24-14.16l-25.48-.22,2.55-16.81,26.69.24c5-21.6,9.25-41,10.53-50.41l20.2.18c-1.53,9.36-5.54,28.8-10.54,50.4l42.32.37-2.55,16.8-43.52-.37-3,12.72c-6,25.91-11,50.15-13.27,60.47A33.83,33.83,0,0,0,1214.92,642.82Z"
            transform="translate(-370.41 -488.63)"
          />
        </g>
        <g>
          <E1
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-2"
            d="M487.62,652.1c0,22.84-21.37,40.41-49,40.42-12,0-28.37-3.59-37-8.15l9.37-17.08a38.75,38.75,0,0,0,16.35,5.76,66.63,66.63,0,0,0,10.58.72c17.79,0,30.05-8.68,30-21.18,0-8.65-6.74-20-18.53-37-7-10.1-9.87-14.18-11.8-21.87-16.81,30.06-37,56.76-52.13,68.07l-14.92-15.86c26-18.77,49.74-53.65,63.66-93.33l26.45-.49c-4.8,13-6.72,17.79-6.72,26.21,0,7.45,2.17,13,9.88,23.07C478.94,619.41,487.61,641,487.62,652.1Z"
            transform="translate(-370.41 -488.63)"
          />
          <E2
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-2"
            d="M612.4,655.87c8.18,12.74,17.09,24.51,28.39,33.16l-28.61.26c-7.94-6-14.44-16.58-21.42-28.36-2.88.24-6,.49-9.13.49a56.59,56.59,0,0,1-26.21-6.72l-7,34.39H528l38.35-189,20.2,1.43-12.71,62.76c9.38-8.9,20-16.12,32-16.13,38,0,52.2,33.39,45,58.64C643.88,631.57,631.39,647.92,612.4,655.87ZM559.49,634.5a39.71,39.71,0,0,0,21.89,9.61c-5.54-9.62-11.56-19.23-18.29-26.92ZM602,563.31c-10.82,0-21.39,5.54-30.76,14.2l-2.88,14.19c13.71,11.77,23.82,30.52,34.89,49,12.5-6,20-18.77,25-35.36C633.51,587.81,626.05,563.29,602,563.31Z"
            transform="translate(-370.41 -488.63)"
          />
          <E3
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-2"
            d="M728.22,559.62c4.57,4.33,12.51,8.65,10.59,20.92,13-18.77,42.06-28.64,51.92-28.65,6,0,14.19,0,28.37,6.72l-15.61,19.72c-4.33-2.4-9.38-3.36-14.91-3.35-20.68,0-45.91,14.93-52.64,31.28L719.41,689l-19.72,0,18.69-99.8c2.64-13.22-3.13-17.06-10.59-21.87Z"
            transform="translate(-370.41 -488.63)"
          />
          <E4
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-2"
            d="M886.9,559.53c4.57,4.32,12.51,8.65,10.59,20.91,13-18.76,42.06-28.64,51.92-28.65,6,0,14.18,0,28.37,6.72l-15.61,19.73c-4.33-2.41-9.38-3.36-14.91-3.36-20.68,0-45.92,14.93-52.64,31.29l-16.54,82.72H858.37l18.69-99.79c2.64-13.23-3.14-17.07-10.59-21.88Z"
            transform="translate(-370.41 -488.63)"
          />
          <E5
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-2"
            d="M1045.58,559.43c4.57,4.33,12.51,8.65,10.59,20.91,13-18.76,42.06-28.64,51.92-28.64,6,0,14.18,0,28.37,6.71l-15.62,19.73c-4.32-2.4-9.37-3.36-14.9-3.36-20.68,0-45.92,14.94-52.64,31.29l-16.54,82.72h-19.71L1035.74,589c2.64-13.23-3.14-17.07-10.59-21.87Z"
            transform="translate(-370.41 -488.63)"
          />
          <E6
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-2"
            d="M1214.41,648.29c-1.43,16.11,4.1,24.76,17.33,24.75,11.78,0,24.76-8.43,33.16-22.62l5.3,7.21c-8.65,18.28-21.38,34.63-42.06,34.65-24.28,0-36.07-15.13-34.89-39.17a104.06,104.06,0,0,1,1.44-11.3c1.68-10.1,7.19-33.67,12.71-59.16,1-4.81,2.15-9.38,3.11-14.18H1185l2.39-16.83,26.69,0c4.8-21.64,8.87-41.12,10.07-50.49l20.19,0c-1.43,9.38-5.27,28.86-10.06,50.5l42.31,0-2.39,16.84-43.52,0-2.88,12.75c-5.75,26-10.55,50.25-12.7,60.59A33.56,33.56,0,0,0,1214.41,648.29Z"
            transform="translate(-370.41 -488.63)"
          />
        </g>
        <g>
          <C1
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-3"
            d="M487.48,664.18c0,22.84-21.48,40.35-49.13,40.29-12,0-28.36-3.67-37-8.25l9.42-17.05a38.92,38.92,0,0,0,16.33,5.8,66.19,66.19,0,0,0,10.58.75c17.79,0,30.07-8.6,30.1-21.1,0-8.65-6.69-20-18.44-37.06-6.95-10.12-9.83-14.21-11.73-21.91-16.9,30-37.15,56.67-52.32,67.93l-14.87-15.9c26-18.7,49.88-53.51,63.91-93.15l26.45-.43c-4.84,13-6.77,17.78-6.79,26.2,0,7.45,2.14,13,9.81,23.1C478.9,631.46,487.51,653.12,487.48,664.18Z"
            transform="translate(-370.41 -488.63)"
          />
          <C2
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-3"
            d="M612.25,668.29c8.15,12.76,17,24.56,28.31,33.24l-28.62.18c-7.92-6-14.39-16.62-21.34-28.42-2.88.24-6,.47-9.13.47a56.75,56.75,0,0,1-26.2-6.79l-7,34.37-20.44-.05,38.87-188.9,20.19,1.49L574,576.6c9.39-8.87,20-16.06,32-16,38,.08,52.1,33.53,44.84,58.76C643.8,644.07,631.27,660.4,612.25,668.29ZM559.4,646.78a39.74,39.74,0,0,0,21.86,9.66c-5.51-9.62-11.5-19.25-18.21-27Zm42.71-71.08c-10.82,0-21.41,5.49-30.8,14.12L568.39,604c13.68,11.81,23.74,30.59,34.76,49.12,12.51-6,20-18.71,25.08-35.29C633.56,600.29,626.15,575.75,602.11,575.7Z"
            transform="translate(-370.41 -488.63)"
          />
          <C3
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-3"
            d="M728.34,572.36c4.56,4.34,12.48,8.68,10.53,20.94,13-18.73,42.14-28.52,52-28.5,6,0,14.18,0,28.35,6.79l-15.66,19.68c-4.33-2.41-9.37-3.38-14.91-3.39-20.67,0-45.95,14.81-52.71,31.14L719.17,701.7l-19.72-.05,19-99.74c2.67-13.21-3.09-17.07-10.53-21.9Z"
            transform="translate(-370.41 -488.63)"
          />
          <C4
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-3"
            d="M887,572.69c4.56,4.34,12.48,8.69,10.53,20.94,13-18.72,42.14-28.52,52-28.5,6,0,14.18,0,28.35,6.79l-15.67,19.69c-4.32-2.42-9.37-3.39-14.9-3.4-20.67,0-46,14.81-52.72,31.14L877.85,702l-19.72,0,19-99.74c2.67-13.22-3.09-17.08-10.54-21.9Z"
            transform="translate(-370.41 -488.63)"
          />
          <C5
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-3"
            d="M1045.69,573c4.56,4.34,12.49,8.68,10.54,20.94,13-18.73,42.14-28.52,52-28.5,6,0,14.19,0,28.36,6.79l-15.67,19.68c-4.32-2.41-9.37-3.39-14.9-3.4-20.68,0-46,14.81-52.72,31.15l-16.76,82.67-19.72,0,19-99.74c2.68-13.22-3.09-17.08-10.53-21.9Z"
            transform="translate(-370.41 -488.63)"
          />
          <C6
            pose={this.state.isVisible ? 'visible' : 'hidden'}
            class="cls-3"
            d="M1214.28,662.34c-1.47,16.11,4,24.78,17.26,24.8,11.78,0,24.79-8.36,33.23-22.53l5.27,7.23c-8.69,18.25-21.47,34.58-42.14,34.53-24.29,0-36-15.22-34.78-39.26a101.9,101.9,0,0,1,1.46-11.3c1.71-10.09,7.29-33.64,12.87-59.12,1-4.81,2.18-9.37,3.15-14.18l-25.48,0,2.44-16.83,26.69.06c4.85-21.63,9-41.1,10.2-50.47l20.2,0c-1.46,9.38-5.35,28.84-10.21,50.47l42.32.09-2.44,16.83-43.52-.1-2.91,12.74c-5.83,26-10.68,50.23-12.87,60.56A33.7,33.7,0,0,0,1214.28,662.34Z"
            transform="translate(-370.41 -488.63)"
          />
        </g>
      </svg>
    );
  }
}

export default Skurrt;
