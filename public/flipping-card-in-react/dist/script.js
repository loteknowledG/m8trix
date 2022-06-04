function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "page-container" }, /*#__PURE__*/

      React.createElement(BlogCard, null), /*#__PURE__*/
      React.createElement("footer", null, "Image credit: ", /*#__PURE__*/
      React.createElement("a", { href: "https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png" }, "8pxl on Tumblr"))));



  }}


class BlogCard extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "flip",




    () => {
      this.setState({ flipped: !this.state.flipped });
    });this.state = { flipped: false };this.flip = this.flip.bind(this);}
  render() {
    return /*#__PURE__*/(


      React.createElement("div", { onMouseEnter: this.flip, onMouseLeave: this.flip, className: "card-container" + (this.state.flipped ? " flipped" : "") }, /*#__PURE__*/

      React.createElement(Front, null), /*#__PURE__*/
      React.createElement(Back, null)));



  }}


class Front extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "front" }, /*#__PURE__*/
      React.createElement(ImageArea, null), /*#__PURE__*/
      React.createElement(MainArea, null)));


  }}


class Back extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "back" }, /*#__PURE__*/
      React.createElement("p", null, "Some sample text to demonstrate how these cards will work, including how they truncate long sentences. This section displays the full-length blog post."), /*#__PURE__*/
      React.createElement("p", null, "Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.")));


  }}


class ImageArea extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "image-container" }, /*#__PURE__*/
      React.createElement("img", { className: "card-image", src: "https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png" }), /*#__PURE__*/
      React.createElement("h1", { className: "title" }, "An example blog post")));


  }}



class MainArea extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "main-area" }, /*#__PURE__*/
      React.createElement("div", { className: "blog-post" }, /*#__PURE__*/
      React.createElement("p", { className: "date" }, new Date().toLocaleDateString()), /*#__PURE__*/
      React.createElement("p", { className: "blog-content" }, "Some sample text to demonstrate how these cards will work, including how they truncate long sentences."), /*#__PURE__*/


      React.createElement("p", { className: "read-more" }, "Hover to read more..."))));





  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));